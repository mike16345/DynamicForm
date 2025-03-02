import { Schema } from "mongoose";

interface IForm extends Document {
  fields: Record<string, any>;
  name: string;
}

const formSchema = new Schema<IForm>({
  fields: {
    type: Schema.Types.Mixed,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

export { formSchema, IForm };
