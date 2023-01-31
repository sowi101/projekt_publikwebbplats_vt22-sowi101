/*
*Created by Sofia Widholm. 
*Webbutveckling III, Webbutveckling, Mittuniversitetet.
*Last update 2022-06-02
*/

"use strict";
// Declaration of variables
let menuUrl = "https://studenter.miun.se/~sowi2102/writeable/dt173g/projekt/webservice/menuapi.php";
let bookingUrl = "https://studenter.miun.se/~sowi2102/writeable/dt173g/projekt/webservice/bookingapi.php";
const dateInput = document.getElementById("date");
const timeInput = document.getElementById("time");
const guestInput = document.getElementById("guests");
const firstNameInput = document.getElementById("firstname");
const lastNameInput = document.getElementById("lastname");
const emailInput = document.getElementById("email");
const phonenumInput = document.getElementById("phonenum");
const requestInput = document.getElementById("request");
const submitBtn = document.getElementById("submit");
let tableMessage = document.getElementById("table-message");
let formMessage = document.getElementById("form-message");
const starterTable = document.getElementById('starter-table');
const redWineTable = document.getElementById('red-wine-table');
const bookingForm = document.getElementById("booktable");
const bookingMessage = document.getElementById("booking-message");
let checkbox = document.getElementById("consent");


// Call of init function when page is loaded
window.onload = init;

// Functions

function init() {
    // Call of getCourses function
    getMenu();

    // If statement that check if the booking form is on the current page
    if (bookingForm) {
        submitBtn.addEventListener("click", saveBooking);

        // Constraint to submit form before consent is checked in booking form
        checkbox.required = true;

        // Constraint to date picker in booking form
        let today = new Date();

        let month = today.getMonth() + 1;
        if (month < 10) {
            month = "0" + month;
        }

        let day = today.getDate();
        if (day < 10) {
            day = "0" + day;
        }

        let date = today.getFullYear() + "-" + month + "-" + day;
        let dateEl = document.getElementById("date");
        dateEl.min = date;
    }
}

function getMenu() {
    // Fetch call to get data about all menuitems from webservice
    fetch(menuUrl)
        .then(response => response.json())
        .then(data => {
            // If statement that check if the table for starters is present on the page
            if (starterTable) {
                // Call of printFood function 
                printFood(data);
            }

            // If statement that check if the table for red wine is present on the page
            if (redWineTable) {
                // Call of printDrinks function 
                printDrinks(data);
            }
        })
        .catch(err => console.log(err))
}

function printFood(menu) {
    // STARTERS
    // Variable that store the table to print to
    const starterTable = document.getElementById('starter-table');
    // Empty the table
    starterTable.innerHTML = "";
    // Filter the array with all menuitems and store the wanted objects to a new variable
    let starterItems = menu.filter(menu => menu.subcategory === "Förrätt")

    // For each that loops through all objects in the array and prints its information to the screen
    starterItems.forEach(item => {
        let itemName = item.name.toUpperCase();
        starterTable.innerHTML += `
            <tr>
                <td class="item-name">${itemName}</td>
                <td class="item-price">${item.price} kr</td>
            </tr>        
            <tr>
                <td colspan="2">${item.description}</td>
            </tr>
        `;
    });

    // MAIN COURSE
    // Variable that store the table to print to
    const mainCourseTable = document.getElementById('main-course-table');
    // Empty table
    mainCourseTable.innerHTML = "";
    // Filter the array with all menuitems and store the wanted objects to a new variable
    let mainCourseItems = menu.filter(menu => menu.subcategory === "Huvudrätt")

    // For each that loops through all objects in the array and prints its information to the screen
    mainCourseItems.forEach(item => {
        let itemName = item.name.toUpperCase();
        mainCourseTable.innerHTML += `
            <tr>
            <td class="item-name">${itemName}</td>
            <td class="item-price">${item.price} kr</td>
        </tr>        
        <tr>
            <td colspan="2">${item.description}</td>
        </tr>
            `;
    });

    // DESSERTS
    // Variable that store the table to print to
    const dessertTable = document.getElementById('dessert-table');
    // Empty table
    dessertTable.innerHTML = "";
    // Filter the array with all menuitems and store the wanted objects to a new variable
    let dessertItems = menu.filter(menu => menu.subcategory === "Dessert")

    // For each that loops through all objects in the array and prints its information to the screen
    dessertItems.forEach(item => {
        let itemName = item.name.toUpperCase();
        dessertTable.innerHTML += `
            <tr>
                <td class="item-name">${itemName}</td>
                <td class="item-price">${item.price} kr</td>
            </tr>        
            <tr>
                <td colspan="2">${item.description}</td>
            </tr>
            `;
    });

}

