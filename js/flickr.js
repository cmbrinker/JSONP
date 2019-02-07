$(document).ready(function() {
  $('button').click(function() {
    $('button').removeClass('selected');
    $(this).addClass('selected');
    var flickrAPI = 'https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?';
    var filter = $(this).text();
    var flickrData = {
      tags: filter
    };
    function displayPhotos (data) {
      
    };
    $.getJSON(flickrAPI, flickrData, displayPhotos);
  });
});
