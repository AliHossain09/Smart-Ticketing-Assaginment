
const allSeats = document.getElementsByClassName('seat btn');
let sum = 0;
let minus = 40;


for (const seats of allSeats) {
    seats.addEventListener('click', function (e) {
        sum = sum + 1;
        minus = minus - 1;

        if (minus < 0) {
            alert('Seat have not yet');
        }
        if (sum > 4) {
            alert('You have already 4 seats')

        }

        e.target.style.backgroundColor = "#27AE60";

        // selected-place-container
        const seatName = e.target.innerText;

        const totalTicketPrise = document.getElementById('ticket-price');
        const perTicketPrise = totalTicketPrise.innerText;

        const selectedContainer = document.getElementById('selected-place-container');

        const li = document.createElement('li');

        const p = document.createElement('p');
        p.innerText = seatName;
        const p2 = document.createElement('p');
        p2.innerText = perTicketPrise;

        li.appendChild(p);
        li.appendChild(p2);
        selectedContainer.appendChild(li);



        totalPrice('total-price', parseInt(perTicketPrise));
        grandtotal('grand-total', parseInt(perTicketPrise));
        setInnerText('sum-count', sum);
        setInnerText('seats-count', minus);


    });
}

// // total price 
function totalPrice(id, value) {
    const totalPrice = document.getElementById(id).innerText;
    const convertedTotalPrice = parseInt(totalPrice);

    const sumTotalPrice = convertedTotalPrice + parseInt(value);

    setInnerText('total-price', sumTotalPrice);

}
// / grand total

function grandtotal(coupon) {
    const totalPrice = document.getElementById('total-price').innerText;
    const convertedGrandTotal = parseInt(totalPrice);


    setInnerText('grand-total', convertedGrandTotal);

}

// Apply button

const btn = document.getElementById('apply-btn');
btn.addEventListener('click', function () {


    // get the value from input

    const couponElement = document.getElementById('input-field').value;
    const couponCode = couponElement.split(' ').join('');
    console.log(couponCode);
    if (sum >= 4) {
        if (couponCode == 'NEW15') {
            const discountElement = document.getElementById('discount-price');
            const discountAmount = totalPrice * 0.15;

            discountElement.innerText = discountAmount.toFixed(2);

        } else {
            alert('Invalid Coupon Code')
        }

    } else if (sum >= 4) {
        if (couponCode == 'COUPLE20') {
            const discountAmount = totalPrice * 0.2;
            grandtotal.innerText = parseInt(discountAmount).toFixed(2);
        } else {
            alert('Invalid Coupon Code')
        }

    } else {
        alert('Please By 4 tickets')
    }

})





function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
    document.getElementById(id).innerText = value;
}

// input field condition
    const passengerName = document.getElementById('name');
    const passengerPhone = document.getElementById('phone');
    const passengerEmail = document.getElementById('email');
    const nextButton = document.getElementById('next-btn');
    nextButton.addEventListener('click', function(pera){
        pera.preventDefault();

        if(passengerName.value==''){
            alert('Please type your name;')
        }else if(passengerPhone.value==''){
            alert('Please input your phone number;')
        }else if(passengerEmail.value==''){
            alert('Please type your phone email;')
        }else if(sum < 0){
            alert('Please select your seat;')
        }else{
            popupBtnOpen.classList.remove('hidden');
        }
    })


// popup open & close section
function openPopup() {
    const popupBtnOpen = document.getElementById('popup');
    popupBtnOpen.classList.remove('hidden');

}
function closePopup() {
    const popupBtnOpen = document.getElementById('popup');
    popupBtnOpen.classList.add('hidden');


}