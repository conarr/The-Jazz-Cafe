$(document).ready(function(){

//  Generic Dropdown Menu Starts Here
	//  Hide the Dropdown Menu and Close Icon on Page Opening
		$(".closeIcon").hide();
		$(".dropDownMenu").hide();

	//  Show the Dropdown Menu and Close Icon on Mouse Click
		$(".hamburgerIcon").click(function() {
			$(".dropDownMenu").slideToggle("slow", function() {
			$(".hamburgerIcon").hide();
			$(".closeIcon").show();
			});
		});

	//  Collapse the Dropdown Menu and Close Icon on Mouse Click
		$(".closeIcon").click(function() {
			$(".dropDownMenu").slideToggle("slow", function() {
			$(".closeIcon").hide();
			$(".hamburgerIcon").show();
			});
		});

	//  Collapse the Dropdown Menu and Show Close Icon on Window Resize
		$(window).resize(function() {
			$(".dropDownMenu").hide();
			$(".closeIcon").hide();
			$(".hamburgerIcon").show();
		});
	});
//  Generic Dropdown Menu Ends Here


//  Slide Shows Start Here
    //  Image Layers (z-index) for Slider
    function cycleImages(){
        var $active = $('#jazzSlides .active');
        var $next = ($active.next().not('.base').length > 0) ? $active.next().not('.base') : $('#jazzSlides img').not('.base').first();
        	$next.css('z-index',2);  //Move the Next Image Up for Viewing
        	$active.fadeOut(1500,function(){   //Fade Out the Top Image
            	$active.css('z-index',1).show().removeClass('active');   //Reset the z-index and Unhide the Image
            	$next.css('z-index',3).addClass('active');   //move the next image up for viewing
        	});
    	}

    //  Clone Original (.base) Image and Replace with Cycle of Other Images
    $(document).ready(function(){
    	$('#jazzSlides img.base').clone().prependTo('#jazzSlides');
    	$('#jazzSlides img.base').last().removeClass('base').addClass('active');
    	$('#jazzSlides img').show();

    //  Change the Images Every 6 Seconds  //
    setInterval('cycleImages()', 6000);
    	})
//  Slide Shows End Here


//  Menus Selectors Start Here
	$(document).ready(function () {
	    //  On Mouse Click Text with Class '.meatDish' is Hidden
			$(".vegSelector").click(function() {
			$(".meatDish").toggle();
		});

	    //  On Mouse Click Text with Class '.nonCeliacDish' is Hidden
		$(".celSelector").click(function() {
			$(".nonCeliacDish").toggle();
	    });

	    //  On Mouse Click All Text Classes are Displayed
		$(".allSelector").click(function() {
			$(".meatDish, .nonCeliacDish").show();
		});
	});
//  Menus Selectors End Here