const imageURL = "https://www.pexels.com/photo/light-city-road-sunset-16660338/"

let fetchImage = async ()=> {
    var myImageResponse = await fetch(imageURL);
    console.log("Image Response : ", myImageResponse.blob());
}

// let ajaxRequest = ()=> {
//     function requestListener(){
//         console.log(this.response);
//     }
//     var xmlRequest = new XMLHttpRequest();
//     xmlRequest.addEventListener('load', requestListener.bind(xmlRequest));
//     xmlRequest.open('GET', imageURL);
//     xmlRequest.send();
// }


let ajaxRequest = ()=>{
    var xmlRequest = new XMLHttpRequest();

    xmlRequest.open('GET', imageURL);
    xmlRequest.send();

    xmlRequest.onload = function(e){
        console.log(xmlRequest.response);
    }
}