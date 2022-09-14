$(document).ready( () => {
    $('#hamburger-menu').click( () => {
            $('#hamburger-menu').toggleClass('active')
            $('#nav-menu').toggleClass('active')
    })
    
    // setting owl carosel
    let navText = ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"];

    $('#hero-carousel1').owlCarousel({
        items: 1,
        dots: false,
        loop: true,
        autoplay: true,
        nav: true,
        navText: navText,
        autoplayHoverPause: true
    })

    $('#top-movies-slide').owlCarousel({
        items:6,
        dots: false,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            200: {
                items:2
            },
            500: {
                items: 3
            },
            1280: {
                items: 4
            },
            1600: {
                items: 6
            },
        }
    })

    $('.movie-slide').owlCarousel({
        items:2,
        dots: false,
        nav: true,
        navText: navText,
        margin: 15,
        responsive: {
            500: {
                items: 2
            },
            1280: {
                items: 4
            },
            1600: {
                items: 6
            },
        }
    })
})