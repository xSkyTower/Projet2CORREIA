function showForm() {
    document.getElementById("formulaire").style.display = "block";
}
function showInterface() {
    var prenom = document.getElementById("prenom").value;
    document.write("<h1>Bienvenue dans NBA 2K00, " + prenom + "</h1>");
}
var largeurImage;
var hauteurImage;

function zoom(image) {
	largeurImage = image.style.width;
	hauteurlmage = image.style.height;
	image.style.width = "auto";
	image.style.height ="auto";
}

function dezoom(image) {
	image.style.width = largeurImage;
	image.style.height = hauteurImage;
}