const hotelList = [

    {
        id: 1,
        name: "B&B Hotel Paris",
        country: "France",
        city: "Paris",
        location: "Paris, France",
        address: "12 Rue de Paris, Paris, France",
        phone: "+33 123 456 789",
        rating: "4 Stars",
        price: 95,
        image: "../images/france/B&B_HOTEL/B&B_building.png",
        detailPage: "../pages/france/B&B.html",
        roomType: "Standard Room",
        description: "A simple and comfortable hotel in Paris for travellers who want a clean room and good location."
    },

    {
        id: 2,
        name: "Hotel Angelic",
        country: "France",
        city: "Paris",
        location: "Paris, France",
        address: "22 Avenue Victor Hugo, Paris, France",
        phone: "+33 234 567 890",
        rating: "5 Stars",
        price: 150,
        image: "../images/france/Hotel_Angelic_(Lourdes)/building.avif",
        detailPage: "../pages/france/hotel_angelic.html",
        roomType: "Deluxe Room",
        description: "A beautiful hotel with a comfortable room, nice design, and good service for guests."
    },

    {
        id: 3,
        name: "NH Hotel France",
        country: "France",
        city: "Nice",
        location: "Nice, France",
        address: "8 Beach Street, Nice, France",
        phone: "+33 345 678 901",
        rating: "4 Stars",
        price: 120,
        image: "../images/france/NH_Toulouse_Air/building.jpeg",
        detailPage: "../pages/france/NH_hotel.html",
        roomType: "Sea View Room",
        description: "A relaxing hotel near the beach, suitable for holidays and short trips."
    },

    {
        id: 4,
        name: "Amstel Hotel",
        country: "Germany",
        city: "Berlin",
        location: "Berlin, Germany",
        address: "10 Berlin Street, Berlin, Germany",
        phone: "+49 111 222 333",
        rating: "4 Stars",
        price: 110,
        image: "../images/germany/AMSTEL/hoste-fassade.jpg",
        detailPage: "../pages/germany/amstel.html",
        roomType: "Standard Room",
        description: "A modern hotel in Germany with clean rooms and easy access to transport."
    },

    {
        id: 5,
        name: "Intercity Hotel",
        country: "Germany",
        city: "Berlin",
        location: "Berlin, Germany",
        address: "45 Central Road, Berlin, Germany",
        phone: "+49 222 333 444",
        rating: "5 Stars",
        price: 160,
        image: "../images/germany/intercity/pic0.jpg",
        detailPage: "../pages/germany/intercity.html",
        roomType: "Business Room",
        description: "A hotel for city travellers, business trips, and guests who want comfort in the city center."
    },

    {
        id: 6,
        name: "Prize Hotel",
        country: "Germany",
        city: "Hamburg",
        location: "Hamburg, Germany",
        address: "18 River Street, Hamburg, Germany",
        phone: "+49 333 444 555",
        rating: "3 Stars",
        price: 80,
        image: "../images/germany/PRIZE/PIC1.jpg",
        detailPage: "../pages/germany/prize.html",
        roomType: "Economy Room",
        description: "An affordable hotel for students and travellers who want a simple stay."
    },

    {
        id: 7,
        name: "Acropolis Hotel",
        country: "Greece",
        city: "Athens",
        location: "Athens, Greece",
        address: "5 Athens Road, Athens, Greece",
        phone: "+30 111 222 333",
        rating: "4 Stars",
        price: 100,
        image: "../images/greece/acropolis/bb(1).jpg",
        detailPage: "../pages/greece/acropolis.html",
        roomType: "Classic Room",
        description: "A hotel near famous places in Athens, good for tourists and families."
    },

    {
        id: 8,
        name: "Electra Hotel",
        country: "Greece",
        city: "Athens",
        location: "Athens, Greece",
        address: "9 Museum Street, Athens, Greece",
        phone: "+30 222 333 444",
        rating: "5 Stars",
        price: 170,
        image: "../images/greece/electra/bb.jpg",
        detailPage: "../pages/greece/electra.html",
        roomType: "Luxury Room",
        description: "A luxury hotel with elegant rooms, good breakfast, and comfortable services."
    },

    {
        id: 9,
        name: "Luwian Hotel",
        country: "Greece",
        city: "Santorini",
        location: "Santorini, Greece",
        address: "3 Island Road, Santorini, Greece",
        phone: "+30 333 444 555",
        rating: "4 Stars",
        price: 135,
        image: "../images/greece/luwian/bb(1).jpg",
        detailPage: "../pages/greece/luwian.html",
        roomType: "Island Room",
        description: "A beautiful hotel for holidays with a calm atmosphere and nice view."
    },

    {
        id: 10,
        name: "Dori Hotel",
        country: "Italy",
        city: "Rome",
        location: "Rome, Italy",
        address: "14 Roma Street, Rome, Italy",
        phone: "+39 111 222 333",
        rating: "4 Stars",
        price: 115,
        image: "../images/italy/Hotel_Dori/building.jpeg",
        detailPage: "../pages/italy/dori.html",
        roomType: "Standard Room",
        description: "A comfortable hotel in Rome, good for sightseeing and short stays."
    },

    {
        id: 11,
        name: "LVG Hotel",
        country: "Italy",
        city: "Milan",
        location: "Milan, Italy",
        address: "21 Fashion Street, Milan, Italy",
        phone: "+39 222 333 444",
        rating: "5 Stars",
        price: 180,
        image: "../images/italy/LVG_Hotel/building.jpg",
        detailPage: "../pages/italy/lvg.html",
        roomType: "Premium Room",
        description: "A stylish hotel in Milan with modern design and comfortable rooms."
    },

    {
        id: 12,
        name: "Majorca Hotel",
        country: "Italy",
        city: "Venice",
        location: "Venice, Italy",
        address: "6 Canal Street, Venice, Italy",
        phone: "+39 333 444 555",
        rating: "4 Stars",
        price: 145,
        image: "../images/italy/Hotel_Majorca/building.jpg",
        detailPage: "../pages/italy/majorca.html",
        roomType: "Canal View Room",
        description: "A nice hotel in Venice for romantic trips and cultural travel."

    },

    {
        id: 13,
        name: "717 Hotel",
        country: "Netherlands",
        city: "Amsterdam",
        location: "Amsterdam, Netherlands",
        address: "Amsterdam, Netherlands",
        phone: "+31 111 222 333",
        rating: "4 Stars",
        price: 140,
        image: "../images/netherlands/717/bb.jpg",
        detailPage: "../pages/netherlands/717.html",
        roomType: "Deluxe Room",
        description: "A comfortable hotel in Amsterdam with beautiful rooms and city access."
    },

    {
        id: 14,
        name: "Casa Hotel",
        country: "Netherlands",
        city: "Amsterdam",
        location: "Amsterdam, Netherlands",
        address: "Amsterdam, Netherlands",
        phone: "+31 222 333 444",
        rating: "4 Stars",
        price: 130,
        image: "../images/netherlands/casa/bb.jpg",
        detailPage: "../pages/netherlands/casa.html",
        roomType: "Double Room",
        description: "A modern hotel with comfortable rooms and good facilities."
    },

    {
        id: 15,
        name: "Tribe Hotel",
        country: "Netherlands",
        city: "Amsterdam",
        location: "Amsterdam, Netherlands",
        address: "Amsterdam, Netherlands",
        phone: "+31 333 444 555",
        rating: "4 Stars",
        price: 125,
        image: "../images/netherlands/tribe/bb.jpg",
        detailPage: "../pages/netherlands/tribe.html",
        roomType: "Queen Room",
        description: "A stylish hotel for travellers who want comfort and modern design."
    },

    {
        id: 16,
        name: "H11 Hotel",
        country: "Poland",
        city: "Krakow",
        location: "Krakow, Poland",
        address: "Krakow, Poland",
        phone: "+48 111 222 333",
        rating: "4 Stars",
        price: 90,
        image: "../images/poland/H11/BB.jpg",
        detailPage: "../pages/poland/h11.html",
        roomType: "Double Room",
        description: "A comfortable hotel in Poland with cozy rooms and a good location."
    },

    {
        id: 17,
        name: "H15 Hotel",
        country: "Poland",
        city: "Warsaw",
        location: "Warsaw, Poland",
        address: "Warsaw, Poland",
        phone: "+48 222 333 444",
        rating: "5 Stars",
        price: 150,
        image: "../images/poland/h15/caption.jpg",
        detailPage: "../pages/poland/h15.html",
        roomType: "Deluxe Room",
        description: "An elegant hotel with classic design, comfortable rooms, and premium service."
    },

    {
        id: 18,
        name: "Pollera Hotel",
        country: "Poland",
        city: "Krakow",
        location: "Krakow, Poland",
        address: "Krakow, Poland",
        phone: "+48 333 444 555",
        rating: "4 Stars",
        price: 100,
        image: "../images/poland/Pollera/bb.jpg",
        detailPage: "../pages/poland/pollera.html",
        roomType: "Single Room",
        description: "A historic hotel with warm atmosphere and convenient location."
    },

    {
        id: 19,
        name: "Hyatt Hotel",
        country: "Spain",
        city: "Madrid",
        location: "Madrid, Spain",
        address: "Madrid, Spain",
        phone: "+34 111 222 333",
        rating: "5 Stars",
        price: 190,
        image: "../images/spain/hyatt/bb.jpg",
        detailPage: "../pages/spain/hyatt.html",
        roomType: "King Room",
        description: "A premium hotel in Spain with comfortable rooms and high-quality service."
    },

    {
        id: 20,
        name: "Olimpica Hotel",
        country: "Spain",
        city: "Barcelona",
        location: "Barcelona, Spain",
        address: "Barcelona, Spain",
        phone: "+34 222 333 444",
        rating: "4 Stars",
        price: 130,
        image: "../images/spain/olimpica/b.jpg",
        detailPage: "../pages/spain/olimpica.html",
        roomType: "Standard Room",
        description: "A modern hotel suitable for city trips and relaxing holidays."
    },

    {
        id: 21,
        name: "Turin Hotel",
        country: "Spain",
        city: "Barcelona",
        location: "Barcelona, Spain",
        address: "Barcelona, Spain",
        phone: "+34 333 444 555",
        rating: "4 Stars",
        price: 120,
        image: "../images/spain/turin/pic10.jpg",
        detailPage: "../pages/spain/turin.html",
        roomType: "Twin Room",
        description: "A comfortable hotel with a central location and friendly atmosphere."
    },

    {
        id: 22,
        name: "Diamond Hotel",
        country: "Turkey",
        city: "Istanbul",
        location: "Istanbul, Turkey",
        address: "Istanbul, Turkey",
        phone: "+90 111 222 333",
        rating: "5 Stars",
        price: 160,
        image: "../images/turkey/diamond/pic2.jpg",
        detailPage: "../pages/turkey/diamond.html",
        roomType: "Deluxe Room",
        description: "A beautiful hotel in Turkey with comfortable rooms and city views."
    },

    {
        id: 23,
        name: "Gleam Hotel",
        country: "Turkey",
        city: "Istanbul",
        location: "Istanbul, Turkey",
        address: "Istanbul, Turkey",
        phone: "+90 222 333 444",
        rating: "4 Stars",
        price: 120,
        image: "../images/turkey/gleam/bb.jpg",
        detailPage: "../pages/turkey/gleam.html",
        roomType: "Standard Room",
        description: "A stylish hotel for travellers who want comfort and easy access to the city."
    },

    {
        id: 24,
        name: "Union Hotel",
        country: "Turkey",
        city: "Istanbul",
        location: "Istanbul, Turkey",
        address: "Istanbul, Turkey",
        phone: "+90 333 444 555",
        rating: "4 Stars",
        price: 110,
        image: "../images/turkey/union/bb.jpg",
        detailPage: "../pages/turkey/union.html",
        roomType: "Double Room",
        description: "A comfortable hotel with clean rooms and helpful service."
    },

];



