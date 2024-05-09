const newFooter = document.createElement("footer");
//console.log(footer);
const body = document.querySelector("body");
body.appendChild(newFooter);

const footer = document.querySelector("footer");

const today = new Date();
const thisYear = today.getFullYear();

const copyright = document.createElement("p");

copyright.innerHTML = `<span>Shakera</span> <span>${thisYear} ©</span>`;
footer.appendChild(copyright);

//skills section

const skills = ["JavaScript", "HTML", "CSS", "GitHub"];
const skillsSection = document.getElementById("Skills");
const skillList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement("li");
  skill.innerText = skills[i];
  skillList.appendChild(skill);
}

//const messageForm = document.querySelector("[name='leave_message']");
//console.log(messageForm);

// Select the form element by name attribute
const messageForm = document.querySelector('form[name="leave_message"]');

// Add event listener to the form for the "submit" event
messageForm.addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Retrieve the values of the form fields
    const usersName = event.target.usersName.value;
    const usersEmail = event.target.usersEmail.value;
    const usersMessage = event.target.usersMessage.value;

    // Log the values to the console
    console.log(usersName, usersEmail, usersMessage);

    // Inside the event listener callback function
// Select the message section by id
const messageSection = document.querySelector('#messages');

// Query the message section to find the <ul> element
const messageList = messageSection.querySelector('ul');

// Create a new list item element
const newMessage = document.createElement('li');

// Set the inner HTML of the newMessage element
newMessage.innerHTML = `
    <a href="mailto:${usersEmail}">${usersName}</a>: 
    <span>${usersMessage}</span>
`;

// Create a new button element for removing messages
const removeButton = document.createElement('button');
removeButton.innerText = 'remove';
removeButton.setAttribute('type', 'button');

// Add event listener to the removeButton
removeButton.addEventListener('click', () => {
    // Find the parent element of the button (which is the <li> element)
    const entry = removeButton.parentNode;
    // Remove the entry from the DOM
    entry.remove();
});

// Append the removeButton to the newMessage
newMessage.appendChild(removeButton);

// Append the newMessage to the messageList
messageList.appendChild(newMessage);


    // Clear the form fields
    event.target.reset();
});

