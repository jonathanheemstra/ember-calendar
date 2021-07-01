import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class CalendarComponent extends Component {
  @tracked selectedBooking;

  get timeslotDates() {
    return [...new Set(this.args.timeslots.map((t) => t.date))];
  }

  get firstDayOfWeek() {
    const d = new Date(this.timeslotDates[0]);
    return new Date(d.setDate(d.getDate() - d.getDay())).toISOString();
  }

  get lastDayOfWeek() {
    const f = new Date(this.firstDayOfWeek);
    return new Date(f.setDate(f.getDate() + 6)).toISOString();
  }

  get weekDates() {
    const dates = [];
    const temp = new Date(this.firstDayOfWeek);

    while (temp <= new Date(this.lastDayOfWeek)) {
      dates.push(new Date(temp));
      temp.setDate(temp.getDate() + 1);
    }

    return dates.map((d) => d.toISOString().split('T')[0]);
  }

  get bookings() {
    return this.weekDates.reduce((acc, date) => {
      acc.push({
        date,
        hasBookings: Boolean(this.timeslotDates.find((td) => td === date)),
      });
      return acc;
    }, []);
  }

  @action
  showBookings(booking) {
    const date = new Date(booking.date).toISOString().split('T')[0];
    this.selectedBooking = this.args.timeslots.toArray().filterBy('date', date);
    console.log();
  }
}
