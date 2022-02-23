
var slideImg = document.getElementById("slideImg");

var images = new Array (
    "images/ab1.jpg" ,
    "images/covernew.jpg" ,
    "images/ab2.jpg" ,
    "images/sdg_12.jpg" ,
    "images/image4.jpg"
);

var len = images.length;
var i = 0;

function slider() {
    if(i>len-1){
        i = 0;
    }
    slideImg.src = images[i];
    i++;
    setTimeout('slider()',3000);
}

