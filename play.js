function play(){    
    		 var oBox=document.getElementById('box');    
			 var oUl=oBox.children[0];    
			 var aLi=oUl.children;    
  
    		oUl.innerHTML+=oUl.innerHTML;    
    		oUl.style.width=aLi.length*aLi[0].offsetWidth+'px';    

    		timer = setInterval(function(){   
        		var l=oUl.offsetLeft-2;  
        		if(l<=-oUl.offsetWidth/2){    
            		l=0;    
        		}    
        		oUl.style.left=l+'px';    
    		},30);    
		 	}
			