//implement the clicking drop side bar
$( document ).ready(function() {
    $('li a').click(function(e) {
        e.preventDefault();
        $('a').removeClass('active');
        $(this).addClass('active');
    });
	
    scroll(0,0);
	
	
});

function enableIntro(){
	document.getElementById("intro").style.display = 'block';
	document.getElementById("acknowledgement").style.display = 'none';
	document.getElementById("mechanics").style.display = 'none';
	document.getElementById("help").style.display = 'none';
	document.getElementById("embedskulptor_gui_frame").style.display = 'none';
	document.getElementById("embedskulptor_gui").style.display = 'none';
	

	window.scrollTo(0, 0);
	document.getElementById("intro-link").className = 'active';
	document.getElementById("ack-link").classList.remove('active');
	document.getElementById("mechanics-link").classList.remove('active');
	document.getElementById("help-link").classList.remove('active');
	document.getElementById("emulator-link").classList.remove('active');
	
}
function enableReference(){
	document.getElementById("intro").style.display = 'none';
	document.getElementById("acknowledgement").style.display = 'block';
	document.getElementById("mechanics").style.display = 'none';
	document.getElementById("help").style.display = 'none';
	document.getElementById("embedskulptor_gui_frame").style.display = 'none';
	document.getElementById("embedskulptor_gui").style.display = 'none';

	window.scrollTo(0, 0);
	document.getElementById("intro-link").classList.remove('active');
	document.getElementById("ack-link").className = 'active';
	document.getElementById("mechanics-link").classList.remove('active');
	document.getElementById("help-link").classList.remove('active');
	document.getElementById("emulator-link").classList.remove('active');	
}
function enableMechanics(){
	document.getElementById("intro").style.display = 'none';
	document.getElementById("acknowledgement").style.display = 'none';
	document.getElementById("mechanics").style.display = 'block';
	document.getElementById("help").style.display = 'none';
	document.getElementById("embedskulptor_gui_frame").style.display = 'none';
	document.getElementById("embedskulptor_gui").style.display = 'none';

	window.scrollTo(0, 0);
	document.getElementById("intro-link").classList.remove('active');
	document.getElementById("ack-link").classList.remove('active');
	document.getElementById("mechanics-link").className = 'active';
	document.getElementById("help-link").classList.remove('active');
	document.getElementById("emulator-link").classList.remove('active');
	
}
function enableHelp(){
	document.getElementById("intro").style.display = 'none';
	document.getElementById("acknowledgement").style.display = 'none';
	document.getElementById("mechanics").style.display = 'none';
	document.getElementById("help").style.display = 'block';
	document.getElementById("embedskulptor_gui_frame").style.display = 'none';
	document.getElementById("embedskulptor_gui").style.display = 'none';
	
	window.scrollTo(0, 0);
	document.getElementById("intro-link").classList.remove('active');
	document.getElementById("ack-link").classList.remove('active');
	document.getElementById("mechanics-link").classList.remove('active');
	document.getElementById("help-link").className = 'active';
	document.getElementById("emulator-link").classList.remove('active');

}
function enableEmulator(){
	document.getElementById("intro").style.display = 'none';
	document.getElementById("acknowledgement").style.display = 'none';
	document.getElementById("mechanics").style.display = 'none';
	document.getElementById("help").style.display = 'none';
	document.getElementById("embedskulptor_gui_frame").style.display = 'inline-block';
	document.getElementById("embedskulptor_gui").style.display = 'block';
	
	window.scrollTo(0, 0);
    document.getElementById("intro-link").classList.remove('active');
	document.getElementById("ack-link").classList.remove('active');
	document.getElementById("mechanics-link").classList.remove('active');
	document.getElementById("help-link").classList.remove('active');
	document.getElementById("emulator-link").className = 'active';
	
}