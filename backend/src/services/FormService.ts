import FormRepository from "../repositories/FormRepository";
import { IForm } from "../schemas/formSchema";

export default class FormService {
  private formRepo: FormRepository;

  constructor() {
    this.formRepo = new FormRepository();
  }

  async getForms(): Promise<IForm[]> {
    return await this.formRepo.find({});
  }

  async createForm(form: any): Promise<IForm> {
    return await this.formRepo.create(form);
  }
}
