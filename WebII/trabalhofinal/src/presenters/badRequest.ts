import { IPresenter } from './IPresenter';

export class BadRequestPresenter implements IPresenter {
  statusCode: number = 400;
  response: any;

  constructor(response: any) {
    this.response = response;
  }
}