// Below are the Object constructor function to create car objects for this task
function carConstructor(make, model, colour, image, regNumber, price) {
    this.make = make;
    this.model = model;
    this.colour = colour;
    this.image = image;
    this.regNumber = regNumber;
    this.price = price;
}

// Populate 5 objects with 5 different cars' info using constructor function
let audi1 = new carConstructor("2021 Audi", "RS7 Sportback 4.0T", "Glacier White", "images/car1.jpg", "N22942", "R 244 490");
let audi2 = new carConstructor("2021 Audi", "Q8 45 TDI Quattro Auto", "Glacier White Metall", "images/car2.jpg", "N24468", "R 1 084 399");
let audi3 = new carConstructor("2021 Audi", "RS3 Sportback Quattro", "Red", "images/car3.jpg", "N44778", "R 1 076 500");
let audi4 = new carConstructor("2021 Audi", "R8 5.2 V10 Quattro Auto", "Red", "images/car4.jpg", "N87893", "R 949 994");
let audi5 = new carConstructor("2021 Audi", "A5 Coupe 2.0 TDI Quattro S Line Auto", " Navarra Blue Metalli", "images/car5.jpg", "N98456", "R 947 175");

let carArray = [audi1, audi2, audi3, audi4, audi5]; // Put all 5 audi car objects into an array

// Main function that is called when the page loads writes images and car info to page.
function displayInfo() {
  
    carArray.forEach(function(Car) {
        let selectDiv = document.getElementById("carDisplay");
        let createImg = document.createElement("img");
        let createDiv = document.createElement("div");
        let createLineBreak = document.createElement("br");

        createImg.src = Car.image;
        createImg.alt = Car.make + " " + Car.model; // Write alt text for each car to img element
        createImg.className = "carPics"; // this assigns the image of the car to the class "carPics" to make it easy to style


 // implementation of the dialog box
        Car.showMore = function () {
            let createDialog = document.createElement("dialog");
            createDialog.innerHTML = JSON.stringify(Car);
           
            createDialog.setAttribute("open", "open"); 
            selectDiv.appendChild(createDialog); 
        }

      // Add an event listener to each image and call the showMore () method when the user clicks on the image
        createImg.addEventListener("click", function (callMethod) {
            Car.showMore();
        });

        // Add text next to each car image with info from that cars object
        createDiv.innerHTML = Car.make + " " + Car.model;

       
        selectDiv.appendChild(createImg);
        selectDiv.appendChild(createDiv);
        selectDiv.appendChild(createLineBreak);

    }); 
	
	
	

} 