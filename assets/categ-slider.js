var elem = document.querySelector('.main-carousel-categ-slider');
var flkty = new Flickity(elem, {
  // options
  cellAlign: 'left',
  contain: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity('.main-carousel-categ-slider', {
  // options
});
