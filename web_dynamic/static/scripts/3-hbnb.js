$(document).ready(function () {
  let dict = {};
  $("input[type=checkbox]").click(function () {
  console.log(this);
    if (this.checked) {
      dict[$(this).data('id')] = $(this).data('name');
	} else {
      delete dict[$(this).data('id')];
	  if (dict.length === 0){
	    $(".amenities h4").text("&nbsp;");
	  }
    }
  $('.amenities h4').text(Object.values(dict));
  });

  let url = 'http://0.0.0.0:5001/api/v1/status/';
  $.get(url, function (data) {
    if (data.status === 'OK') {
      $('#api_status').addClass('available');
  }});

  let url = 'http://0.0.0.0:5001/api/v1/places_search';
  $.ajax(url, {
    type : 'POST',
    contentType : 'application/json',
    data : JSON.stringify({})
  }
  /*
    Loop into the result of the request and create an ARTICLE tag representing
    a Place in the SECTION.places. (you can remove the Owner tag in the place
    description)
  */
});

/*
$.ajax({
    type: "GET",
    url: 'https://0.0.0.0:5001/api/v1/status/',
    data: {},
    success: console.log("poop")
});
*/
/*
$.ajax({
    url: "https://0.0.0.0:5001/api/v1/status/",
    data: {},
    error: function(xhr, statusText, errorThrown){$('#api_status').addClass('.available');}
});
*/
/*
console.log("1");
  $.ajax('https://0.0.0.0:5001/api/v1/status/').then(function (data) {
  console.log("2");
    if (data.status === "OK") {
	console.log('IT WORKS');
      $('#api_status').addClass('.available');
	    }

}); */
