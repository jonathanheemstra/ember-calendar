import Route from '@ember/routing/route';

export default class ActivityRoute extends Route {
  async model({ name }) {
    try {
      return await this.store.query('timeslot', { name });
    } catch (error) {
      throw new Error('Oh No! Our servers are on vacation.');
    }
  }
}
