$(document).ready(function() {
  var translate = navigator.mozL10n.get;

  $('#content').html("<br/><br/><center><img class='spinner' src='images/spinner.gif' width='50px' height='50px'/></center>");
  var url = 'http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=20&q=http://ano.lolcathost.org/rss-sfw.xml';

  $.ajax({
    type: 'GET',
    dataType: 'jsonp',
    jsonp: 'callback',
    data: {
      format: "json"
    },
    url: url,
    success: function(data) {
  //console.log(data);
      var printa = function(e) {
        $('#content').append("<div class='item fit'><dl><dt class='title round info label fit'>" + e.title.substring(0, 17) + "</dt><dd class='fit txt'>" + e.content.split("<br><br>")[0] + "</dd></dl></div><br/>");
      //console.log(e.content.split("<br><br>")[0]);
      }

      $('#content').html("");
      data.responseData.feed.entries.map(printa);
      $("a").removeAttr("href").css("cursor","pointer");
    },
    error: function() {
      $('#content').empty();
      $('#content').append("<div data-l10n-id=\"error_message\">"+navigator.mozL10n.get("error_message")+"</div></br>");
      $('#content').append("<button data-l10n-id='reload' id=\"reload\" label'>"+navigator.mozL10n.get("reload")+"</button>");
      $('#reload').click(function(){
        location.reload();
      });
    },
    timeout: 3000
  });


});
