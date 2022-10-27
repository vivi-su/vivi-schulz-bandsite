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
const render = (data) => {
  console.log(data);
  const comment = document.querySelector(".comment");
  comment.innerHTML = " ";

  data.forEach((key) => {
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

    const createHr = document.createElement("hr");
    createHr.classList.add("form__hr");
    comment.appendChild(createHr);
    console.log(`call me babay1`);
  });
};

//render-------------------
const render2 = (data) => {
  console.log(`data2`,data);
  console.log(Object.values(data));
  const comment = document.querySelector(".comment");
  comment.innerHTML = " ";

  const arr=[];
  arr.push(data);
  console.log(arr);
  arr.forEach(() => {
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

    const commentMessageU = document.createElement("p");
    commentMessageU.classList.add("comment__message-user");
    commentMessageU.innerText = data.name;

    const commentMessageD = document.createElement("p");
    commentMessageD.classList.add("comment__message-date");
     const today = new Date();

     commentMessageD.innerText = getDate(today);

    const commentMessageC = document.createElement("p");
    commentMessageC.classList.add("comment__message-content");
    commentMessageC.innerText = data.comment;

    commentMessage.appendChild(commentMessageU);
    commentMessage.appendChild(commentMessageD);
    commentMessage.appendChild(commentMessageC);

    const createHr = document.createElement("hr");
    createHr.classList.add("form__hr");
    comment.appendChild(createHr);
    console.log(`call me babay2`);
  });
};

//form event listener
const form = document.querySelector(".form__form");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nameVal = event.target.userName.value;
  const commentVal = event.target.textArea.value;
  // const commentDate = getDate();
  const postUrl = "https://project-1-api.herokuapp.com/comments?api_key={{SPRINT3__KEY}}";

  const commentInput = {
    name: nameVal,
    comment: commentVal
  };
  console.log(commentInput);

  if (nameVal !== "" && commentVal !== "") {
    // Postman Post
    axios
      .post(postUrl, commentInput)
      .then((response) => {
        console.log('data2 origin',response);
        return response.data;
      })
      .then((response)=>{
        render2(response);
        return response;
      })
      .then(()=>{
        call();
         
      })
      .catch((err) => {
        console.log(err);
      })
  event.target.reset();

  } else {
    alert("Please type your name and comments.");
  }

});

//Postman Get
const call = ()=>{
axios
  .get("https://project-1-api.herokuapp.com/comments?api_key={{SPRINT3__KEY}}")
  .then(response =>response.data)
  .then(render)
  .catch((err) => {
    console.log(err.err);
  })
}

call();

