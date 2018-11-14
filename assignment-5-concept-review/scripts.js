// Constructed hotel data
var hotels = [];

// Hotel constructor function
function Hotel(name, rooms, booked) {
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;

    this.getAvailableRooms = function () {
        return this.rooms - this.booked;
    }
};

// Page init function
function init () {
    // Construct hotels and add them to the hotels array
    hotels.push(new Hotel('Hilton',200, 150));
    hotels.push(new Hotel('Pfister', 100, 50));
    hotels.push(new Hotel('Days Inn', 150, 140));

    // Write copywrite date
    var dateEl = document.getElementById('date');
    var today = new Date();
    dateEl.textContent = today.getFullYear();
};

// Get a reference to the hotel list
var hotelList = document.getElementById('hotel-list');

/** Wire up click event handler for the hotel list **/

// option 2: define the click handler function separately
// reference it as such: hotelList.onclick = hotelClick;
// function hotelClick (event) {
//     // todo
// }

// option 1: define an anonymous function to handle the event
hotelList.onclick = function (event) {
    // Get name from clicked element
    var hotelName = event.target.innerHTML;

    // Find the hotel with the hotelName in our hotels array
    var myHotel = hotels.find(function (hotel) { 
        return hotel.name === hotelName; 
    });

    // If we found a hotel in our hotels array, then
    // use the hotel object to set the selected hotel html elements
    if (myHotel !== undefined) {
        // Name
        var nameEl = document.getElementById('name');
        nameEl.textContent = myHotel.name;

        // Rooms

        // Booked

        // Available
    }

}



// Initialize the hotel data
init();