function saveToStorage(storageKey, storageValue) {
    localStorage.setItem(storageKey, JSON.stringify(storageValue));
}

function getFromStorage(storageKey) {
    let value = localStorage.getItem(storageKey);

    if (value === null) {
        return null;
    }

    return JSON.parse(value);
}

function removeFromStorage(storageKey) {
    localStorage.removeItem(storageKey);
}



function findHotelById(hotelId) {
    let selectedHotel = null;

    for (let i = 0; i < hotelList.length; i++) {
        if (hotelList[i].id === Number(hotelId)) {
            selectedHotel = hotelList[i];
        }
    }

    return selectedHotel;
}

function makeBookingReference() {
    let randomNumber = Math.floor(100000 + Math.random() * 900000);
    let reference = "EURO-" + randomNumber;
    return reference;
}

function makeTransactionId() {
    let randomNumber = Math.floor(100000 + Math.random() * 900000);
    let transactionId = "TXN-" + randomNumber;
    return transactionId;
}

function countNights(checkInDate, checkOutDate) {
    let firstDate = new Date(checkInDate);
    let secondDate = new Date(checkOutDate);

    let difference = secondDate - firstDate;
    let nights = difference / (1000 * 60 * 60 * 24);

    if (nights <= 0 || isNaN(nights)) {
        nights = 1;
    }

    return nights;
}

