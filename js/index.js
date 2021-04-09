
$(document).ready(function () {
    var scroll_start = 0;
    var startchange = $('#myBtn');
    var offset = startchange.offset();

    $(document).scroll(function() {
        scroll_start = $(this).scrollTop();

        if(scroll_start > offset.top) {
            $('.navigation').css({"background-color": "#ffffff", "transition": "background-color 300ms linear"});
            $('.home').css({"color": "black"});
            $('.projects').css({"color": "black"});
            $('.contact').css({"color": "black"});
        } else {
            $('.navigation').css({"background-color": "transparent", "transition": "background-color 300ms linear"});
            $('.home').css({"color": "#ffffff"});
            $('.projects').css({"color": "#ffffff"});
            $('.contact').css({"color": "#ffffff"});

        }
    });

    $('a.home').click(function(e){
      e.preventDefault();
      $id = $(this).attr('href');
      $('body,html').animate({
          scrollTop: $($id).offset().top -300
      }, 750);
    });

    $('a.projects').click(function(e){
      e.preventDefault();
      $id = $(this).attr('href');
      $('body,html').animate({
          scrollTop: $($id).offset().top -50
      }, 750);
    });

    $('a.contact').click(function(e){
    e.preventDefault();
    $id = $(this).attr('href');
    $('body,html').animate({
      scrollTop: $($id).offset().top -50
    }, 750);
    });


   // Get the modal
  var modal = document.getElementById("myModal");

  // Get the button that opens the modal
  var btn = document.getElementById("myBtn");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on the button, open the modal
  btn.onclick = function() {
    modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

});
  

