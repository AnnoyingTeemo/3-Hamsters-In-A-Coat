//zoom gallery from https://photoswipe.com/

var div = document.getElementById('ImagesPart2');

var bCheckEnabled = true;
var bFinishCheck = false;

var img;
var imgArray = new Array();
var i = 1;
var desclist = ["Installing Kali","Installing Kali","Installing Kali","Installing Manjaro","Installing Manjaro","Installing Manjaro","Installing Manjaro","Installing Manjaro","Installing Manjaro","Installing Tails","Installing Tails","Installing Tails","Installing Tails","Installing Tails","1.	Create a new directory inside your home directory and name it XXX","2.	Now navigate to the XXX directory and create directory XXX-HOMEWORK and change your current working directory to XXX-HOMEWORK.","3.	Create three new subdirectories called Part1, Part2, and Part3 in XXX-HOMEWORK directory.","4.	Create a new file called “MyFave.txt” using the touch command and insert three lines into the file (you may use echo command and >> command).","5.	Display the number of words in the file “MyFave.txt” (you may use wc command).", "6.	Copy the file “MyFave.txt” to directory “Part1” and rename it to “MyFaveCopy.txt”.Make another copy of “MyFaveCopy.txt” just made in directory “Part1” and name it “MyFaveCopyCopy.txt” (also store in the same directory “Part1”).","7.	Copy all the contents of directory “Part1” to directory “Part2” and display the contents of the directory “Part2”.","8.	Assume that you are now at the current working directory XXX-HOMEWORK; create 15 new files (in directory XXX-HOMEWORK) named as follows:", "9.	Display a listing of all the files in the current working directory ending with letter ‘t’ using one command, e.g. unix.txt or doodad.text. ", "10.	Display a listing of all the files in the current working directory starting with ‘T’ and ending with ‘t’ using one command, e.g. Test-1.txt.", "11.	Move everything (files/directories) containing letter ‘t’ to the directory Part3 using one command.", "12.	Display a listing of the contents of the current directory XXX-HOMEWORK. All files that contain letter ‘t’ should now be gone."];


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
        img.desc = desclist[i-1];
        
    }

}

function fExists() {
    imgArray.push(img);
    i++;
    bCheckEnabled = true;

    var code = '<figure itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject"><a href="'+ img.src +'" itemprop="contentUrl" data-size="'+ img.width +'x'+ img.height +'"><img src="'+ img.src +'" itemprop="thumbnail" alt="Image description" /></a><figcaption itemprop="caption description">'+ img.desc +'</figcaption></figure>'
	// console.log(img.width)
    // var code = '<img src="'+ img.src +'">'
    // console.log(code)
	div.insertAdjacentHTML('beforeend', code)
	
}

function fDoesntExist() {
    bFinishCheck = true;
}
