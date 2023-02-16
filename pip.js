const videoElement=document.querySelector('#video');
const button1=document.querySelector('#button1');
const button2=document.querySelector('#button2');


 function selectMediaStream(){
    try {

      videoElement.src="https://jsoncompare.org/LearningContainer/SampleFiles/Video/MP4/sample-mp4-file.mp4";
        
    } catch (error) {
        console.log("error here")
    }
}

//start PICTURE IN PICTURE

button1.addEventListener('click',function(){
    videoElement.requestPictureInPicture();
})


//End PICTURE IN PICTURE
button2.addEventListener('click',function(){
    document.exitPictureInPicture();
})




selectMediaStream();


