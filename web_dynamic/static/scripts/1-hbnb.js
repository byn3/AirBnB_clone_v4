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
});
	/*  
	  
	  if ($(this).is(":checked")) {
	    list.push(this.data('name'));
  	  }

	  if ($(this).is(":checked") === false) {
        let remove = this;

		list = jQuery.grep(list, function(value) {
		  return value != remove;
		});
		
		// list.remove(this);
	  }
    });
*/
/*
*/
 
  /*
  $("input[type=checkbox]").click(function () {
    if ($("input[type=checkbox]").checked) {
      list.append(input[type=checkbox].data-name);

	  // $(".amenities h4").text(Object.values(dict).join(', '));
    }
    else if ($("input[type=checkbox]").checked === false) {
      list.remove(this.data-name);
    }
    $('h4').text(list);
  }
  */
