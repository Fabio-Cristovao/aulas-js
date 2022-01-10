let hotel = {
    name: "Ritz",
    rooms: 200,
    booked: 55,
    check: function () {
        return this.rooms - this.booked
    }
}

let outroHotel = {
    name: "Revolution",
    rooms: 300,
    booked: 80,
    check: function () {
        return this.rooms - this.booked
    }

}




var divName = document.getElementById('hotelName');
divName.textContent = outroHotel.name;

var elRooms = document.getElementById('rooms');
elRooms.textContent = outroHotel.check();