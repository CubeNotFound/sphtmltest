const presencePopup = document.getElementsByClassName(
  "PresencePopup popup popup-select arrow up"
)[0];
const presenceStatus = document.getElementsByClassName("Me-presenceStatus")[0];

let isVisible = false;
let isOpening = false;

function togglePresencePopup() {
  isVisible = !isVisible;
  if (isVisible) {
    presencePopup.style.display = "block";

    presenceStatus.blur();

    isOpening = true;

    setTimeout(() => {
      isOpening = false;
    }, 0);
  } else {
    presencePopup.style.display = "none";
  }
}

presenceStatus.addEventListener("click", (event) => {
  togglePresencePopup();
});

document.addEventListener("click", (event) => {
  if (
    isVisible &&
    !isOpening &&
    !presencePopup.contains(event.target) &&
    !presenceStatus.contains(event.target)
  ) {
    togglePresencePopup();
  }
});

const avatarPresenceIndicator = document.getElementById(
  "avatarPresenceIndicator"
);
const userStatusIndicator =
  document.getElementsByClassName("Me-moodMessage")[0];

const setPresenceOnline = document.getElementsByClassName(
  "PresencePopup-status popup-select-option PresencePopup-status--online"
)[0];
const setPresenceAway = document.getElementsByClassName(
  "PresencePopup-status popup-select-option PresencePopup-status--idle"
)[0];
const setPresenceDND = document.getElementsByClassName(
  "PresencePopup-status popup-select-option PresencePopup-status--dnd"
)[0];
const setPresenceInvisible = document.getElementsByClassName(
  "PresencePopup-status popup-select-option PresencePopup-status--hidden"
)[0];

setPresenceOnline.addEventListener("click", (event) => {
  avatarPresenceIndicator.className =
    "Avatar Avatar--size40 Avatar--presence Avatar--online";
  userStatusIndicator.innerHTML = "Online";
  togglePresencePopup();
});

setPresenceAway.addEventListener("click", (event) => {
  avatarPresenceIndicator.className =
    "Avatar Avatar--size40 Avatar--presence Avatar--idle";
  userStatusIndicator.innerHTML = "Away";
  togglePresencePopup();
});

setPresenceDND.addEventListener("click", (event) => {
  avatarPresenceIndicator.className =
    "Avatar Avatar--size40 Avatar--presence Avatar--donotdisturb";
  userStatusIndicator.innerHTML = "Do not disturb";
  togglePresencePopup();
});

setPresenceInvisible.addEventListener("click", (event) => {
  avatarPresenceIndicator.className =
    "Avatar Avatar--size40 Avatar--presence Avatar--offline";
  userStatusIndicator.innerHTML = "Invisible";
  togglePresencePopup();
});
