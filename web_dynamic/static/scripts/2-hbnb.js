$.get('http://0.0.0.0:5001/api/v1/status/').done(function (data) {
  if (data.status == 200) {
    $('#api_status').addClass('available');
  }
});
