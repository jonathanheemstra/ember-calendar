import Model, { attr } from '@ember-data/model';

export default class TimeslotModel extends Model {
  @attr('string') date;
  @attr('string') startTime;
  @attr('string') endTime;
  @attr('string') activityName;
  @attr('number') availableSpots;
  @attr('number') bookedCount;
  @attr('number') maxGuests;
}
