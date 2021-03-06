//$(document).ready(){} transfer  IE +9;
document.addEventListener("DOMContentLoaded", function(event){
    domReady();
});

function domReady(){
    //init href hash data
    if(window.location.hash === null)
    window.location.hash = '#fixed';

    var datas = document.querySelectorAll('a');
    datas.forEach(()=>addEventListener('click', function(e){ e.stopPropagation();changeLayout(e)}));    
    
    //use event capturing
    datas.forEach(()=>addEventListener('mouseover', function(e){changeImg(e)}), true); 

    window.addEventListener('keypress', function(){layoutDebug(document.getElementsByClassName('layout_lst')[0])});
}

//Initial Parameter Not Support in IE 9, Opera, Safari...
/*function changeImg(e, imgsrc = 'preview_img'){
// document.getElementsByClassName(imgsrc)[0].src = 'images/' + e.target.getAttribute('data-con') + '.gif';
}*/

function changeImg(e){
    if(e.target.getAttribute('data-layout')){
    document.getElementsByClassName('preview_img')[0].src = 'images/' + e.target.getAttribute('data-con') + '.gif';
    }
}

function changeLayout(e){
    if(e.target.getAttribute('data-layout')){
    document.getElementById('wrap').className = e.target.getAttribute('data-layout');   
    document.getElementById('container').className = e.target.getAttribute('data-con');
    changeImg(e);
    }
}

//dev.button - debug html layout construct
function layoutDebug(button){
    var colors =['#2C3E50', '#8E44AD', '#2980B9', '#27AE60', '#16A085', '#F39C12', '#D35400', '#EC0392B', 'yellow']; 
   
    if(button.value == "OFF"){
        button.value = "ON";
        document.querySelector('html').style.backgroundColor='white';
        document.querySelector('#wrap').style.backgroundColor='white';
        document.querySelector('#header').style.backgroundColor='white';
        document.querySelector('#container').style.backgroundColor='white';
        document.querySelector('#content').style.backgroundColor='white';
        document.querySelector('.content_wrap').style.backgroundColor='white';
        document.querySelector('.extension_wrap').style.backgroundColor='white';
        document.querySelector('#footer').style.backgroundColor='white';
    }else{
        document.querySelector('html').style.backgroundColor=colors[0];
        document.querySelector('#wrap').style.backgroundColor=colors[1];
        document.querySelector('#header').style.backgroundColor=colors[2];
        document.querySelector('#container').style.backgroundColor=colors[3];
        document.querySelector('#content').style.backgroundColor=colors[4];
        document.querySelector('.content_wrap').style.backgroundColor=colors[5];
        document.querySelector('.extension_wrap').style.backgroundColor=colors[6];
        document.querySelector('#footer').style.backgroundColor=colors[7];   
        button.value = "OFF";
    }
    console.log(button.value);
}