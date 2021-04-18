var divP3 = document.getElementById('ImagesPart3');

var bCheckEnabledP3 = true;
var bFinishCheckP3 = false;

var imgP3;
var imgArrayP3 = new Array();
var iP3 = 1;
//var chanceArrayP3 = [0,76,0,0,65,42,37,0,30,70,0,35,54,0,52,52,76]
var chanceArrayP3 = [0,100,0,0,100,100,100,0,100,100,0,66,50,0,100,0,100,100]
var chanceArrayP3fast = [0,100,0,0,0,0,0,0,0,0,0,50,0,0,100,0,100,100]
console.log(chanceArrayP3)
var codeP3 = '';

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
        imgP3fast = new Image();
        imgP3orig = new Image();
        imgP3.onload = fExistsP3;
        imgP3.onerror = fDoesntExistP3;
        imgP3.src = 'images/part3images/yolo_minimal_work/' + iP3 + '.jpg';
        imgP3fast.src = 'images/part3images/yolo_faster/' + iP3 + '.jpg';
        imgP3orig.src = 'images/part3images/origionals/' + iP3 + '.jpg';
    }

}

function fExistsP3() {
    imgArrayP3.push(imgP3);
    iP3++;
    bCheckEnabledP3 = true;
		
//var codeP3 = '<img src="'+ imgP3.src +'">'
var codeimg = '<tr><td><img src="'+ imgP3orig.src +'"></td><td><img src="'+ imgP3.src +'"></td><td>'+ chanceArrayP3[iP3-2] +'%</td><td><img src="'+ imgP3fast.src +'"></td><td>'+ chanceArrayP3fast[iP3-2] +'%</td></tr>'
	//divP3.insertAdjacentHTML('beforeend', codeP3)
    codeP3 = codeP3 + codeimg
}

function fDoesntExistP3() {
    bFinishCheckP3 = true;
}


function startTable(){
    var startTableCode = '<table><tr><th>Original Image</th><th>Images</th><th>Performance (%)</th><th>Images</th><th>Performance (%)</th></tr>'
    codeP3 = codeP3 + startTableCode
    
    
}
function endTable(){
    var endTableCode = '</table>'
    //console.log("rwfewifjewjfewifjewqifjewqfjqifjwqidjwqi")
    //divP3.insertAdjacentHTML('beforeend', endTableCode)
    codeP3 = codeP3 + endTableCode
    divP3.insertAdjacentHTML('beforeend', codeP3)
}
