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
