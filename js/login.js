/*
* @Author: 宏达
* @Date:   2017-09-15 17:10:07
* @Last Modified by:   宏达
* @Last Modified time: 2017-09-16 01:01:58
*/
window.onload=function(){
let username=document.getElementById('username');
let password=document.getElementById('password');
let login=document.getElementById('login');
login.onclick=function(){
	// let u=username.value;
	// let p=password.value;
    if(username.value=='hongda'&&password.value=='12345.'){
    	alert('登陆成功');    	
    }else{
    location.replace('error.html');	
    }
}
}