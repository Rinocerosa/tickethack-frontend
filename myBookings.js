// GET Permettant de visualiser les commandes, recupère commandes enregistrées dans bookings
fetch("http://localhost:3000/bookings")
  .then((response) => response.json())
  .then((dat) => {
    const array = dat.data;
    console.log(array);
    for (let i = 0; i < array.length; i++) {
      console.log("tu me vois??");
      let date = new Date(array[i].selectedTrip.date);
      let countdown = Math.floor((date - Date.now()) / 3600 / 1000);
      console.log("countdown " + countdown);
      document.querySelector(
        "#mainContent"
      ).innerHTML += `<div class="BookingTrip">
				<div class="bookingRoute">${array[i].selectedTrip.departure} > ${
        array[i].selectedTrip.arrival
      }</div>
				<div class="bookingArrival">${date.getHours()}:${date.getMinutes()}</div>
				<div class="bookingPrice">${array[i].buyingPrice}€</div>
				<div class="bookingCountdown">Departure in ${-countdown} hours</div>
			</div>`;
    }
  });

// ocument.addEventListener("DOMContentLoaded", () => {
// 	// Fonction pour récupérer les réservations depuis le backend
// 	function fetchBookings() {
// 	  fetch("/bookings") // Endpoint pour récupérer les réservations depuis le backend
// 		.then((response) => response.json())
// 		.then((data) => {
// 		  displayBookings(data); // Afficher les réservations une fois récupérées
// 		})
// 		.catch((error) => console.error("Error fetching bookings:", error));
// 	}

// 	// Fonction pour afficher les réservations sur la page
// 	function displayBookings(bookings) {
// 	  const bookingsContainer = document.querySelector(".cart-container");

// 	  bookings.forEach((booking) => {
// 		const trip = booking.selectedTrip;
// 		const departureDate = new Date(trip.departureTime);
// 		const currentDate = new Date();
// 		const timeDiff = departureDate.getTime() - currentDate.getTime();
// 		const hoursDiff = Math.floor(timeDiff / (1000 * 60 * 60));
// 		const minutesDiff = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));

// 		const bookingElement = document.createElement("div");
// 		bookingElement.classList.add("cart-trip-line");
// 		bookingElement.innerHTML = `
// 		  <div class="trainlist">
// 			<h3>${trip.origin} > ${trip.destination}</h3>
// 			<h3>${trip.departureTime}</h3>
// 			<h3>${trip.fare}€</h3>
// 		  </div>
// 		  <div class="wait-time">
// 			<h3>Departure in: ${hoursDiff} hours and ${minutesDiff} minutes</h3>
// 		  </div>
// 		`;
// 		bookingsContainer.appendChild(bookingElement);
// 	  });
// 	}

// 	// Appel de la fonction pour récupérer et afficher les réservations lors du chargement de la page
// 	fetchBookings();
//   });
