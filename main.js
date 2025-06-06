export function getTourBookingComponent(date, venue, location, buttonText) {
    return `
  <div class="tour-info">
        <span class="tour-date">${date}</span>
        <span>*</span>
        <span class="tour-venue">${venue}</span>
        <span>*</span>
        <span class="tour-location">${location}</span>

        <span>*</span>


        <button>${buttonText}</button>
      </div>
  `;
}



document.querySelector("#tour-section").innerHTML += getTourBookingComponent("March 1, 2024", "The Forum", "Los Angeles, CA", "Buy Tickets");