const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    observer: true,
    oberverParents:true,

    breakpoints: {
        375: {
          slidesPerView: 3,
          spaceBetween: 17,
          slidesPerGroup: 1,
    
          loop:false,
          observer: true,
          observeParents: true,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 17,
          slidesPerGroup: 3,
    
          loop:false,
          observer: true,
          observeParents: true,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 5,
          slidesPerGroup: 3,
    
          loop:false,
          observer: true,
          observeParents: true,
        },
      },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });