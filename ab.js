var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = "  " + "  "+ hours + "h: "
  + minutes + "m: " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);


// .......................................................................slider
var slideIndex = 0;
showSlides(); // call showslide method

function showSlides()
{
	var i;

	// get the array of divs' with classname image-sliderfade
	var slides = document.getElementsByClassName("image-sliderfade");
	
	// get the array of divs' with classname dot
	var dots = document.getElementsByClassName("dot");

	for (i = 0; i < slides.length; i++) {
		// initially set the display to
		// none for every image.
		slides[i].style.display = "none";
	}

	// increase by 1, Global variable
	slideIndex++;

	// check for boundary
	if (slideIndex > slides.length)
	{
		slideIndex = 1;
	}

	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.
							replace(" active", "");
	}

	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " active";

	// Change image every 2 seconds
	setTimeout(showSlides, 3500);
}
