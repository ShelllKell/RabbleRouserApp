//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(document).ready(function () {

  $('.add-button').on('click', function () {
    $('.flash').hide();
    if ($('#name').val() === "" || $('#comment').val() === "") {
      $('.flash').show();
    }
  });

  var reverse = false;

  var getComments = function () {
    var commentJson = $.get("/comments");
    commentJson.success(function (jsonResponse) {
      console.log(jsonResponse)
      drawTable(jsonResponse)
    });
  };

  var drawTable = function (commentArr) {
    $('#comment-list').empty();
    if (reverse) {
      commentArr.reverse();
    }
    for (i = 0; i < commentArr.length; i++) {
      var name = "";
      if (commentArr[i].website != "") {
        name = name + "<a href=" + commentArr[i].website + " target='_blank'>" + commentArr[i].name + "</a>"
      }
      else if (commentArr[i].email != "") {
        name = name + "<a href=mailto:" + commentArr[i].email + " target='_blank'>" + commentArr[i].name + "</a>"
      }

      var gravatar = "";
      if (commentArr[i].gravatar_hash != null) {
        gravatar = gravatar + '<img src="http://www.gravatar.com/avatar/' + commentArr[i].gravatar_hash + '?d=blank">'
      }

      $('#comment-list').append('<li>' +
        '<li>' + name + '</li>' + " " +
        commentArr[i].email + " " +
        commentArr[i].website + " " +
        commentArr[i].comment + " " +
        new Date(commentArr[i].created_at) +
        gravatar +
        '</li>')
    }
  };

  $('.add-button').click(function (e) {
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

  $('.order-button').click(function (e) {
    e.preventDefault();
    reverse ^= true;
    getComments()
  })

});




