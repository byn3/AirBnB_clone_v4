let dict = {};
$(document).ready(function () {
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
    if (data.status === 'OK') {
      $('#api_status').addClass('available');
    }
  });
  let url2 = 'http://0.0.0.0:5001/api/v1/places_search';
  $.ajax({ url: url2,
    type: 'POST',
    contentType: 'application/json',
    data: JSON.stringify({}),
    success: function (data) {
      for (let i = 0; i < data.length; i++) {
        let place = data[i];
        $('SECTION.places').append('<article><div class="title"><h2>' +
          place.name + '</h2><div class="price_by_night">' +
          place.price_by_night +
          '</div></div><div class="information"><div class="max_guest">' +
          '<i class="fa fa-users fa-3x" aria-hidden="true"></i><br />' +
          place.max_guest + 'Guests </div><div class="number_rooms">' +
          '<i class="fa fa-bed fa-3x" aria-hidden="true"></i> <br/>' +
          place.number_rooms + 'Bedrooms </div> <div class="number_bathrooms">' +
          '<i class="fa fa-bath fa-3x" aria-hidden="true"></i><br/>' +
          place.number_bathrooms + 'Bathroom </div></div>' +
          '<div class="user"></div>' +
          '<div class="description">' +
          place.description + '</div></article>'
        );
      }
    }
  });
});
