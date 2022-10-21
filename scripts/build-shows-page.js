 const createBtn = (text, showsContent) => {
    const btn = document.createElement("button");
    btn.innerText =text;
    showsContent.appendChild(btn);

    btn.addEventListener("click", () => {
      btn.style.backgroundColor = "red";
    });

    return btn;
  };

  //createBtn('COMMENT');

const createDivider = (showsContent) => {
  const divider = document.createElement("hr");
  divider.classList.add('shows__hr');
    showsContent.appendChild(divider);
};


const renderShowsSet = (show, showsList) => {
  const showsContent = document.createElement("div");
  showsContent.classList.add("shows__content");


  //------------------show date-----------------
  const showsDate = document.createElement("p");
  showsDate.classList.add("shows__date");
  showsDate.innerText = "DATE";
  showsContent.appendChild(showsDate);

  const showsDateDetail = document.createElement("p");
  showsDateDetail.classList.add("shows__dateDetail");
  showsDateDetail.innerText = show.date;
  showsContent.appendChild(showsDateDetail);


  
  //------------------show venue-----------------
  const showsVenue = document.createElement("p");
  showsVenue.classList.add("shows__venue");
  showsVenue.innerText = "VENUE";
  showsContent.appendChild(showsVenue);

  const showsVenueDetail = document.createElement("p");
  showsVenueDetail.classList.add("shows__venueDetail");
  showsVenueDetail.innerText = show.venue;
  showsContent.appendChild(showsVenueDetail);

  //------------------show location-----------------
  const showsLocation = document.createElement("p");
  showsLocation.classList.add("shows__location");
  showsLocation.innerText = "LOCATION";
  showsContent.appendChild(showsLocation);

  const showsLocationDetail = document.createElement("p");
  showsLocationDetail.classList.add("shows__locationDetail");
  showsLocationDetail.innerText = show.location;
  showsContent.appendChild(showsLocationDetail);

  showsList.appendChild(showsContent);
  createBtn('BUY TICKET', showsContent);
  createDivider(showsContent);
};;




const render = () => {
 
  const showsList = document.querySelector(".shows__list");
  showsList.innerHTML = "";
  for (let i = 0; i <shows.length; i++) {
    console.log(shows[i]);
    renderShowsSet(shows[i], showsList);
  

  }
};

render();
