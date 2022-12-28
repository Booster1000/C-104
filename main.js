//webcam function


//single line comment
//dest_height:450,dest_width:680,

//multiline comment
/*dest_height:450,
dest_width:680,*/



Webcam.set({
    height:400,
    width:600,
    image_type:'png',
    png_quality:100
});

//variable

webcam = document.getElementById('wi');
Webcam.attach('#wi');

//snapshot function

function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById('ci').innerHTML = '<img id="camera" src="'+data_uri+'">';
    });
}

console.log('ml5 version :', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/uxgt-SPOR/model.json',modelLoaded)

//function modelLoaded only called when teachable machine is called properly

function modelLoaded(){
    console.log('Model Loaded Successfully');
}

//function check used to compare webcam image with teachable machine image

function check(){
    img = document.getElementById('camera');
    classifier.classify(img, got_result);
}