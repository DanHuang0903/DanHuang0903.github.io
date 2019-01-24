var timer;
			function dogallery(){
				var boxes1 = document.getElementById("box");
				var uls = document.getElementsByName("ul");
				var lis = document.getElementsByName("li");
				var boxes2 = document.getElementById("box2");
				var box5 = document.getElementById('box5');
				var but = document.getElementById("next");
				var img1 = document.getElementById("box2img");
				var img2 = document.getElementById("box2img2");
				if(boxes1.style.display == 'none'){
					boxes1.style.display='block';
					boxes2.style.display='none';
					box5.style.display='none';
					but.style.display ='none';
					img1.style.display='none';
					img2.style.display='none';
					window.location.href="#back";
					window.clearInterval(timer);
					play();
				}
				else{
					boxes1.style.display='none';
					
				}
			}
		
			
			function dostory(){
				var boxes1 = document.getElementById("box");
				var boxes2 = document.getElementById("box2");
				//var boxes3 = document.getElementById('box3');
				//var boxes4 = document.getElementById('box4');
				var boxes5 = document.getElementById('box5');
				var but = document.getElementById("next");
				var img1 = document.getElementById("box2img");
				var img2 = document.getElementById("box2img2");
			//	var but = document.getElementById("next");
				if(boxes2.style.display == 'none' && boxes5.style.display =='none'){
					boxes5.style.display = 'block';
					boxes1.style.display = 'none';
				//	but.style.display = 'block';
					img1.style.display='block';
					img2.style.display='block';
					window.location.href="#back";
				}
				else{
					boxes2.style.display = 'none';
			//		but.style.display ='none';
					img1.style.display='none';
					img2.style.display='none';
			//		boxes3.style.display='none';
			//		boxes4.style.display='none';
					boxes5.style.display = 'none';
				}
			}
		
			
		

			function doawards(){
				window.location.href="#flag";
				clearAll();
			}
			
			