$(document).ready(function(){



	$(".btn-hide").click(function() {

		$(this).parent().css("display", "none");
		$(this).parent().parent().children(".succsess").css("display", "flex");

	});

	$(".mobile__nav").click(function() {

		$(this).toggleClass('open');
		$("nav").slideToggle(1);

	});

	     $(".scroll").click(function () { 
      var elementClick = $(this).attr("href");
      var destination = $(elementClick).offset().top;
      $('html,body').animate( { scrollTop: destination }, 1100 );
      return false;
    });


	$('.slick').slick({
	  arrows: true,
	  speed: 500,
	  slidesToShow: 5,
	  slidesToScroll: 1,
	  infinite: false,
	  responsive: [
	    {
	      breakpoint: 1000,
	      settings: {
	        arrows: false,
	        slidesToShow: 3,
	        slidesToScroll: 1,
	      }
	    },
	    {
	      breakpoint: 650,
	      settings: {
	        arrows: false,
	        slidesToShow: 2,
	        slidesToScroll: 1,
	      }
	    },
	    {
	      breakpoint: 500,
	      settings: {
	        arrows: false,
	        slidesToShow: 1,
	        slidesToScroll: 1,
	      }
	    }
	  ]
	});


		$('.slick_2').slick({
	  speed: 500,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  infinite: false,
	  nextArrow: $(".GOD"),
      prevArrow: $(".PLS"),
	  responsive: [
	    {
	      breakpoint: 1200,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1,
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	      }
	    },
	  ]
	});

		$('.slick_3').slick({

	  nextArrow: $(".next"),
      prevArrow: $(".prev"),
		});


});

