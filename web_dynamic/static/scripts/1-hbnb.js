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
});
