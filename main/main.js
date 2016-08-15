function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
//            document.getElementById('activeImg').src = e.target.result; 
            document.getElementById('targetImg').src = e.target.result; 
            document.getElementById('finalImg').src = e.target.result; 
            document.getElementById('finalImgOverlay').src = e.target.result; 
            document.getElementById('targetImgfeedback').src = e.target.result; 

            document.getElementById('activeImg').src = e.target.result; 


//            document.getElementById('discreteOutputBottom').src = e.target.result;
//            document.getElementById('discreteOutputTop').src = e.target.result;
//            document.getElementById('continuousOutputBottom').src = e.target.result;
//            document.getElementById('continuousOutputTop').src = e.target.result;
//            document.getElementById('activeImg').style.display = "block"
            document.getElementById('nextEffects').disabled = false
            document.getElementById('nextEffects').style.opacity = 1
            document.getElementById('blah').src = e.target.result; 
            document.getElementById('blah').style.width = "100%"; 
        };

        reader.readAsDataURL(input.files[0]);
    }

}