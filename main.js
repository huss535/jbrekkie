import { animate, svg, stagger } from 'animejs';


animate(svg.createDrawable('.line'), {
    draw: ['0 0', '1 0', '0 1'],
    ease: 'inOutQuad',
    duration: 5000,
    delay: stagger(0),
    loop: false
});


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

export function getMerchComponent(merchSrc, merchName, merchPrice) {
    return `
     <div class="merch-container">
        <img src=${merchSrc} alt=${merchName} />
        <span>${merchName}</span>
        <span>${merchPrice}</span>
        <button class = 'button-style'>Purchase Item</button>
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
    { src: "public/images/jb-merch/jb-merch-1.webp", name: "T-Shirt - Black", price: "$20" },
    { src: "public/images/jb-merch/jb-merch-2.webp", name: "T-Shirt - White", price: "$20" },
    { src: "public/images/jb-merch/jb-merch-3.webp", name: "Vinyl Record", price: "$25" },
    { src: "public/images/jb-merch/jb-merch-4.webp", name: "Cassette", price: "$15" },
    { src: "public/images/jb-merch/jb-merch-5.webp", name: "Tote Bag", price: "$30" },
    { src: "public/images/jb-merch/jb-merch-6.webp", name: "Guitar Picks", price: "$10" }
];

merchData.forEach((merch) => {
    const merchComponent = getMerchComponent(merch.src, merch.name, merch.price);
    document.querySelector("#merch-items-area").innerHTML += merchComponent;
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



