$(window).scroll(function() {
	var divTop = $('.brand').offset().top;
	var divTo = document.querySelector('.video-right');

	if ($(this).scrollTop() >= 800) {
		$('.gototop-button').fadeIn(100); // Fade in the arrow
	} else {
		$('.gototop-button').fadeOut(20); // Else fade out the arrow
	}

	if ($(document).scrollTop() > 50) {
		document.getElementById('white-logo').style.display = 'block';
		$('.nav').addClass('affix');
		console.log('OK');
	} else {
		document.getElementById('white-logo').style.display = 'none';
		$('.nav').removeClass('affix');
	}
});

$(document).keypress(function(e) {
	var keycode = e.keyCode ? e.keyCode : e.which;
	var inp = document.getElementById('search').value;
	if (inp == 'home' && keycode == '13') {
		location.href = '../home.html';
	}
	if (inp == 'about' && keycode == '13') {
		location.href = '../about-us.html';
	}
	if (inp == 'project' && keycode == '13') {
		location.href = '../project.html';
	}
	if (inp == 'team' && keycode == '13') {
		location.href = '../team.html';
	}
	if (inp == 'blog' && keycode == '13') {
		location.href = '../blog.html';
	}
});

// const input = document.getElementById('search-input');
// const searchBtn = document.getElementById('search-btn');

// const expand = () => {
// 	searchBtn.classList.toggle('close');
// 	input.classList.toggle('square');
// };

// searchBtn.addEventListener('click', expand);

$('.navTrigger').click(function() {
	$(this).toggleClass('active');
	console.log('Clicked menu');
	$('#mainListDiv').toggleClass('show_list');
	$('#mainListDiv').fadeIn();
});

$(document).ready(function() {
	$('.navTrigger').click(function() {
		var clicks = $(this).data('clicks');
		if (clicks) {
			$('body').removeClass('stick');
		} else {
			$('body').addClass('stick');
		}
		$(this).data('clicks', !clicks);
	});
});

window.addEventListener('load', function() {
	setTimeout(function() {
		const loader = document.querySelector('.loader');
		loader.className += ' hidden';
	}, 1);
});
