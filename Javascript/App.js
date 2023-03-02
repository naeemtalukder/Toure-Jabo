var carObject = {
    vehicle: "Car",
    imageUrl:"https://images.pexels.com/photos/7385388/pexels-photo-7385388.jpeg?auto=compress&cs=tinysrgb&w=600",
    farePerKilo: 3,
    capacity: 4,
    description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis ut accusantium saepe provident repudiandae, placeat voluptas similique delectus blanditiis nam!"
};
var bikeObject = {
    vehicle: "Bike",
    imageUrl:"https://images.pexels.com/photos/5206994/pexels-photo-5206994.jpeg?auto=compress&cs=tinysrgb&w=600",
    farePerKilo: 6,
    capacity: 2,
    description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis ut accusantium saepe provident repudiandae, placeat voluptas similique delectus blanditiis nam!"
};
var busObject = {
    vehicle: "Bus",
    imageUrl:"https://media.istockphoto.com/id/1372188593/photo/modern-city-bus.jpg?b=1&s=170667a&w=0&k=20&c=-2D1HiCF5NCus9CWUnziiTeKD_x8n1tmiZfJJ_GDzXk=",
    farePerKilo: 2,
    capacity: 40,
    description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis ut accusantium saepe provident repudiandae, placeat voluptas similique delectus blanditiis nam!"
};
var cycleObject = {
    vehicle: "Cycle",
    imageUrl:"https://images.pexels.com/photos/6280594/pexels-photo-6280594.jpeg?auto=compress&cs=tinysrgb&w=600",
    farePerKilo: 10,
    capacity: 1,
    description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis ut accusantium saepe provident repudiandae, placeat voluptas similique delectus blanditiis nam!"
};
var boatObject = {
    vehicle: "Boat",
    imageUrl:"https://images.pexels.com/photos/39621/boat-teamwork-training-exercise-39621.jpeg?auto=compress&cs=tinysrgb&w=600",
    farePerKilo: 7,
    capacity: 14,
    description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis ut accusantium saepe provident repudiandae, placeat voluptas similique delectus blanditiis nam!"
};

const serviceArray =[bikeObject, carObject, busObject, cycleObject, boatObject]

function displayServices(service) {
    const mainSection = document.getElementById("main-section");
    const stringified = JSON.stringify(service);
    const div = document.createElement("div");
     
    div.innerHTML = `
    <div class="card mt-3 mx-auto" style="max-width: 800px;">
    <div class="row g-0">
      <div class="col-md-4">
        <img src=${service.imageUrl} class="img-fluid rounded-start" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">Transport Mood ${service.vehicle}</h5>
          <p class="card-text">${service.description}</p>
          <p class="card-text"><small class="text-muted">Fare Per Kilo: ${service.farePerKilo}</small>
           <small class="text-muted">Capacity: ${service.capacity}</small></p>
          <!-- Button trigger modal -->
          <button type="button" class="btn btn-primary" data-bs-toggle="modal"
           onclick='handleBooking(${stringified})' data-bs-target="#exampleModal">
          Book Now
          </button>
          </div>
      </div>
    </div>
    </div>
    `
    mainSection.appendChild(div);
    // console.log(service);
}

function displayAllArticles(arr) {
  
  // let i=0 ;
  // while(i<arr.length){
  //   displayServices(bikeObject);
  //   i++
  // }
}
displayAllArticles(serviceArray)


displayServices(carObject);
displayServices(busObject);
displayServices(boatObject);
displayServices(bikeObject);
displayServices(cycleObject);


// handle booking

function handleBooking(obj) {
  const modalBody = document.getElementById("modal-body")
  const stringifiedObj = JSON.stringify(obj);

  var vehicle = "Bus"
  var id = vehicle + "input"
  var id2 = vehicle + "farePerKilo"

  modalBody.innerHTML = `
  <div class="card mx-auto" style="width: 18rem;">
  <img src=${obj.imageUrl} class="card-img-top" alt="...">
  <div class="card-body">

    <h5 class="card-title">Vehicle Mode: ${obj.vehicle}</h5>
    <p class="card-text">${obj.description}</p>
    <p class="card-text"><small class="text-muted">Fare Per Kilo: ${obj.farePerKilo}</small>
     <small class="text-muted">Capacity: ${obj.capacity}</small></p>

    <div class="d-flex flex-column" role="search">

      <p>Fare: <small class="text-muted" id="fare"></small> </p>
      <p>Tax: <small class="text-muted" id="tax"></small> </p>
      <p>Total-cost: <small class="text-muted" id="total-cost"></small> </p>

      <input class="form-control my-2" id="distance-input" 
      type="number" placeholder="Kilomiter" aria-label="Search">

      <input class="form-control my-2" id="quantity-input" 
      type="number" placeholder="quantity" aria-label="Search">

      <button class="btn btn-outline-success" id="search-btn" 
      onclick='calculateCost(${stringifiedObj})' type="submit">Search</button>
    </div>
  </div>
  </div>
  `
}




function calculateCost(obj) {
  const quantity= document.getElementById("quantity-input").value ;
  const distance= document.getElementById("distance-input").value ;

  const fareDiv= document.getElementById("fare")

  fareDiv.innerHTML = quantity * distance * obj.farePerKilo
  console.log(fareDiv)

console.log(obj)
}

document.getElementById("search-btn").addEventListener("click", function(){
  const value = document.getElementById("search-value").value;
  for (let i = 0; i < serviceArray.length; i++) {
    const element = serviceArray[i];
    if(value == element.vehicle){
      console.log(element)
    }
  }

  console.log("search", value)
})