export function getTourBookingComponent(date, venue, location, buttonText) {
    return `
  <div class="tour-info">
        <span class="tour-date">${date}</span>
        <span>*</span>
        <span class="tour-venue">${venue}</span>
        <span>*</span>
        <span class="tour-location">${location}</span>

        <span>*</span>


        <button class = 'button-style'>${buttonText}</button>
      </div>
  `;
}

export function getMerchComponent(merchSrc, merchName) {
    return `
     <div class="merch-container">
        <img src=${merchSrc} alt=${merchName} />
        <span>${merchName}</span>
        <button class = 'button-style'>Buy Now</button>
      </div>
  `;
}


//Tour Data
const tourData = [
    { date: "January 15, 2024", venue: "Madison Square Garden", location: "New York, NY", buttonText: "Buy Tickets" },
    { date: "February 10, 2024", venue: "United Center", location: "Chicago, IL", buttonText: "Buy Tickets" },
    { date: "March 1, 2024", venue: "The Forum", location: "Los Angeles, CA", buttonText: "Buy Tickets" },
    { date: "April 20, 2024", venue: "TD Garden", location: "Boston, MA", buttonText: "Buy Tickets" },
    { date: "May 15, 2024", venue: "Wells Fargo Center", location: "Philadelphia, PA", buttonText: "Buy Tickets" },

];




// Render Tour Booking Components
tourData.forEach((tour, index) => {
    const tourBookingComponent = getTourBookingComponent(tour.date, tour.venue, tour.location, tour.buttonText);
    document.querySelector("#tour-section").innerHTML += tourBookingComponent;
    if (index < tourData.length - 1) {
        document.querySelector("#tour-section").innerHTML += "<img src='./public/images/tour-divider.svg' />";
    }

});

// Merch Data
const merchData = [
    { src: "public/images/jb-merch-1.svg", name: "T-Shirt" },
    { src: "public/images/jb-merch-1.svg", name: "Hoodie" },
    { src: "public/images/jb-merch-1.svg", name: "Poster" },
    { src: "public/images/jb-merch-1.svg", name: "Vinyl Record" },
    { src: "public/images/jb-merch-1.svg", name: "Cap" },
    { src: "public/images/jb-merch-1.svg", name: "Cap" }
];

merchData.forEach((merch) => {
    const merchComponent = getMerchComponent(merch.src, merch.name);
    document.querySelector("#merch-section").innerHTML += merchComponent;
});




const musicVideoLinks = [
    { src: "https://www.youtube.com/embed/KNT7wuqaykc?si=ELzM79WBuxmHZhLa", title: "Everybody Wants To Love You" },
    { src: "https://www.youtube.com/embed/i9rcfX_t3nU?si=jhUTpcrx95LLnVgq", title: "Orlando in Love" },
    { src: "https://www.youtube.com/embed/2ZfcZEIo6Bw?si=yth-sDOPWcYsWPYI", title: "Be sweet" }
];



const iframe = document.querySelector("#music-video-iframe");
const previousButton = document.querySelector("#prev-video-button");
const nextButton = document.querySelector("#next-video-button");
let currentVideoIndex = 0;


previousButton.addEventListener("click", () => {

    console.log("Previous button clicked");
    currentVideoIndex = (currentVideoIndex - 1 + musicVideoLinks.length) % musicVideoLinks.length;
    iframe.src = musicVideoLinks[currentVideoIndex].src;
});

nextButton.addEventListener("click", () => {
    currentVideoIndex = (currentVideoIndex + 1) % musicVideoLinks.length;
    iframe.src = musicVideoLinks[currentVideoIndex].src;
});




iframe.src = musicVideoLinks[currentVideoIndex].src;

