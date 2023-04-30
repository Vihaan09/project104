
Webcam.set ({
    width: 400,
    height: 350,
    image_format: 'png',
    png_quality:90
});

Webcam.attach('#camera');



function snapshot() {

    Webcam.snap(function(data_uri) {
        document.getElementById("results").innerHTML = '<img id="image_taken" src="'+ data_uri +'"/>';
    });
}

console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/[...]model.json', modelloaded)

function identify() {
    img = document.getElementById("img_taken");
    model.classify(img, getresult);
}

function getresult(error, results) {
    
   if(error ) {
    console.error(error);
   }
    
   else {
    console.log(results);
    document.getElementById("family_member_name").innerHTML = results[0].label;
    document.getElementById("accuracy").innerHTML = results[0].confidence.toFixed(3);
    }

}