$(document).ready(function() {
	loadCarName();
});

function loadCarName() {
	var carName = sessionStorage.getItem("carName");
	if(carName.length > 0) {
		$("#name").val(carName);
	}
	var carInfo = getCarInfo(carName);
	if(carInfo) {
		$("#mileage").val(carInfo.mileage);
	 	$("#seats").val(carInfo.seats);
	 	$("#disc").val(carInfo.description);
	}
}

function getCarInfo(carName) {
	var carInfoString = localStorage.getItem(carName);	
	if(!carInfoString) {
		return null;
	}
	var carInfo = JSON.parse(carInfoString);
	return carInfo;
}

function saveCar() {
	var carName = $("#name").val();
	if(carName.length <= 0) {
		alert("Please enter a car name");
		isName=false;
		return;
	}
	var carInfo = {};
	carInfo.name = carName;
	carInfo.image=$("#carImage").val();
	carInfo.mileage = $("#mileage").val();
	carInfo.seats = $("#seats").val();
	carInfo.description = $("#description").val();
//	window.onload = function() {

		var fileInput = document.getElementById('fileInput');
		var fileDisplayArea = document.getElementById('fileDisplayArea');


		fileInput.addEventListener('change', function(e) {
			var file = fileInput.files[0];
			var imageType = /image.*/;

			if (file.type.match(imageType)) {
				var reader = new FileReader();

				reader.onload = function(e) {
					fileDisplayArea.innerHTML = "";

					var img = new Image();
					img.src = reader.result;
					//localstorage.setItem("sharuuu",img.src);

					fileDisplayArea.appendChild(img);
				}

				reader.readAsDataURL(file);	
			} else {
				fileDisplayArea.innerHTML = "File not supported!";
			}
		});


	
	
		localStorage.setItem(carName,JSON.stringify(carInfo));	
	
	
}

function validateForm() {
    var x = document.forms["myForm"]["name"].value;
    if (x == null || x == "") {
        alert("Name must be filled out");
        return false;
    }
	 var x = document.forms["myForm"]["mileage"].value;
    if (x == null || x == "") {
        alert("Mileage must be filled out");
        return false;
    }
	 var x = document.forms["myForm"]["seats"].value;
    if (x == null || x == "") {
        alert("No of seats must be filled out");
        return false;
    }
	 var x = document.forms["myForm"]["description"].value;
    if (x == null || x == "") {
        alert("Description must be filled out");
        return false;
    }
}