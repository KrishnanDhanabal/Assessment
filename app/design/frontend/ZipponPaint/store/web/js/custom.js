require(['jquery', 'slick'], function ($) {
    $(document).ready(function ($) {

        $(".slider").slick({
            dots:true,
            //prevArrow: "<i class='fas fa-chevron-left prev-arrow'></i>",
            //nextArrow: "<i class='fas fa-chevron-right next-arrow'></i>",
            arrows:true,
            autoplay: true,
            autoplaySpeed: 2000,
        });

        $(".products-upsell .product-items, .products-related .product-items").slick({
            dots:false,
            //prevArrow: "<i class='fas fa-chevron-left prev-arrow'></i>",
            //nextArrow: "<i class='fas fa-chevron-right next-arrow'></i>",
            arrows:true,
            // autoplay: true,
            // autoplaySpeed: 2000,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true                  
                    }   
                },
                {
                    breakpoint: 600,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 1,
                      infinite: true                  
                      }   
                  }
            ]

        });





    });
});
