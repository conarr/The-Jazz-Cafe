var current = '.jazzLightboxImages ul li.current';
      
  function checkImageposition() {
    if ($(current).is(':last-child')) {
      $('.nextButton').hide();
      $('.prevButton').show();
    }
    else if ($(current).is(':first-child')) {
      $('.nextButton').show();
      $('.prevButton').hide();
    }
    else {
      $('.nextButton, .prevButton').show();
    }
  }

  $('.jazzLightboxImages ul li').on('click', 'a', function(event) {
    event.preventDefault();
    var bigImagehref = $(this).attr('href');

    $(this).parent().addClass('current');
    $('.jazzLightbox').fadeIn();
    $('.jazzLightbox').append('<img class="image-in-lightbox" src="' + bigImagehref + '" alt=""></div>');
    checkImageposition();
  });

  $('.jazzLightbox').on('click', '.closeButton', function() {
    $('.jazzLightbox').fadeOut();
    $('.jazzLightbox .image-in-lightbox').remove();
    $(current).removeClass('current');
  });
  $('.jazzLightbox a').on('click', function() {        
    if ($(this).attr('class') == 'nextButton') {
      var bigImagehref = $(current).next().find('a').attr('href');

      $(current).next().addClass('current');
      $(current).prev().removeClass('current');

    }
    else if ($(this).attr('class') == 'prevButton') {
      bigImagehref = $(current).prev().find('a').attr('href');

      $(current).prev().addClass('current');
      $(current).next().removeClass('current');
    }
    checkImageposition();
    $('.jazzLightbox .image-in-lightbox').remove();
    $('.jazzLightbox').append('<img class="image-in-lightbox" src="' + bigImagehref + '" alt=""></div>');
  });