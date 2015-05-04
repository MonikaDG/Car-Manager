$(document).ready(function() {
	loadAllCars();

});


function addCarWithImage(carName) {
	var carInfo=getCarInfo(carName)	;
	var hoverDiv=document.createElement("div");
	$(hoverDiv).addClass("carImageInfo");
	$(hoverDiv).append("<h1><center> "+carInfo.name+"</center></h1>");
	$(hoverDiv).append("<h2>mileage : "+carInfo.mileage+"</h1>");
	$(hoverDiv).append("<h2>No. of seats : "+carInfo.seats+"</h1>");
	$(hoverDiv).append("<h2> "+carInfo.description+"</h3>");
	
	var carDiv=document.createElement("div");
	$(carDiv).addClass("carImage");
	var image=document.createElement("img");
	$(image).attr("src",carInfo.image);
	$(carDiv).append(image);
	$(carDiv).append(hoverDiv);
	$("#hello").append(carDiv);
}
function addCarWithName(carName) {
	var btn = document.createElement("button");
	var carDiv = document.createElement("div");
	var nameDiv = document.createElement("span");
	$(nameDiv).css("float","left");
	$(nameDiv).css("margin","5px");
	$(nameDiv).css("color","white");
	$(nameDiv).text(carName);
	
	btn.setAttribute("carname",carName);
	$(btn).text("Phase 1");
	$(btn).css("margin","10px");
	$(btn).addClass("btn1");
	 $(btn).mouseup(function(){
        $(this).css("width","70px");
    });
    $(btn).mousedown(function(){
          $(this).css("width","90px");
    }); 
	$(btn).click(phaseBtnClicked)
	$(carDiv).append(nameDiv);
	$(carDiv).append(btn);
	$("#divAddCar").append(carDiv);
}

function addCar() {
	var carName = $("#carName").val();
	if(carName.length <= 0) {
		alert("Please enter a car name");
		return;
	}

	addCarWithName(carName);

	var carsString = localStorage.getItem("cars");
	var cars = JSON.parse(carsString);
	if(!cars) {
		cars = [];
	}
	cars.push(carName);
	saveAllCars(cars);
}

function phaseBtnClicked(e) {
	var btn = e.target;
	$(btn).text("Phase 2");
	$(btn).css("background-color","maroon");
	$(btn).css("color","white");
	$("#form1").css("display","block");
	var carName = btn.getAttribute("carname");
	sessionStorage.setItem("carName",carName);
	//window.open("form.html");
}

function saveAllCars(allCars) {
	localStorage.setItem("cars",JSON.stringify(allCars));	
}

function loadAllCars () {
	var carsString = localStorage.getItem("cars");
	var cars = JSON.parse(carsString);
	if(!cars) {
		cars = [];
	}

	for (i = 0; i < cars.length; i++) { 
		addCarWithName(cars[i]);
		addCarWithImage(cars[i]);
	}
}

function searchCar() {
	var carName = $("#searchInput").val();
	if(carName.length <= 0) {
		alert("Please enter a car name");
		return;
	}
	var carInfo = getCarInfo(carName);
	if(!carInfo) {
		alert("No Info found for " + carName);
		return;
	}

	var div = document.createElement("div");
	var image="<img src="+carInfo.image+">";
	var name = "<br /><b>Name</b>:"+carName;
	var mileage = "<br /><b>Mileage</b>:"+carInfo.mileage;
	var seats = "<br /><b>seats</b>:"+carInfo.seats;
	var desc = "<br /><b>Description</b>:"+carInfo.description;
	$("#searchResult").text("");
	$(div).append(image);
	$(div).append(name);
	$(div).append(mileage);
	$(div).append(seats);
	$(div).append(desc);
	$(div).css("color","white");
	$("#searchResult").append(div);
}

function getCarInfo(carName) {
	var carInfoString = localStorage.getItem(carName);	
	if(!carInfoString) {
		return null;
	}
	var carInfo = JSON.parse(carInfoString);
	return carInfo;
}

