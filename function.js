
$(document).ready(

	// adding the moviment of Ryu when the mouse is over him, witha gif.
	$('#ryu img').hover(
		function(){
			this.src = 'http://i.imgur.com/nTj3Fxx.gif'
		},
		function(){
			this.src = 'http://i.imgur.com/90Mmdcm.png'
		}
	)

);




/*

http://i.imgur.com/90Mmdcm.png ryu standing.
'http://i.imgur.com/nTj3Fxx.gif' ryu jumping
'http://i.imgur.com/Rfj0a80.png' ryu hadouken pose
http://i.imgur.com/oTyQRvX.gif hadouken

*/