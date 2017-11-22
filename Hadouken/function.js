// getting the size of the screen

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

	//cleaning the previous hadouken animation
	$('#ryu img').mousedown(
		function(){
			$('.demo-hadouken').remove();
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


	//Adding the animation of hadouken
	$('#ryu img').mousedown(
		function(){
			var widthScreen = $('#ryu').width();

			if(widthScreen>= 600){
				widthScreen = (widthScreen/2) - 52;
			}
			else if(widthScreen < 600 && widthScreen >= 340){
				widthScreen = (widthScreen/2) - 72;
			}
			else if(widthScreen < 340 && widthScreen >= 328){
				widthScreen = (widthScreen/3) - 55;
			}
			else if(widthScreen < 328 && widthScreen >  250){
				widthScreen = -45;
			}
			else{
				$(this).addClass('.min-hadouken');
				widthScreen = -60;
			}
			$('.demo-hadouken').animate({
				"margin-left": widthScreen
			}, 1000, 'swing', function(){
				//this.remove();
		})

	})

	// setting ryu out of hadouken pose
	$('#ryu img').mouseup(
		function(){
			this.src = 'http://i.imgur.com/90Mmdcm.png'
		}
	)
});