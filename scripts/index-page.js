
const getAvatar = () => {
      const avatarArr = [
        "./assets/avatar/1.png",
        "./assets/avatar/2.png",
        "./assets/avatar/3.png",
        "./assets/avatar/4.png",
        "./assets/avatar/5.png",
        "./assets/avatar/6.png",
        "./assets/avatar/7.png",
      ];
      
      const random = Math.floor(Math.random() * avatarArr.length) + 0;

      return avatarArr[random];
   

}

const getDate = (isToday) => {
  const d = new Date(isToday);
  const year = d.getFullYear();
  const month = (d.getMonth() + 1 < 10 ? "0" : "") + (d.getMonth() + 1);
  const day = (d.getDate() < 10 ? "0" : "") + d.getDate();

  return `${month}/${day}/${year}`;
};

//form focus---------------------
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

//render-------------------
const render = (arr) => {
  const comment = document.querySelector(".comment");
  comment.innerHTML = " ";

  arr.forEach((key) => {
    const commentSection = document.createElement("article");
    commentSection.classList.add("comment__section");
    comment.appendChild(commentSection);

    const commentMessageWraper = document.createElement("div");
    commentMessageWraper.classList.add("comment__message-wraper");
    commentSection.appendChild(commentMessageWraper);

    const commentMessageImage = document.createElement("img");
    commentMessageImage.classList.add("comment__message-image");

    commentMessageImage.src = getAvatar();

    commentMessageWraper.appendChild(commentMessageImage);

    const commentMessage = document.createElement("section");
    commentMessage.classList.add("comment__message");
    commentSection.appendChild(commentMessage);

    const commentMessageU = document.createElement("p");
    commentMessageU.classList.add("comment__message-user");
    commentMessageU.innerText = key.name;

    const commentMessageD = document.createElement("p");
    commentMessageD.classList.add("comment__message-date");
    const now = key.timestamp;
    const today = new Date(now);

    commentMessageD.innerText = getDate(today);

    const commentMessageC = document.createElement("p");
    commentMessageC.classList.add("comment__message-content");
    commentMessageC.innerText = key.comment;

    commentMessage.appendChild(commentMessageU);
    commentMessage.appendChild(commentMessageD);
    commentMessage.appendChild(commentMessageC);
  });
};

//Postman Get----------------------------
let commentArray = [];
axios
  .get("https://project-1-api.herokuapp.com/comments?api_key={{SPRINT3__KEY}}")
  .then((response) => {
    commentArray = response.data.reverse();
    render(commentArray);
  })
  .catch((err) => {
    console.log(err.err);
  });

//form event listener---------------------
const form = document.querySelector(".form__form");
const checkFormClicked = form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nameVal = event.target.userName.value;
  const commentVal = event.target.textArea.value;
  const postUrl =
    "https://project-1-api.herokuapp.com/comments?api_key={{SPRINT3__KEY}}";

  const commentInput = {
    name: nameVal,
    comment: commentVal,
  };
  console.log(commentInput);

  if (nameVal !== "" && commentVal !== "") {
    // Postman Post-----------------
    axios
      .post(postUrl, commentInput)
      .then((response) => {
        commentArray.unshift(response.data);
        render(commentArray);
        console.log(`post array`, commentArray);
      })
      .catch((err) => {
        console.log(err);
      });

    event.target.reset();
  } else {
    alert("Please type your name and comments.");
  }
});
