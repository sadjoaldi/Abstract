// styles des liens en CSS au survol de la souris

const links = document.querySelectorAll(".link");

links.forEach((link) => {
  const underStyle = link.style.textDecoration;

  link.addEventListener("mouseover", () => {
    console.log("Mouse over");
    link.style.textDecoration = "underline";
  });

  link.addEventListener("mouseleave", () => {
    console.log("Mouse leave");
    link.style.textDecoration = underStyle;
  });
});
