// document
//   .getElementsByClassName("header-icon")
//   .addEventListener("click", myFunction);
// function myFunction() {
//   var element = document.getElementById("mynav");
//   element.classList.toggle("mynewnav");
// }

$(".brandslider").slick({
  dots: false,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 1000,
  infinite: true,
  speed: 1000,
  slidesToShow: 6,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
