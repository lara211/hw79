let guests = [];

function addGuest() {
    let guestName = document.getElementById("guestName").value;
    guests.push(guestName);
    displayGuests();
    document.getElementById("guestName").value = "";
}

function displayGuests() {
    let guestList = document.getElementById("guestList");
    guestList.innerHTML = "";

    for (let i = 0; i < guests.length; i++) {
        let listItem = document.createElement("li");
        listItem.textContent = guests[i];
        guestList.appendChild(listItem);
    }
}

function organizeGuests() {
    guests.sort();
    displayGuests();
}

function searchGuest() {
    let searchName = document.getElementById("searchName").value;
    let count = 0;

    for (let i = 0; i < guests.length; i++) {
        if (guests[i].toLowerCase() === searchName.toLowerCase()) {
            count++;
        }
    }

    alert(`O nome "${searchName}" aparece ${count} vezes na lista.`);
}