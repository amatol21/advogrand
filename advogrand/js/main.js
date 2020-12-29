(function(){

function smoothScroll(){	// плавная прокрутка по якорным ссылкам
	$('.nav-bar, .main-header-app').on('click', 'a', function(){
		event.preventDefault();
		let $height = $($(this).attr('href')).offset();		
		$('html').animate({scrollTop: $height.top}, 1000);	
	});
}

function scores(){	

	$('.scores-content-list-block').css('display', 'none');	
	$('#health').css('display', 'block');	
	$('.scores-slider').slick({
	   infinite: true,
	   slidesToShow: 3,
	   arrows: true,
	   slidesToScroll: 1,
	   prevArrow: '<button class="scores-left"></button>',
      nextArrow: '<button class="scores-right"></button>',
      responsive: [
         {
            breakpoint: 991,		
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1
            }
         },
         {
            breakpoint: 767,
            settings: {
            	slidesToShow: 1,
               slidesToScroll: 1
            }
         }
      ]
	});

	$('.scores-content-nav').on('click', 'a', function(){
		$('.scores-content-nav-item').css({border: '3px solid transparent', color: 'black'});
		$(this).css({border: '3px solid #e50000', borderRadius: '5px', color: '#e50000'});
		$('.scores-content-list-block').css('display', 'none');
		$('#' + $(this).attr('data-target')).css('display', 'block');	
		$('.scores-slider').slick('unslick');	//уничтожение слайдера 
		$('.scores-slider').slick({				// пересоздание слайдера
		   infinite: true,
		   slidesToShow: 3,
		   arrows: true,
		   slidesToScroll: 1,
		   prevArrow: '<button class="scores-left"></button>',
	      nextArrow: '<button class="scores-right"></button>',
	      responsive: [
	         {
	            breakpoint: 991,
	            settings: {
	               slidesToShow: 2,
	               slidesToScroll: 1
	            }
	         },
	         {
	            breakpoint: 767,
	            settings: {
	            	slidesToShow: 1,
	               slidesToScroll: 1
	            }
	         }
	      ]
		});
		
			
	});
}


function partners(){		

	$('.partners-content-slider').slick({
	   infinite: true,
	   slidesToShow: 4,
	   arrows: true,
	   slidesToScroll: 1,
	   prevArrow: '<button class="scores-left"></button>',
      nextArrow: '<button class="scores-right"></button>',
      responsive: [
         {
            breakpoint: 991,
            settings: {
             	slidesToShow: 3,
               slidesToScroll: 1
            }
         },
         {
            breakpoint: 767,
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
}


function choose(){
	
	$('.choose-content-list-block').css('display', 'none');
	$('#compare-tab').css({border: '3px solid #e50000', color: '#e50000'});
	$('#compare').css('display', 'block');
	
	$('.choose-content-nav').on('click', 'a', function(){
		$('.choose-content-nav-link').css({border: '3px solid #f5f5f5', color: 'black'});
		$($(this).attr('data-aim') + '-tab').css({border: '3px solid #e50000', color: '#e50000'});
		$('.choose-content-list-block').css('display', 'none');
		$($(this).attr('data-aim')).css('display', 'block');
	})

}


smoothScroll();
scores();
partners();
choose();

})();