function showMessage(messageText) {
    alert(messageText);
}

function goToPage(pageName) {
    window.location.href = pageName;
}




function registerUser() {
    let formInputs = document.querySelectorAll(".register_form input");

    let firstName = formInputs[0].value;
    let lastName = formInputs[1].value;
    let nickname = formInputs[2].value;
    let dateOfBirth = formInputs[3].value;
    let email = formInputs[4].value;
    let password = formInputs[5].value;

    if (firstName === "") {
        showMessage("Please enter your first name.");
        return;
    }

    if (lastName === "") {
        showMessage("Please enter your last name.");
        return;
    }

    if (email === "") {
        showMessage("Please enter your email.");
        return;
    }

    if (password === "") {
        showMessage("Please create a password.");
        return;
    }

    let user = {
        firstName: firstName,
        lastName: lastName,
        nickname: nickname,
        dateOfBirth: dateOfBirth,
        email: email,
        password: password
    };

    saveToStorage("eurostayUser", user);

    showMessage("Registration successful! Please log in.");

    goToPage("logIN.html");
}



function loginUser() {
    let formInputs = document.querySelectorAll(".register_form input");

    let email = formInputs[0].value;
    let password = formInputs[1].value;

    let savedUser = getFromStorage("eurostayUser");

    if (savedUser === null) {
        showMessage("No account found. Please register first.");
        return;
    }

    if (email === savedUser.email && password === savedUser.password) {
        saveToStorage("eurostayLoggedIn", true);
        showMessage("Login successful!");
        goToPage("account.html");
    } else {
        showMessage("Wrong email or password.");
    }
}



function logoutUser() {
    localStorage.removeItem("eurostayLoggedIn");
    localStorage.removeItem("eurostayUser");
    localStorage.removeItem("eurostaySelectedHotel");

    alert("You logged out.");

    window.location.href = "template.html";
}



