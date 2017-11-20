
$(document).ready( function(){
	// adding the moviment of Ryu when the mouse is over him, witha gif.
	$('#ryu img').hover(
		function(){
			this.src = 'http://i.imgur.com/nTj3Fxx.gif'
		},
		function(){
			this.src = 'http://i.imgur.com/90Mmdcm.png'
		}
	)

	$('#ryu img').mousedown(
		function(){
			this.src = 'http://i.imgur.com/Rfj0a80.png'
		}
	)
});