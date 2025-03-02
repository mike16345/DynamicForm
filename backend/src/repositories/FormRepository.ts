import BaseRepository from "./BaseRepository";
import FormModel from "../models/formModel";
import { IForm } from "../schemas/formSchema";

export default class FormRepository extends BaseRepository<IForm> {
  constructor() {
    super(FormModel);
  }
}
