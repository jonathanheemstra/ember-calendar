import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  async model() {
    try {
      return await this.store.findAll('timeslot');
    } catch (error) {
      throw new Error('Oh No! Our servers are on vacation.');
    }
  }
}
