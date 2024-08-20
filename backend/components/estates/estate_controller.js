import { Dependency } from '../../libs/dependency.js';
// eslint-disable-next-line no-unused-vars
import { ForbiddenError } from '../../libs/forbidden_error.js';

export class EstateController {
  constructor() {
    this.estateService = Dependency.get('estateService');
  }

  async get(req, res) {
    const estateList = await this.estateService.getList();
    res.send(estateList);
  }

  async post(req, res) {
    await this.estateService.create(req.body);
    res.status(204).end();
  }
}
