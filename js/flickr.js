// $(document).ready(function() {
//   $('button').click(function() {
//     $('button').removeClass('selected');
//     $(this).addClass('selected');
//     var flickrAPI = 'https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?';
//     var filter = $(this).text();
//     var flickrData = {
//       tags: filter,
//       format: 'json'
//     };
//     function displayPhotos (data) {
//       var photoHTML = '<ul>';
//       $.each(data.items, function(i, photo) {
//         photoHTML += '<li class="grid-25 tablet-grid-50">';
//         photoHTML += '<a href="' + photo.link + '" class="image">';
//         photoHTML += '<img src="' + photo.media.m + '"></a></li>';
//       });
//       photoHTML += '</ul>';
//       $('#photos').html(photoHTML);
//     };
//     $.getJSON(flickrAPI, flickrData, displayPhotos);
//   });
// });

$(document).ready(function() {
  $('form').submit(function(event) {
    event.preventDefault();
    var url = 'https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?';
    var searchData = $('#search').val();
    var sentData = {
      tags: searchData,
      format: 'json'
    };
    function callback (flickrData) {
      var photoHTML = '<ul>';
      $.each(flickrData.items, function(index, photo) {
        photoHTML += '<li class="grid-25 tablet-grid-50">';
        photoHTML += '<a href="' + photo.link + '">';
        photoHTML += '<img src="' + photo.media.m + '" class=image></a></li>';
      });
      photoHTML += '</ul>';
      $('#photos').html(photoHTML);
    };
    $.getJSON(url, sentData, callback);
});
});
