// styles du bouton et du lien de connexion au survol de la souris
const signIn = document.querySelector(".signin");

signIn.addEventListener("mouseover", () => {
  signIn.style.backgroundColor = "white";
  signIn.style.color = "black";
  signIn.style.transition = "all 0.5s";
});

signIn.addEventListener("mouseleave", () => {
  signIn.style.backgroundColor = "#4C5FD5";
  signIn.style.color = "white";
});

// styles des liens en CSS au survol de la souris

const links = document.querySelectorAll(".link");

links.forEach((link) => {
  const underStyle = link.style.textDecoration;

  link.addEventListener("mouseover", () => {
    link.style.textDecoration = "underline";
  });

  link.addEventListener("mouseleave", () => {
    link.style.textDecoration = underStyle;
  });
});
