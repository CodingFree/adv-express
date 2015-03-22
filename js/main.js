$(document).ready(function() {
  $('#content').html("<br/><br/><center><img src='images/spinner.gif' width='50px' height='50px'/></center>");
  var url = 'http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=20&q=http://ano.lolcathost.org/rss-sfw.xml%22;';

  $.ajax({
    type: 'GET',
    dataType: 'jsonp',
    jsonp: 'callback',
    data: {
      format: "json"
    },
    url: url,
    success: function(data) {
      var printa = function(e) {
        $('#content').append("<div class='item fit'><dl><dt class='title round info label fit'>" + e.title.replace("y su ADV", "") + "</dt><dd class='fit txt'>" + e.content.split("<br><br>")[0] + "</dd></dl></div><br/>");

      }

      $('#content').html("");
      data.responseData.feed.entries.map(printa);
    },
    error: function() {
      alert("Sorry, I can't get the feed");
    }
  });

});
