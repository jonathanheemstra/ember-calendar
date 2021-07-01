export default function () {
  this.namespace = 'api';
  this.timing = 400;

  this.get('/timeslots', function (schema, request) {
    const { name } = request.queryParams;

    return name
      ? schema.timeslots.where({ activityName: name })
      : schema.timeslots.all();
  });
}
