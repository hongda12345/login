/*
* @Author: 宏达
* @Date:   2017-09-15 17:10:17
* @Last Modified by:   宏达
* @Last Modified time: 2017-09-16 00:56:26
*/
window.onload=function(){
let t=document.getElementById('info');
	setInterval(function(){
		if(info.innerText<=0){
			clearInterval(t);
			location.assign('login.html');
		}
		info.innerText-=1;			
		
	}, 1000);
}