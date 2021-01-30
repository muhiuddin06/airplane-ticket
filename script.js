function handleTicket(ticketType, isIncrease) {
    //This is about ticket count.
    const ticketCount = getTicketInput(ticketType);
    let ticketTotalCount = ticketCount;
    if (isIncrease == true) {
        ticketTotalCount = ticketCount + 1;
    } else if (isIncrease == false && ticketCount > 0) {
        ticketTotalCount = ticketCount - 1;
    }
    document.getElementById(ticketType + 'TicketInput').value = ticketTotalCount;

    //This is about ticket price.
    let ticketPrice = 0;
    if (ticketType == 'firstClass') {
        ticketPrice = ticketTotalCount * 150;
    } else if (ticketType = 'economy') {
        ticketPrice = ticketTotalCount * 100;
    }
    totalTicketPrice();
}


//This funciton is about input value.
function getTicketInput(ticketType) {
    const ticketInput = document.getElementById(ticketType + 'TicketInput');
    const ticketCount = parseInt(ticketInput.value);
    return ticketCount;
}


// This function is about count total ticket price. 
function totalTicketPrice() {
    const firstClassTicketCount = getTicketInput('firstClass');
    const economyTicketCount = getTicketInput('economy');
    const subtotalTicketPrice = firstClassTicketCount * 150 + economyTicketCount * 100;
    document.getElementById('subtotalTicketPrice').innerText = subtotalTicketPrice;

    const ticketTax = subtotalTicketPrice * 0.1;
    document.getElementById('ticketTax').innerText = Math.round(ticketTax)

    const totalTicketPrice = subtotalTicketPrice + ticketTax;
    document.getElementById('totalTicketPrice').innerText = totalTicketPrice;
}

function handleBookNow() {
    document.getElementById('bookingForm').style.display = "none";
    document.getElementById('bookingContent').style.display = "none";
    document.getElementById('successMessage').style.display = "block";
}