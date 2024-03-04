//Hecho por ExequielMiranda

// init slick slider
$('.slick').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    adaptiveHeight: true
    
  });
  
  // slick light gallery
  $('.slick').lightGallery({
    selector: '.slick-slide:not(.slick-cloned) .lightgallery',
    //selectWithin: '.slick-slide:not(.slick-cloned)'
  });