function loadAccountInformation() {
    let userInfoBox = document.querySelector(".user-info h2");
    let savedUser = getFromStorage("eurostayUser");

    if (userInfoBox === null) {
        return;
    }

    if (savedUser === null) {
        userInfoBox.textContent = "Guest User";
    } else {
        userInfoBox.textContent = savedUser.firstName + " " + savedUser.lastName;
    }
}



function searchHotels() {
    let searchBox = document.querySelector(".search");

    if (searchBox === null) {
        return;
    }

    let countrySelect = searchBox.querySelector("select");
    let dateInputs = searchBox.querySelectorAll("input[type='date']");

    let selectedCountry = countrySelect.value;
    let checkInDate = dateInputs[0].value;
    let checkOutDate = dateInputs[1].value;

    if (selectedCountry === "Country" || selectedCountry === "City" || selectedCountry === "") {
        showMessage("Please choose a country.");
        return;
    }

    if (checkInDate === "") {
        showMessage("Please choose check-in date.");
        return;
    }

    if (checkOutDate === "") {
        showMessage("Please choose check-out date.");
        return;
    }

    let searchInformation = {
        country: selectedCountry,
        checkInDate: checkInDate,
        checkOutDate: checkOutDate
    };

    saveToStorage("eurostaySearch", searchInformation);

    goToPage("my_bookings.html");
}


function createHotelCard(hotel, includeDelete = false) {
    let card = document.createElement("div");
    card.className = "card";

    let image = document.createElement("img");
    image.src = hotel.image;
    image.alt = hotel.name;

    let descriptionBox = document.createElement("div");
    descriptionBox.className = "description";

    let hotelName = document.createElement("h2");
    hotelName.textContent = hotel.name;

    let hotelDescription = document.createElement("p");
    hotelDescription.textContent = hotel.description;

    let hotelLocation = document.createElement("p");
    hotelLocation.innerHTML = "<strong>Location:</strong> " + hotel.location;

    let hotelRating = document.createElement("p");
    hotelRating.innerHTML = "<strong>Rating:</strong> " + hotel.rating;

    let hotelPrice = document.createElement("p");
    hotelPrice.innerHTML = "<strong>Price:</strong> €" + hotel.price + " / night";

    let bookButton = document.createElement("button");
    bookButton.textContent = "Book";
    bookButton.onclick = function () {
        bookHotel(hotel.id);
    };

    let detailsButton = document.createElement("button");
    detailsButton.textContent = "See the details";
    detailsButton.onclick = function () {
        saveSelectedHotel(hotel.id);
    };

    let favouriteButton = document.createElement("button");
    favouriteButton.textContent = "Favourite";
    favouriteButton.onclick = function () {
        addHotelToFavourites(hotel.id);
    };

    let compareButton = document.createElement("button");
    compareButton.textContent = "Compare";
    compareButton.onclick = function () {
        addHotelToCompare(hotel.id);
    };

    descriptionBox.appendChild(hotelName);
    descriptionBox.appendChild(hotelDescription);
    descriptionBox.appendChild(hotelLocation);
    descriptionBox.appendChild(hotelRating);
    descriptionBox.appendChild(hotelPrice);
    descriptionBox.appendChild(bookButton);
    descriptionBox.appendChild(detailsButton);
    descriptionBox.appendChild(favouriteButton);
    descriptionBox.appendChild(compareButton);

    if (includeDelete === true) {
        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = function () {
            removeHotelFromFavourites(hotel.id);
        };

        descriptionBox.appendChild(deleteButton);
    }

    card.appendChild(image);
    card.appendChild(descriptionBox);

    return card;
}




function displaySearchResults() {
    let pagePath = window.location.pathname;

    if (!pagePath.includes("my_bookings.html")) {
        return;
    }

    let mainArea = document.querySelector(".main");

    if (mainArea === null) {
        return;
    }

    mainArea.innerHTML = "";

    let searchInformation = getFromStorage("eurostaySearch");
    let cityFilter = document.querySelector("#cityFilter");

    let hotelsToShow = [];

    if (searchInformation === null) {
        if (cityFilter !== null) {
            cityFilter.parentElement.style.display = "none";
        }

        let allBookings = getFromStorage("eurostayAllBookings");

        if (allBookings === null || allBookings.length === 0) {
            let message = document.createElement("h2");
            message.textContent = "No bookings found.";
            message.style.color = "white";
            message.style.padding = "40px";
            mainArea.appendChild(message);
            return;
        }

        for (let i = 0; i < allBookings.length; i++) {
            let hotel = findHotelById(allBookings[i].hotelId);

            if (hotel !== null) {
                let hotelCard = createHotelCard(hotel);
                mainArea.appendChild(hotelCard);
            }
        }

        return;
    }

    let selectedCountry = searchInformation.country;
    let selectedCity = "All cities";

    if (cityFilter !== null) {
        cityFilter.parentElement.style.display = "flex";
        selectedCity = cityFilter.value;
    }

    if (cityFilter !== null && cityFilter.options.length <= 1) {
        let cities = [];

        for (let i = 0; i < hotelList.length; i++) {
            if (hotelList[i].country === selectedCountry && !cities.includes(hotelList[i].city)) {
                cities.push(hotelList[i].city);
            }
        }

        cityFilter.innerHTML = "<option>All cities</option>";

        for (let i = 0; i < cities.length; i++) {
            let option = document.createElement("option");
            option.value = cities[i];
            option.textContent = cities[i];
            cityFilter.appendChild(option);
        }

        cityFilter.addEventListener("change", function () {
            displaySearchResults();
        });
    }

    for (let i = 0; i < hotelList.length; i++) {
        if (
            hotelList[i].country === selectedCountry &&
            (selectedCity === "All cities" || hotelList[i].city === selectedCity)
        ) {
            hotelsToShow.push(hotelList[i]);
        }
    }

    if (hotelsToShow.length === 0) {
        let message = document.createElement("h2");
        message.textContent = "No hotels found.";
        message.style.color = "white";
        message.style.padding = "40px";
        mainArea.appendChild(message);
        return;
    }

    for (let i = 0; i < hotelsToShow.length; i++) {
        let hotelCard = createHotelCard(hotelsToShow[i]);
        mainArea.appendChild(hotelCard);
    }
}




