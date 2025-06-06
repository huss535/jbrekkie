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

const tourData = [
    { date: "January 15, 2024", venue: "Madison Square Garden", location: "New York, NY", buttonText: "Buy Tickets" },
    { date: "February 10, 2024", venue: "United Center", location: "Chicago, IL", buttonText: "Buy Tickets" },
    { date: "March 1, 2024", venue: "The Forum", location: "Los Angeles, CA", buttonText: "Buy Tickets" },
    { date: "April 20, 2024", venue: "TD Garden", location: "Boston, MA", buttonText: "Buy Tickets" },
    { date: "May 15, 2024", venue: "Wells Fargo Center", location: "Philadelphia, PA", buttonText: "Buy Tickets" },

];

tourData.forEach((tour, index) => {
    const tourBookingComponent = getTourBookingComponent(tour.date, tour.venue, tour.location, tour.buttonText);
    document.querySelector("#tour-section").innerHTML += tourBookingComponent;
    if (index < tourData.length - 1) {
        document.querySelector("#tour-section").innerHTML += "<img src='./public/images/tour-divider.svg' />";
    }

});
