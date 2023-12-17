
// #INSIDE OUR APP -> Slider
// Swiper Slider
var swiper = new Swiper(".screenshot_slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true,
  },
  loop: true,
});


// #WHAT OUR CLIENTS SAY’S Slider
$('.card_wrapper').slick({
  dots: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  arrows:false,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        arrows:false,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

// OUR PRICING PLANS - Pricing Table
let priceToggler = document.querySelector('.price_toggler');
let price = document.querySelectorAll('.price');
let duration = document.querySelectorAll('.duration');

priceToggler.onclick = () =>{
  priceToggler.classList.toggle('active');

  if(priceToggler.classList.contains('active')){
    
    for(var i = 0; i < duration.length; i++)
    duration[i].innerText = '/ Annual';

    for(var k = 0; k < price.length; k++)
    price[k].innerText = price[k].innerText * 10;
  }
  
  else{

    for(var i = 0; i < duration.length; i++)
    duration[i].innerText = '/ Monthly';

    for(var k = 0; k < price.length; k++)
    price[k].innerText = price[k].innerText / 10;
  }
}


// Statistic - Counter-Up2 v2.0.2 
const counterUp = window.counterUp.default;

const initializeCounter = (statisticElement) => {
  const counterElement = statisticElement.querySelector('.counter');
  const IO = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !statisticElement.classList.contains('is-visible')) {
        counterUp(counterElement, {
          duration: 2000,
          delay: 16,
        });
        statisticElement.classList.add('is-visible');
      }
    });
  }, { threshold: 1 });

  IO.observe(statisticElement);
};

// Call the initializeCounter function for each statistic
document.querySelectorAll('.statistic_container > div').forEach(statisticElement => {
  initializeCounter(statisticElement);
});
