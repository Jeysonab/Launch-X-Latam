const buttonB = document.getElementById("buttonB");
const ventanaModal = document.getElementById("ventanaModal");
const inputSubmit = document.getElementById("inputSubmit");

buttonB.onclick = function () {
	ventanaModal.style.visibility = "visible";
};

inputSubmit.onclick = function () {
	ventanaModal.style.visibility = "hidden";
};