function addHotelToFavourites(hotelId) {
    let favouriteHotels = getFromStorage("eurostayFavourites");

    if (favouriteHotels === null) {
        favouriteHotels = [];
    }

    let alreadyExists = false;

    for (let i = 0; i < favouriteHotels.length; i++) {
        if (favouriteHotels[i] === hotelId) {
            alreadyExists = true;
        }
    }

    if (alreadyExists === true) {
        showMessage("This hotel is already in favourites.");
        return;
    }

    favouriteHotels.push(hotelId);
    saveToStorage("eurostayFavourites", favouriteHotels);

    showMessage("Hotel added to favourites.");
}

function displayFavouriteHotels() {
    let pagePath = window.location.pathname;

    if (!pagePath.includes("favourite.html")) {
        return;
    }

    let mainArea = document.querySelector(".main");

    if (mainArea === null) {
        return;
    }

    mainArea.innerHTML = "";

    let favouriteHotels = getFromStorage("eurostayFavourites");

    if (favouriteHotels === null || favouriteHotels.length === 0) {
        let message = document.createElement("h2");
        message.textContent = "No favourite hotels yet.";
        message.style.color = "white";
        message.style.padding = "40px";
        mainArea.appendChild(message);
        return;
    }

    for (let i = 0; i < favouriteHotels.length; i++) {
        let hotel = findHotelById(favouriteHotels[i]);

        if (hotel !== null) {
            let hotelCard = createHotelCard(hotel, true);
            mainArea.appendChild(hotelCard);
        }
    }
}




function addHotelToCompare(hotelId) {
    let compareHotels = getFromStorage("eurostayCompare");

    if (compareHotels === null) {
        compareHotels = [];
    }

    let alreadyExists = false;

    for (let i = 0; i < compareHotels.length; i++) {
        if (compareHotels[i] === hotelId) {
            alreadyExists = true;
        }
    }

    if (alreadyExists === true) {
        showMessage("This hotel is already in compare list.");
        return;
    }

    compareHotels.push(hotelId);
    saveToStorage("eurostayCompare", compareHotels);

    showMessage("Hotel added to compare list.");
}

function populateRoomAvailability() {
    let roomCards = document.querySelectorAll(".rooms-section .room-card");

    if (roomCards.length === 0) {
        return;
    }

    roomCards.forEach(card => {
        if (card.querySelector(".availability")) {
            return;
        }

        let roomTitle = card.querySelector(".room-text h3");
        let count = 5;

        if (roomTitle) {
            let text = roomTitle.textContent.toLowerCase();
            if (text.includes("double")) {
                count = 3;
            } else if (text.includes("single")) {
                count = 4;
            } else if (text.includes("suite")) {
                count = 2;
            } else if (text.includes("family")) {
                count = text.includes("large") ? 3 : 4;
            } else if (text.includes("deluxe")) {
                count = 5;
            } else if (text.includes("superior")) {
                count = 4;
            }
        }

        let availability = document.createElement("p");
        availability.className = "availability";
        availability.textContent = "Available rooms: " + count;

        let roomText = card.querySelector(".room-text");
        let buttonsSection = roomText ? roomText.querySelector(".room-buttons") : null;

        if (buttonsSection) {
            roomText.insertBefore(availability, buttonsSection);
        } else if (roomText) {
            roomText.appendChild(availability);
        }
    });
}

function setupFaqAccordion() {
    let faqCards = document.querySelectorAll(".faq-card");

    faqCards.forEach(card => {
        let button = card.querySelector(".faq-question");
        let answer = card.querySelector(".faq-answer");

        if (!button || !answer) {
            return;
        }

        button.addEventListener("click", function () {
            let isActive = card.classList.toggle("active");
            answer.style.maxHeight = isActive ? answer.scrollHeight + "px" : "0";
        });
    });
}

