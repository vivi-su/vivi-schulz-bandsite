let createBtn = (text, showsContent) => {
  const btn = document.createElement("button");
  btn.classList.add("shows__btn");
  btn.innerText = text;
  showsContent.appendChild(btn);
  btn.addEventListener("click", buttonHandler);

  function buttonHandler() {
    let called = false;
    if (called) {
      btn.removeEventListener("click", buttonHandler);
    } else {
      called = true;
      btn.classList.toggle("shows__btn--active");
    }
    return btn;
  }
};

const createDivider = (showsContent) => {
  const divider = document.createElement("hr");
  divider.classList.add("shows__hr");
  showsContent.appendChild(divider);
};

const renderShowsSet = (show, showsList) => {
  const showsContent = document.createElement("div");
  showsContent.classList.add("shows__content");
  showsContent.setAttribute("id", show.id);

  //------------------show date-----------------
  const showsDate = document.createElement("p");
  showsDate.classList.add("shows__date");
  showsDate.innerText = "DATE";
  showsContent.appendChild(showsDate);

  const showsDateDetail = document.createElement("p");
  showsDateDetail.classList.add("shows__dateDetail");

  const now = show.date;
  const today = new Date(now);  
  showsDateDetail.innerText = today.toDateString();
  showsContent.appendChild(showsDateDetail);


  //------------------show venue-----------------
  const showsVenue = document.createElement("p");
  showsVenue.classList.add("shows__venue");
  showsVenue.innerText = "VENUE";
  showsContent.appendChild(showsVenue);

  const showsVenueDetail = document.createElement("p");
  showsVenueDetail.classList.add("shows__venueDetail");
  showsVenueDetail.innerText = show.place;
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
  createBtn("BUY TICKET", showsContent);
  createDivider(showsContent);
};

const render = (shows) => {
  const showsList = document.querySelector(".shows__list");
  showsList.innerHTML = "";

  shows.forEach((show) => {
    renderShowsSet(show, showsList);
  });
};


const usersURL =
  "https://project-1-api.herokuapp.com/showdates?api_key={{SPRINT3__KEY}}";

const axiosCall = axios.get(usersURL);
axiosCall.then((resolve) => {
         
          render(resolve.data);  
          })
          .catch((err) => {
            console.log(err.err);
          })

