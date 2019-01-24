function dispTxt(x){
			var t1 = document.getElementById("st1");
					var t2 = document.getElementById("st2");
					var t3 = document.getElementById("st3");
					var t4 = document.getElementById("st4");
			if(x.id == "box2"){
				var txt = document.getElementById('ss1')
				txt.style.display='block';
				t1.style.display='none';
				t2.style.display='none';
				t3.style.display='none';
				t4.style.display='none';
			}
	//		else if(x.id == "box3"){
	//			var txt = document.getElementById('ss2')
	//			txt.style.display='none';
	//		}
	//		else if(x.id == "box4"){
	//			var txt = document.getElementById('ss3')
	//			txt.style.display='none';
	//		}
		}

		function noTxt(x){
			var t1 = document.getElementById("st1");
					var t2 = document.getElementById("st2");
					var t3 = document.getElementById("st3");
					var t4 = document.getElementById("st4");
			if(x.id == "box2"){
				var txt = document.getElementById('ss1')
				txt.style.display='none';
				t1.style.display='block';
				t2.style.display='block';
				t3.style.display='block';
				t4.style.display='block';
			}
	//		else if(x.id == "box3"){
	//			var txt = document.getElementById('ss2')
	//			txt.style.display='none';
	//		}
	//		else if(x.id == "box4"){
	//			var txt = document.getElementById('ss3')
	//			txt.style.display='none';
	//		}
		}