function displayCompareHotels() {
    let pagePath = window.location.pathname;

    if (!pagePath.includes("compare.html")) {
        return;
    }

    let table = document.querySelector("table");

    if (table === null) {
        return;
    }

    table.innerHTML = "";

    let headerRow = document.createElement("tr");

    headerRow.innerHTML = `
        <th>Photo</th>
        <th>Name</th>
        <th>Rating</th>
        <th>Price</th>
        <th>Actions</th>
    `;

    table.appendChild(headerRow);

    let compareHotels = getFromStorage("eurostayCompare");

    if (compareHotels === null || compareHotels.length === 0) {
        let row = document.createElement("tr");
        row.innerHTML = `<td colspan="5">No hotels selected for comparison.</td>`;
        table.appendChild(row);
        return;
    }

    for (let i = 0; i < compareHotels.length; i++) {
        let hotel = findHotelById(compareHotels[i]);

        if (hotel !== null) {
            let row = document.createElement("tr");

            row.innerHTML = `
                <td><img src="${hotel.image}" alt="${hotel.name}"></td>
                <td>${hotel.name}</td>
                <td>${hotel.rating}</td>
                <td>€${hotel.price} / night</td>
                <td class="actions">
                    <button onclick="saveSelectedHotel(${hotel.id})">See details</button>
                    <button onclick="bookHotel(${hotel.id})">Book</button>
                    <button onclick="addHotelToFavourites(${hotel.id})" class="fav">♡</button>
                </td>
            `;

            table.appendChild(row);
        }
    }
}

function clearCompareList() {
    removeFromStorage("eurostayCompare");
    showMessage("Compare list cleared.");
    location.reload();
}


function saveSelectedHotel(hotelId) {
    let hotel = findHotelById(hotelId);

    if (hotel === null) {
        showMessage("Hotel not found.");
        return;
    }

    if (hotel.detailPage === undefined || hotel.detailPage === "") {
        showMessage("Detail page is not connected yet.");
        return;
    }

    window.location.href = hotel.detailPage;
}



function loadHotelDetails() {
    let pagePath = window.location.pathname;

    if (!pagePath.includes("hotel_details.html")) {
        return;
    }

    let selectedHotelId = getFromStorage("eurostaySelectedHotel");
    let hotel = findHotelById(selectedHotelId);

    if (hotel === null) {
        alert("Hotel not found.");
        return;
    }

    document.getElementById("detailImage").src = hotel.image;
    document.getElementById("detailName").textContent = hotel.name;
    document.getElementById("detailDescription").textContent = hotel.description;
    document.getElementById("detailLocation").textContent = hotel.location;
    document.getElementById("detailAddress").textContent = hotel.address;
    document.getElementById("detailPhone").textContent = hotel.phone;
    document.getElementById("detailRating").textContent = hotel.rating;
    document.getElementById("detailRoom").textContent = hotel.roomType;
    document.getElementById("detailPrice").textContent = hotel.price;

    let bookButton = document.getElementById("bookDetailButton");

    if (bookButton !== null) {
        bookButton.onclick = function () {
            bookHotel(hotel.id);
        };
    }
}



function bookHotel(hotelId) {
    let hotel = findHotelById(hotelId);

    if (hotel === null) {
        showMessage("Hotel not found.");
        return;
    }

    let savedUser = getFromStorage("eurostayUser");
    let searchInformation = getFromStorage("eurostaySearch");

    let checkInDate = "";
    let checkOutDate = "";

    if (searchInformation !== null) {
        checkInDate = searchInformation.checkInDate;
        checkOutDate = searchInformation.checkOutDate;
    }

    if (checkInDate === "") {
        checkInDate = prompt("Enter check-in date, for example 2026-06-01");
    }

    if (checkOutDate === "") {
        checkOutDate = prompt("Enter check-out date, for example 2026-06-05");
    }

    if (checkInDate === null || checkOutDate === null) {
        showMessage("Booking cancelled.");
        return;
    }

    if (checkInDate === "" || checkOutDate === "") {
        showMessage("Dates are required for booking.");
        return;
    }

    let nights = countNights(checkInDate, checkOutDate);
    let totalPrice = nights * hotel.price;

    let guestName = "Guest User";
    let guestEmail = "guest@email.com";

    if (savedUser !== null) {
        guestName = savedUser.firstName + " " + savedUser.lastName;
        guestEmail = savedUser.email;
    }

    let booking = {
        bookingReference: makeBookingReference(),
        transactionId: makeTransactionId(),

        guestName: guestName,
        guestEmail: guestEmail,
        guestPhone: "+60 000 000 000",

        hotelId: hotel.id,
        hotelName: hotel.name,
        hotelLocation: hotel.location,
        hotelAddress: hotel.address,
        hotelPhone: hotel.phone,
        hotelRating: hotel.rating,
        hotelImage: hotel.image,

        roomType: hotel.roomType,
        roomImage: hotel.image,
        roomPrice: hotel.price,

        checkInDate: checkInDate,
        checkOutDate: checkOutDate,
        numberOfNights: nights,
        totalPrice: totalPrice,

        paymentStatus: "Pending",
        bookingStatus: "Pending"
    };

    saveToStorage("eurostayCurrentBooking", booking);

    if (window.location.pathname.includes("/pages/france/") ||
    window.location.pathname.includes("/pages/germany/") ||
    window.location.pathname.includes("/pages/greece/") ||
    window.location.pathname.includes("/pages/italy/") ||
    window.location.pathname.includes("/pages/netherlands/") ||
    window.location.pathname.includes("/pages/poland/") ||
    window.location.pathname.includes("/pages/spain/") ||
    window.location.pathname.includes("/pages/turkey/")) {
    goToPage("../booking_details.html");
} else {
    goToPage("booking_details.html");
}
}




