import { z } from "zod";
import {
  StringValidations,
  NumberValidations,
  SchemaValidations,
  FieldOptions,
  SchemaType,
} from "../types/FieldTypes";

const createBaseSchema = (schema: any, options?: SchemaValidations<"number" | "text">) => {
  if (options?.minLength) {
    schema = schema.min(options.minLength.value, options.minLength.message);
  }

  if (options?.maxLength) {
    schema = schema.max(options.maxLength.value, options.maxLength.message);
  }

  return schema;
};

const createStringSchema = (options?: StringValidations) => {
  let schema = z.string();

  schema = createBaseSchema(schema, options);

  if (options?.email) schema = schema.email();
  if (options?.regex) schema = schema.regex(options.regex);

  if (!options?.required) return schema.optional();

  return schema;
};

const createNumberSchema = (options?: NumberValidations) => {
  let schema = z.coerce.number();

  schema = createBaseSchema(schema, options);

  if (options?.integer) schema = schema.int();
  if (options?.positive) schema = schema.positive();

  if (!options?.required) return schema.optional();

  return schema;
};

const createBooleanSchema = () => z.coerce.boolean();

const createDateSchema = () => z.coerce.date();

const createEnumSchema = (options: string[]) => {
  if (!options || options.length === 0) {
    throw new Error("Enum options cannot be empty.");
  }

  return z.enum(options as [string, ...string[]]);
};

const schemaTypeMap: Record<SchemaType, (options?: any) => any> = {
  text: createStringSchema,
  enum: createEnumSchema,
  number: createNumberSchema,
  date: createDateSchema,
  boolean: createBooleanSchema,
};

const createValidationSchema = <T extends SchemaType>(type: T, options?: SchemaValidations<T>) => {
  const schemaCreator = schemaTypeMap[type];

  return schemaCreator ? schemaCreator(options) : null;
};

const inferSchemaTypeFromFormFieldType = (type: string): SchemaType => {
  switch (type) {
    case "input":
    case "textarea":
    case "radio":
    case "password":
      return "text";
    case "select":
      return "enum";
    case "checkbox":
      return "boolean";
    case "date":
      return "date";
    case "number":
      return "number";
    default:
      return "text";
  }
};

const generateSchemaFromFields = (form: FieldOptions) => {
  const zodSchema: Record<string, any> = {};

  form.fields.forEach((field) => {
    const inferredType = inferSchemaTypeFromFormFieldType(field.type);

    if (inferredType == "enum") {
      zodSchema[field.name] = createEnumSchema(field?.options || []);
    } else {
      zodSchema[field.name] = createValidationSchema(inferredType, field.validations);
    }
  });

  return z.object(zodSchema);
};

export default generateSchemaFromFields;
