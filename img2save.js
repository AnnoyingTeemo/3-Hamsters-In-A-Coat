var divP3 = document.getElementById('ImagesPart3');

var bCheckEnabledP3 = true;
var bFinishCheckP3 = false;

var imgP3;
var imgArrayP3 = new Array();
var iP3 = 1;
var chanceArrayP3 = new Array();


startTable();
var myIntervalP3 = setInterval(loadImageP3, 1);

function loadImageP3() {

    if (bFinishCheckP3) {
        clearInterval(myIntervalP3);
        endTable();
        return;
    }

    if (bCheckEnabledP3) {

        bCheckEnabledP3 = false;
		
        imgP3 = new Image();
        imgP3.onload = fExistsP3;
        imgP3.onerror = fDoesntExistP3;
        imgP3.src = 'images/part3images/' + i + '.jpg';
    }

}

function fExistsP3() {
    imgArrayP3.push(imgP3);
    iP3++;
    bCheckEnabledP3 = true;
		
//var codeP3 = '<img src="'+ imgP3.src +'">'
var codeP3 = '<tr><td><img src="'+ imgP3.src +'"></td><td>100%</td></tr>'
console.log(codeP3)
	divP3.insertAdjacentHTML('beforeend', codeP3)
}

function fDoesntExistP3() {
    bFinishCheckP3 = true;
}

function endTable(){
    var endTableCode = '</table>'
    console.log("rwfewifjewjfewifjewqifjewqfjqifjwqidjwqi")
    divP3.insertAdjacentHTML('beforeend', endTableCode)
}

function startTable(){
    var startTableCode = '<table><tr><th>Images</th><th>Performance (%)</th></tr>'
    divP3.insertAdjacentHTML('beforeend', startTableCode)
}