function loadBookingReport() {
    let pagePath = window.location.pathname;

    if (!pagePath.includes("booking_report.html") && !pagePath.includes("booking_details.html")) {
    return;
    }  

    let booking = getFromStorage("eurostayCurrentBooking");

    if (booking === null) {
        return;
    }

    let bookingReference = document.getElementById("bookingReference");
    let guestName = document.getElementById("guestName");
    let guestEmail = document.getElementById("guestEmail");
    let guestPhone = document.getElementById("guestPhone");

    let hotelImage = document.getElementById("hotelImage");
    let hotelName = document.getElementById("hotelName");
    let hotelLocation = document.getElementById("hotelLocation");
    let hotelAddress = document.getElementById("hotelAddress");
    let hotelPhone = document.getElementById("hotelPhone");
    let hotelRating = document.getElementById("hotelRating");

    let roomImage = document.getElementById("roomImage");
    let roomType = document.getElementById("roomType");
    let roomPrice = document.getElementById("roomPrice");

    let checkInDate = document.getElementById("checkInDate");
    let checkOutDate = document.getElementById("checkOutDate");
    let numberOfNights = document.getElementById("numberOfNights");
    let pricePerNight = document.getElementById("pricePerNight");
    let numberOfNightsPricing = document.getElementById("numberOfNightsPricing");
    let totalPrice = document.getElementById("totalPrice");

    let paymentStatus = document.getElementById("paymentStatus");
    let bookingStatus = document.getElementById("bookingStatus");
    let transactionId = document.getElementById("transactionId");

    if (bookingReference !== null) bookingReference.textContent = booking.bookingReference;
    if (guestName !== null) guestName.textContent = booking.guestName;
    if (guestEmail !== null) guestEmail.textContent = booking.guestEmail;
    if (guestPhone !== null) guestPhone.textContent = booking.guestPhone;

    if (hotelImage !== null) hotelImage.src = booking.hotelImage;
    if (hotelName !== null) hotelName.textContent = booking.hotelName;
    if (hotelLocation !== null) hotelLocation.textContent = booking.hotelLocation;
    if (hotelAddress !== null) hotelAddress.textContent = booking.hotelAddress;
    if (hotelPhone !== null) hotelPhone.textContent = booking.hotelPhone;
    if (hotelRating !== null) hotelRating.textContent = booking.hotelRating;

    if (roomImage !== null) roomImage.src = booking.roomImage;
    if (roomType !== null) roomType.textContent = booking.roomType;
    if (roomPrice !== null) roomPrice.textContent = "€" + booking.roomPrice;

    if (checkInDate !== null) checkInDate.textContent = booking.checkInDate;
    if (checkOutDate !== null) checkOutDate.textContent = booking.checkOutDate;
    if (numberOfNights !== null) numberOfNights.textContent = booking.numberOfNights;
    if (pricePerNight !== null) pricePerNight.textContent = "€" + booking.roomPrice;
    if (numberOfNightsPricing !== null) numberOfNightsPricing.textContent = booking.numberOfNights;
    if (totalPrice !== null) totalPrice.textContent = "€" + booking.totalPrice;

    if (paymentStatus !== null) paymentStatus.textContent = booking.paymentStatus;
    if (bookingStatus !== null) bookingStatus.textContent = booking.bookingStatus;
    if (transactionId !== null) transactionId.textContent = booking.transactionId;
}




