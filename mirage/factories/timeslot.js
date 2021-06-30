import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  id(i) {
    return i;
  },

  date() {
    return '';
  },

  startTime() {
    return '';
  },

  endTime() {
    return '';
  },

  activityName() {
    return '';
  },

  availableSpots() {
    return 0;
  },

  bookedCount() {
    return 0;
  },

  maxGuests() {
    switch (this.activityName) {
      case 'Activity 1':
        return 10;

      case 'Activity 2':
        return 15;

      case 'Activity 3':
        return 5;

      default:
        return 0;
    }
  },
});
