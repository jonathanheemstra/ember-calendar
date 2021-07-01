import Controller from '@ember/controller';

export default class IndexController extends Controller {
  get activities() {
    return [...new Map(this.model.map((a) => [a['activityName'], a])).values()];
  }
}
