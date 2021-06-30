export default function (server) {
  // Day 1 timeslots
  server.create('timeslot', {
    date: '2021-06-04',
    startTime: '10:00',
    endTime: '11:00',
    activityName: 'Activity 1',
    availableSpots: 10,
    bookedCount: 0,
    maxGuests: 10,
  });
  server.create('timeslot', {
    date: '2021-06-04',
    startTime: '11:00',
    endTime: '12:00',
    activityName: 'Activity 1',
    availableSpots: 7,
    bookedCount: 3,
    maxGuests: 10,
  });
  server.create('timeslot', {
    date: '2021-06-04',
    startTime: '13:00',
    endTime: '14:00',
    activityName: 'Activity 2',
    availableSpots: 14,
    bookedCount: 1,
    maxGuests: 15,
  });
}
