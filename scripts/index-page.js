console.log("hello");

const userInput = [
  {
    name: "Connor Walton",
    date: "02/17/2021",
    content:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },
  {
    name: "Emilie Beach",
    date: "01/09/2021",
    content:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },
  {
    name: "Miles Acosta",
    date: "12/20/2020",
    content:
      "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
];


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


const render = () => {

const comment = document.querySelector('.comment');
comment.innerHTML = " ";

for (let i = 0; i < userInput.length; i++) {
  renderSection(userInput[i], comment);
}

};


render();
