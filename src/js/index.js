const selectPokedevList = document.querySelectorAll(".pokedev");

selectPokedevList.forEach((pokedev) => {
  pokedev.addEventListener("click", () => {
    const pokedevCardOpened = document.querySelector(".open");
    pokedevCardOpened.classList.remove("open");

    const pokedevIdSelected = pokedev.attributes.id.value;
    const pokedevIdCardForOpen = pokedevIdSelected + "-card";

    const pokedevCardForOpen = document.getElementById(pokedevIdCardForOpen);

    pokedevCardForOpen.classList.add("open");

    const pokedevActiveInList = document.querySelector(".active");

    pokedevActiveInList.classList.remove("active");

    const pokedevSelectedInList = document.getElementById(pokedevIdSelected);
    pokedevSelectedInList.classList.add("active");
  });
});
