import Route from '@ember/routing/route';

export default class ApplicationRoute extends Route {
  async model() {
    try {
      const res = await this.store.findAll('timeslot');

      if (!res.data) throw new Error('Oh No! Our servers are on vacation.');

      return res.data;
    } catch (error) {
      console.error(error);
    }
  }
}
