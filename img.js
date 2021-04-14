var div = document.getElementById('ImagesPart2');

var bCheckEnabled = true;
var bFinishCheck = false;

var img;
var imgArray = new Array();
var i = 1;


var myInterval = setInterval(loadImage, 1);

function loadImage() {

    if (bFinishCheck) {
        clearInterval(myInterval);
        return;
    }

    if (bCheckEnabled) {

        bCheckEnabled = false;
		
        img = new Image();
        img.onload = fExists;
        img.onerror = fDoesntExist;
        img.src = 'images/part2images/' + i + '.png';
        
    }

}

function fExists() {
    imgArray.push(img);
    i++;
    bCheckEnabled = true;

    var code = '<figure itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject"><a href="'+ img.src +'" itemprop="contentUrl" data-size="'+ img.width +'x'+ img.height +'"><img src="'+ img.src +'" itemprop="thumbnail" alt="Image description" /></a></figure>'
	// console.log(img.width)
    // var code = '<img src="'+ img.src +'">'
    console.log(code)
	div.insertAdjacentHTML('beforeend', code)
	
}

function fDoesntExist() {
    bFinishCheck = true;
}
