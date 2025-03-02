import { model } from "mongoose";
import { formSchema, IForm } from "../schemas/formSchema";

const FormModel = model<IForm>("forms", formSchema);

export default FormModel;
