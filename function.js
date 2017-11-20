
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

	// adding the hadouken pose when Ryu is clicked
	$('#ryu img').mousedown(
		function(){
			this.src = 'http://i.imgur.com/Rfj0a80.png'
		}
	)

	// adding hadouken image in the same div as ryu
	$('#ryu img').mousedown(
		function(){
			$('#ryu').append(
				'<img class="demo-hadouken" src="http://i.imgur.com/oTyQRvX.gif">'
			)
		}
	)
});