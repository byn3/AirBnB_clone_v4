$(document).ready(function () {
  let dict = {};
  $('input[type=checkbox]').click(function () {
    console.log(this);
    if (this.checked) {
      dict[$(this).data('id')] = $(this).data('name');
    } else {
      delete dict[$(this).data('id')];
      if (dict.length === 0) {
        $('.amenities h4').text('&nbsp;');
      }
    }
    $('.amenities h4').text(Object.values(dict));
  });
  let url = 'http://0.0.0.0:5001/api/v1/status/';
  $.get(url, function (data) {
    if (data['status'] === 'OK') {
      console.log('changed it');
      $('#api_status').addClass('available');
    } else {
      $('#api_status').removeClass('available');
    }
  });
});
