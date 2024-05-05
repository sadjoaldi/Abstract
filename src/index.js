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
