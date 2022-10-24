const nameInput = document.getElementById('userName');
const messageTextArea = document.getElementById('textArea');

const focusHandler = (event) => {
  event.target.className = "form--highlight";
};
const blurHandler = (event) => {
  event.target.className = "";
};

nameInput.addEventListener('focus', focusHandler);
nameInput.addEventListener('blur', blurHandler);

messageTextArea.addEventListener("focus", focusHandler);
messageTextArea.addEventListener("blur", blurHandler);


const renderInput = (userInput,commentMessage) =>{
    
    const commentMessageU = document.createElement('p');
    commentMessageU.classList.add('comment__message-user');
    commentMessageU.innerText = userInput.name;
    
    const commentMessageD = document.createElement('p');
    commentMessageD.classList.add('comment__message-date');
    commentMessageD.innerText = userInput.date;
    
    const commentMessageC = document.createElement('p');
    commentMessageC.classList.add('comment__message-content');
    commentMessageC.innerText = userInput.content;
    
    commentMessage.appendChild(commentMessageU);
    commentMessage.appendChild(commentMessageD);
    commentMessage.appendChild(commentMessageC);
};

const renderSection = (input, comment) =>{

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

}


const displayComment = () => {

const comment = document.querySelector('.comment');
comment.innerHTML = " ";

for (let i = 0; i < userInput.length; i++) {
  renderSection(userInput[i], comment);
}

};



const form = document.querySelector('.form__form');

form.addEventListener('submit', (event)=>{
  event.preventDefault();
  const nameVal = event.target.userName.value;
  const commentVal = event.target.textArea.value;
  const commentDate = getDate();

  if(nameVal !== '' && commentVal !== ''){
    userInput.unshift({
      name: nameVal,
      date: commentDate,
      content: commentVal,
    });
    displayComment();
    event.target.reset();
  }else{
    alert('Please type both Inputs');
  }

});

displayComment();


function getDate(){

  const d = new Date();
  const month = d.getUTCMonth() + 1;
  const day = d.getUTCDate();
  const year = d.getUTCFullYear();

  return month + "/" + day + "/" + year;

}