function savePaymentCard() {
    let cardInputs = document.querySelectorAll(".add_card input");

    let cardNumber = cardInputs[0].value;
    let cardHolder = cardInputs[1].value;
    let cardExpiry = cardInputs[2].value;
    let cardCvc = cardInputs[3].value;

    if (cardNumber === "") {
        showMessage("Please enter card number.");
        return;
    }

    if (cardHolder === "") {
        showMessage("Please enter cardholder name.");
        return;
    }

    if (cardExpiry === "") {
        showMessage("Please enter expiry date.");
        return;
    }

    if (cardCvc === "") {
        showMessage("Please enter CVC.");
        return;
    }

    let savedCards = getFromStorage("eurostayCards");

    if (savedCards === null) {
        savedCards = [];
    }

    let card = {
        cardNumber: cardNumber,
        cardHolder: cardHolder,
        cardExpiry: cardExpiry,
        cardCvc: cardCvc
    };

    savedCards.push(card);
    saveToStorage("eurostayCards", savedCards);

    let booking = getFromStorage("eurostayCurrentBooking");

if (booking !== null && booking.bookingStatus === "Pending") {
    booking.paymentStatus = "Completed";
    booking.bookingStatus = "Confirmed";
    booking.transactionId = makeTransactionId();

    saveToStorage("eurostayCurrentBooking", booking);

    let allBookings = getFromStorage("eurostayAllBookings");

    if (allBookings === null) {
        allBookings = [];
    }

    allBookings.push(booking);
    saveToStorage("eurostayAllBookings", allBookings);

    showMessage("Payment successful. Your booking is confirmed.");
    goToPage("booking_report.html");
    return;
}

showMessage("Card saved successfully.");

cardInputs[0].value = "";
cardInputs[1].value = "";
cardInputs[2].value = "";
cardInputs[3].value = "";

loadSavedCards();
}



function loadSavedCards() {

    let pagePath = window.location.pathname;

    if (!pagePath.includes("payment.html")) {

        return;

    }

    let savedCardsBox = document.querySelector(".saved_cards");

    if (savedCardsBox === null) {

        return;

    }

    savedCardsBox.innerHTML = "<h2>Saved Cards</h2>";

    let savedCards = getFromStorage("eurostayCards");

    if (savedCards === null || savedCards.length === 0) {

        savedCardsBox.innerHTML += "<p>No saved cards yet.</p>";

        return;

    }

    for (let i = 0; i < savedCards.length; i++) {

        let cardDiv = document.createElement("div");

        cardDiv.className = "card";

        cardDiv.innerHTML = `
    <p>**** ** ** ${savedCards[i].cardNumber.slice(-4)}</p>
    <span>Expires ${savedCards[i].cardExpiry}</span>
    <button onclick="deleteSavedCard(${i})">Delete</button>
`;

        savedCardsBox.appendChild(cardDiv);

    }

}




function deleteSavedCard(index) {
    let savedCards = getFromStorage("eurostayCards");

    if (savedCards === null) {
        savedCards = [];
    }

    savedCards.splice(index, 1);

    saveToStorage("eurostayCards", savedCards);

    loadSavedCards();
}




function connectHomeOfferButtons() {
    let pagePath = window.location.pathname;

    if (!pagePath.includes("template.html")) {
        return;
    }

    let offerButtons = document.querySelectorAll(".offers .card button");

    for (let i = 0; i < offerButtons.length; i++) {
        offerButtons[i].onclick = function () {
            bookHotel(i + 1);
        };
    }
}


function printBookingPDF() {
    window.print();
}



window.addEventListener("DOMContentLoaded", function () {

    let pagePath = window.location.pathname;



    if (pagePath.includes("register.html")) {
        let registerButton = document.querySelector(".button_block button");

        if (registerButton !== null) {
            registerButton.addEventListener("click", registerUser);
        }
    }



    if (pagePath.includes("logIN.html")) {
        let loginButton = document.querySelector(".button_block button");

        if (loginButton !== null) {
            loginButton.addEventListener("click", loginUser);
        }
    }



    if (pagePath.includes("account.html")) {
        loadAccountInformation();

        let logoutButton = document.querySelector(".logout");

        if (logoutButton !== null) {
            logoutButton.addEventListener("click", logoutUser);
        }
    }



    let searchButton = document.querySelector(".search button");

    if (searchButton !== null) {
        searchButton.addEventListener("click", searchHotels);
    }



    displaySearchResults();



    displayFavouriteHotels();



    displayCompareHotels();

    let startCompareButton = document.querySelector(".start-btn");

    if (startCompareButton !== null) {
        startCompareButton.addEventListener("click", clearCompareList);
    }



    loadBookingReport();



    loadSavedCards();

    let saveCardButton = document.querySelector(".save");

    if (saveCardButton !== null) {
        saveCardButton.addEventListener("click", savePaymentCard);
    }



    connectHomeOfferButtons();

    if (pagePath.includes("template.html")) {
        setupFaqAccordion();
    }

    populateRoomAvailability();

    let pdfButton = document.querySelector(".download-pdf");

    if (pdfButton !== null) {
        pdfButton.addEventListener("click", printBookingPDF);
    }
});

function deleteSavedCard(index) {
    let savedCards = getFromStorage("eurostayCards");

    savedCards.splice(index, 1);

    saveToStorage("eurostayCards", savedCards);

    loadSavedCards();
}


function deleteCard(button) {
    button.closest(".card").remove();
}

function removeHotelFromFavourites(hotelId) {
    let favouriteHotels = getFromStorage("eurostayFavourites");

    if (favouriteHotels === null) {
        favouriteHotels = [];
    }

    let newFavouriteHotels = [];

    for (let i = 0; i < favouriteHotels.length; i++) {
        if (favouriteHotels[i] !== hotelId) {
            newFavouriteHotels.push(favouriteHotels[i]);
        }
    }

    saveToStorage("eurostayFavourites", newFavouriteHotels);

    displayFavouriteHotels();
}