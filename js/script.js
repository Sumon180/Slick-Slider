$(".center").slick({
  centerMode: true,
  centerPadding: "60px",
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        autoplay: false,
        arrows: false,
        centerMode: true,
        centerPadding: "440px",
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 1080,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 2,
      },
    },
  ],
});
