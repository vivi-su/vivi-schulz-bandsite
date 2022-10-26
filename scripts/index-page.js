const getDate = (isToday) => {
 const d = new Date(isToday);
 const year = d.getUTCFullYear();
 const month = ((d.getUTCMonth() + 1 ) < 10 ? '0' :'') + (d.getUTCMonth() + 1 );
 const day = (d.getUTCDate() < 10 ? '0' : '') + d.getUTCDate();


 return `${month}/${day}/${year}`;
};

const nameInput = document.getElementById("userName");
const messageTextArea = document.getElementById("textArea");

const focusHandler = (event) => {
  event.target.className = "form--highlight";
};
const blurHandler = (event) => {
  event.target.className = "";
};

nameInput.addEventListener("focus", focusHandler);
nameInput.addEventListener("blur", blurHandler);

messageTextArea.addEventListener("focus", focusHandler);
messageTextArea.addEventListener("blur", blurHandler);

const renderInput = (userInput, commentMessage) => {
  const commentMessageU = document.createElement("p");
  commentMessageU.classList.add("comment__message-user");
  commentMessageU.innerText = userInput.name;

  const commentMessageD = document.createElement("p");
  commentMessageD.classList.add("comment__message-date");
  const now = userInput.timestamp;
  const today = new Date(now);
  

  commentMessageD.innerText = getDate(today);

  const commentMessageC = document.createElement("p");
  commentMessageC.classList.add("comment__message-content");
  commentMessageC.innerText = userInput.comment;

  commentMessage.appendChild(commentMessageU);
  commentMessage.appendChild(commentMessageD);
  commentMessage.appendChild(commentMessageC);
};

const renderSection = (input, comment) => {
  const commentSection = document.createElement("article");
  commentSection.classList.add("comment__section");
  comment.appendChild(commentSection);

  const commentMessageWraper = document.createElement("div");
  commentMessageWraper.classList.add("comment__message-wraper");
  commentSection.appendChild(commentMessageWraper);

  const commentMessageImage = document.createElement("div");
  commentMessageImage.classList.add("comment__message-image");
  commentMessageWraper.appendChild(commentMessageImage);

  const commentMessage = document.createElement("section");
  commentMessage.classList.add("comment__message");
  commentSection.appendChild(commentMessage);

  renderInput(input, commentMessage);
  const createHr = document.createElement("hr");
  createHr.classList.add("form__hr");
  comment.appendChild(createHr);
};

const displayComment = (userInput) => {
  const comment = document.querySelector(".comment");
  comment.innerHTML = " ";

  userInput.forEach((input) => {
    renderSection(input, comment);
  });
};


const form = document.querySelector(".form__form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const nameVal = event.target.userName.value;
  const commentVal = event.target.textArea.value;
  const commentDate = getDate();

  if (nameVal !== "" && commentVal !== "") {
    userInput.unshift({
      name: nameVal,
      date: commentDate,
      content: commentVal,
    });
    displayComment();
    event.target.reset();
  } else {
    alert("Please type both Inputs");
  }
});




const usersURL =
  "https://project-1-api.herokuapp.com/comments?api_key={{SPRINT3__KEY}}";

const axiosCall = axios.get(usersURL);
axiosCall.then((resolve)=>{
          displayComment(resolve.data);
         })
         .catch((err)=>{
          console.log(err.err)
         })