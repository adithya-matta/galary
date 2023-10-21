function imageEdit(){
    var blurValue=document.getElementById("blur").value
    var brightnessValue=document.getElementById("brightness").value
    var contrastValue=document.getElementById("contrast").value
    var grayscaleValue=document.getElementById("grayscale").value
    var hueValue=document.getElementById("hue").value
    var invertValue=document.getElementById("invert").value
    var opacityValue=document.getElementById("opacity").value
    var saturateValue=document.getElementById("saturate").value
    var sepiaValue=document.getElementById("sepia").value

    document.getElementById("image").style.filter= `blur(${blurValue}px) brightness(${brightnessValue}%) contrast(${contrastValue}%) grayscale(${grayscaleValue}%) hue-rotate(${hueValue}deg) invert(${invertValue}%) opacity(${opacityValue}%) saturate(${saturateValue}%) sepia(${sepiaValue}%)`;

    var rotatexValue=document.getElementById("rotatex").value
    var rotateyValue=document.getElementById("rotatey").value
    var rotateValue=document.getElementById("rotate").value
    var scalexValue=document.getElementById("scalex").value
    var scaleyValue=document.getElementById("scaley").value
    var skewxValue=document.getElementById("skewx").value
    var skewyValue=document.getElementById("skewy").value
    var translateyValue=document.getElementById("translatey").value
    var translatexValue=document.getElementById("translatex").value

    document.getElementById("image").style.transform=` rotateX(${rotatexValue}deg) rotateY(${rotateyValue}deg) rotate(${rotateValue}deg) scaleX(${scalexValue}) scaleY(${scaleyValue}) skewX(${skewxValue}deg) skewY(${skewyValue}deg) translateX(${translateyValue}px) translateY(${translatexValue}px)`
}

let allImages=document.images;
// console.log(allImages)
for(i=0;i<allImages.length;i++){
    // // ../../Asserts/images/${i}.jpg
    // allImages[i].src=`./Asserts/images/${i}.jpg`;
    // allImages[i].style.width="200px"
    // allImages[i].style.height="200px"
    // // allImages[i].style.margin="3%"
    // // allImages[i].style.borderRadius="15px"
    allImages[i].addEventListener("click",() => {
        document.getElementById("newWindow").style.display="flex";
    })
}

var globalSrc;
function passSrc(urlOfImage){
    document.getElementById("windowimg").style.backgroundImage=`url(${urlOfImage})`;
    globalSrc=urlOfImage;
    console.log(globalSrc);
}

function closeWindow(){
    document.getElementById("newWindow").style.display="none";
    document.getElementById("gallaryImageEdit").style.display="none";
}
function openEditWindow(){
    document.getElementById("gallaryImageEdit").style.display="flex";
    document.getElementById("image").style.backgroundImage=`url(${globalSrc})`
    console.log(globalSrc);
}