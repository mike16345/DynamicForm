type ValueWithMessage<T> = {
  value: T;
  message?: string;
};

type BaseValidations = {
  required?: boolean;
};

type LengthValidation<T> = {
  minLength?: ValueWithMessage<T>;
  maxLength?: ValueWithMessage<T>;
};

type StringValidations = BaseValidations &
  LengthValidation<number> & {
    email?: boolean;
    regex?: RegExp;
  };

type NumberValidations = BaseValidations &
  LengthValidation<number> & {
    integer?: boolean;
    positive?: boolean;
  };

type BooleanOptions = BaseValidations;

type SchemaType = "text" | "number" | "date" | "boolean" | "enum";

type SchemaValidations<T extends SchemaType> = T extends "text"
  ? StringValidations
  : T extends "number"
  ? NumberValidations
  : T extends "boolean"
  ? BooleanOptions
  : never;

type Field<T extends SchemaType = SchemaType> = {
  name: string;
  label: string;
  type: React.HTMLInputTypeAttribute;
  options?: string[];
  validations?: SchemaValidations<T>;
};

type FieldOptions = {
  title: string;
  fields: Field[];
};

export type {
  Field,
  FieldOptions,
  StringValidations,
  SchemaType,
  BooleanOptions,
  NumberValidations,
  SchemaValidations,
};
