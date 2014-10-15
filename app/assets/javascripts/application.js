
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(document).ready(function () {

  var getComments = function() {
    var commentJson = $.get("/comments");
    commentJson.success(function(jsonResponse){
      drawTable(jsonResponse)
    });
  };

  var drawTable = function (commentArr) {
    $('#comment-list').empty();
    for (i = 0; i < commentArr.length; i++) {
      $('#comment-list').append('<li>' + commentArr[i].name + " " + commentArr[i].email + " " + commentArr[i].website + " " + commentArr[i].comment + '</li>')
    }
  };

  $('button').click(function (e) {
    e.preventDefault();
    var name = $('#name').val();
    var email = $('#email').val();
    var website = $('#website').val();
    var comment = $('#comment').val();

    $('input[type="text"]').val("")

    $.ajax({
      type: "POST",
      url: "/comments",
      data: {name: name, email: email, website: website, comment: comment}
    }).done(getComments)



    });

  getComments()


});

