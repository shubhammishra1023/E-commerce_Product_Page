const sliderMainImage = document.getElementById("product-main-image");
const sliderImageList = document.getElementsByClassName("image-list");
const blackItem = document.getElementById('black')
const orangeItem = document.getElementById('orange')
const yellowItem = document.getElementById('yellow')

sliderImageList[0].onclick = function(){
    sliderMainImage.src = sliderImageList[0].src;
    console.log(sliderMainImage.src);
};

sliderImageList[1].onclick = function(){
    sliderMainImage.src = sliderImageList[1].src;
    console.log(sliderMainImage.src);
};

sliderImageList[2].onclick = function(){
    sliderMainImage.src = sliderImageList[2].src;
    console.log(sliderMainImage.src);
};

sliderImageList[3].onclick = function(){
    sliderMainImage.src = sliderImageList[3].src;
    console.log(sliderMainImage.src);
};

blackItem.addEventListener('click',()=>{
    sliderMainImage.src = sliderImageList[1].src;
})

orangeItem.addEventListener('click',()=>{
    sliderMainImage.src = sliderImageList[0].src;
})

yellowItem.addEventListener('click',()=>{
    sliderMainImage.src = sliderImageList[2].src;
})