function printDrinks(menu) {
    // RED WINE
    // Variable that store the table to print to
    const redWineTable = document.getElementById('red-wine-table');
    // Empty table
    redWineTable.innerHTML = "";
    // Filter the array with all menuitems and store the wanted objects to a new variable
    let redWineItems = menu.filter(menu => menu.subcategory === "Rött vin")

    // For each that loops through all objects in the array and prints its information to the screen
    redWineItems.forEach(item => {
        let itemName = item.name.toUpperCase();
        redWineTable.innerHTML += `
            <tr>
                <td class="item-name">${itemName}</td>
                <td class="item-price">${item.price} kr</td>
            </tr>        
            <tr>
                <td colspan="2">${item.description}</td>
            </tr>
            `;
    });

    // WHITE WINE
    // Variable that store the table to print to
    const whiteWineTable = document.getElementById('white-wine-table');
    // Empty table
    whiteWineTable.innerHTML = "";
    // Filter the array with all menuitems and store the wanted objects to a new variable
    let whiteWineItems = menu.filter(menu => menu.subcategory === "Vitt vin")

    // For each that loops through all objects in the array and prints its information to the screen
    whiteWineItems.forEach(item => {
        let itemName = item.name.toUpperCase();
        whiteWineTable.innerHTML += `
            <tr>
                <td class="item-name">${itemName}</td>
                <td class="item-price">${item.price} kr</td>
            </tr>        
            <tr>
                <td colspan="2">${item.description}</td>
            </tr>
            `;
    });

    // BEVERAGES
    // Variable that store the table to print to
    const beverageTable = document.getElementById('beverage-table');
    // Empty table
    beverageTable.innerHTML = "";
    // Filter the array with all menuitems and store the wanted objects to a new variable
    let beverageItems = menu.filter(menu => menu.subcategory === "Öl och cider")

    // For each that loops through all objects in the array and prints its information to the screen
    beverageItems.forEach(item => {
        let itemName = item.name.toUpperCase();
        beverageTable.innerHTML += `
            <tr>
                <td class="item-name">${itemName}</td>
                <td class="item-price">${item.price} kr</td>
            </tr>        
            <tr>
                <td colspan="2">${item.description}</td>
            </tr>
            `;
    });

    // ALCOHOLFREE
    // Variable that store the table to print to
    const alcoholfreeTable = document.getElementById('alcoholfree-table');
    // Empty table
    alcoholfreeTable.innerHTML = "";
    // Filter the array with all menuitems and store the wanted objects to a new variable
    let alcoholfreeItems = menu.filter(menu => menu.subcategory === "Alkoholfritt")

    // For each that loops through all objects in the array and prints its information to the screen
    alcoholfreeItems.forEach(item => {
        let itemName = item.name.toUpperCase();
        alcoholfreeTable.innerHTML += `
            <tr>
                <td class="item-name">${itemName}</td>
                <td class="item-price">${item.price} kr</td>
            </tr>        
            <tr>
                <td colspan="2">${item.description}</td>
            </tr>
            `;
    });
}

function saveBooking(event) {
    // Function that prevents default behavior for the element clicked
    event.preventDefault();

    // Variable that store the element to print error messages to
    const dateMessage = document.getElementById("date-message");
    const timeMessage = document.getElementById("time-message");
    const guestMessage = document.getElementById("guest-message");
    const firstnameMessage = document.getElementById("firstname-message");
    const lastnameMessage = document.getElementById("lastname-message");
    const phoneMessage = document.getElementById("phone-message");
    const emailMessage = document.getElementById("email-message");

    // Empty variables
    bookingMessage.innerText = "";
    dateMessage.innerText = "";
    timeMessage.innerText = "";
    guestMessage.innerText = "";
    firstnameMessage.innerText = "";
    lastnameMessage.innerText = "";
    phoneMessage.innerText = "";
    emailMessage.innerText = "";

    // Variables that store values from form
    let date = dateInput.value;
    let time = timeInput.value;
    let guests = guestInput.value;
    let firstname = firstNameInput.value;
    let lastname = lastNameInput.value;
    let phonenum = phonenumInput.value;
    let email = emailInput.value;
    let request = requestInput.value;

    // If statement that check if the checkbox for consent has been checked
    if (checkbox.checked) {
        // If statement that check if all the form input fields are empty
        if (date.length < 1 && time.length < 1 && guests.length < 1 && firstname.length < 1 && lastname.length < 1 && phonenum.length < 1 && email.length < 1) {
            // Print error message
            bookingMessage.innerText = "Du har inte fyllt i något av fälten.";
        // Else if statement that check if any of the form input fields are empty
        } else if (date.length < 1 || time.length < 1 || guests.length < 1 || firstname.length < 1 || lastname.length < 1 || phonenum.length < 1 || email.length < 1) {
            // If statements that check if that specific input field is empty and prints error specific error message if that is the case
            if (date.length < 1) {
                dateMessage.innerText = "Du har glömt att fylla i datum för bokning.";
            }

            if (time.length < 1) {
                timeMessage.innerText = "Du har glömt att fylla i önskad tid för bokning.";
            }

            if (guests.length < 1) {
                guestMessage.innerText = "Du har glömt att fylla i antal gäster för bokningen.";
            }

            if (firstname.length < 1) {
                firstnameMessage.innerText = "Du har glömt att fylla i ditt förnamn.";
            }

            if (lastname.length < 1) {
                lastnameMessage.innerText = "Du har glömt att fylla i ditt efternamn.";
            }
            if (phonenum.length < 1) {
                phoneMessage.innerText = "Du har glömt att ange telefonnummer.";
            }

            if (email.length < 1) {
                emailMessage.innerText = "Du har glömt att ange e-mailadress.";
            }
        } else {
            // Variable stores all variables converted to a JSON string
            let jsonStr = JSON.stringify({
                date: date,
                time: time,
                guests: guests,
                firstname: firstname,
                lastname: lastname,
                phonenum: phonenum,
                email: email,
                request: request
            });

            // Fetch call to send data to the webservice and create a new course
            fetch(bookingUrl, {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: jsonStr
            })
                .then(response => response.json())
                .then(data => {
                    // Call of function clearForm
                    clearForm();
                    // Print message from webservice 
                    bookingMessage.innerText = data["message"];
                })
                .catch(err => console.log(err))
        }
    } else {
        // Print message if checkbox is not check
        bookingMessage.innerText = "Du måste godkänna insamling av personuppgifter.";
    }
}

function clearForm() {
    // Empty the input fields in form
    dateInput.value = "";
    timeInput.value = "";
    guestInput.value = "";
    firstNameInput.value = "";
    lastNameInput.value = "";
    phonenumInput.value = "";
    emailInput.value = "";
    requestInput.value = "";
    checkbox.checked = false;
}