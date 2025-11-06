const presencePopup = document.getElementsByClassName(
  "PresencePopup popup popup-select arrow up"
)[0];
const availabilityButton = document.getElementsByClassName(
  "Me-availabilityText Me-availabilityTextAnchor"
)[0];

let isVisible = false;
let isOpening = false;

function togglePresencePopup() {
  isVisible = !isVisible;
  if (isVisible) {
    presencePopup.style.display = "block";

    availabilityButton.blur();

    isOpening = true;

    setTimeout(() => {
      isOpening = false;
    }, 0);
  } else {
    presencePopup.style.display = "none";
  }
}

availabilityButton.addEventListener("click", (event) => {
  togglePresencePopup();
});

document.addEventListener("click", (event) => {
  if (
    isVisible &&
    !isOpening &&
    !presencePopup.contains(event.target) &&
    !availabilityButton.contains(event.target)
  ) {
    togglePresencePopup();
  }
});

const editMoodContainer = document.getElementsByClassName(
  "Me-moodMessage-editMoodContainer"
)[0];
const moodMessage = document.getElementById("moodMessage");

const saveMoodEdit = document.getElementsByClassName(
  "Me-moodMessage-editMoodContainer--button iconfont ok"
)[0];
const cancelMoodEdit = document.getElementsByClassName(
  "Me-moodMessage-editMoodContainer--button iconfont cancel"
)[0];

const buttonEditMood = document.getElementsByClassName(
  "Me-moodMessage-editButton iconfont edit"
)[0];

let isEditMood = false;

cancelMoodEdit.addEventListener("click", (event) => {
  toggleEditMoodContainer();
});

buttonEditMood.addEventListener("click", (event) => {
  toggleEditMoodContainer();
});

function toggleEditMoodContainer() {
  isEditMood = !isEditMood;
  if (isEditMood) {
    editMoodContainer.style.display = "flex";
    moodMessage.className = "hide";
  } else {
    editMoodContainer.style.display = "none";
    moodMessage.className = "";
  }
}

const avatarPresenceIndicator = document.getElementById(
  "avatarPresenceIndicator"
);
const userStatusIndicator =
  document.getElementsByClassName("Me-availability")[0];
const availabilityText = document.getElementById("availabilityText");

const setPresenceOnline = document.getElementById("setPresenceOnline");
const setPresenceAway = document.getElementById("setPresenceAway");
const setPresenceDND = document.getElementById("setPresenceDND");
const setPresenceInvisible = document.getElementById("setPresenceInvisible");

setPresenceOnline.addEventListener("click", (event) => {
  avatarPresenceIndicator.className =
    "Avatar Avatar--size260 Avatar--presence Avatar--online";
  userStatusIndicator.innerHTML = "Online";
  availabilityText.innerHTML = "Online";
  togglePresencePopup();
});

setPresenceAway.addEventListener("click", (event) => {
  avatarPresenceIndicator.className =
    "Avatar Avatar--size260 Avatar--presence Avatar--idle";
  userStatusIndicator.innerHTML = "Away";
  availabilityText.innerHTML = "Away";
  togglePresencePopup();
});

setPresenceDND.addEventListener("click", (event) => {
  avatarPresenceIndicator.className =
    "Avatar Avatar--size260 Avatar--presence Avatar--donotdisturb";
  userStatusIndicator.innerHTML = "Do not disturb";
  availabilityText.innerHTML = "Do not disturb";
  togglePresencePopup();
});

setPresenceInvisible.addEventListener("click", (event) => {
  avatarPresenceIndicator.className =
    "Avatar Avatar--size260 Avatar--presence Avatar--offline";
  userStatusIndicator.innerHTML = "Invisible";
  availabilityText.innerHTML = "Invisible";
  togglePresencePopup();
});

const activityMessage = document.getElementsByClassName(
  "Me-moodMessage-moodMessage"
)[0];
const changeActivityMessage = document.getElementsByClassName(
  "Me-moodMessage-editMoodContainer--input"
)[0];

let activityMessageText = "Change activity message";

saveMoodEdit.addEventListener("click", (event) => {
  if (changeActivityMessage.value != "") {
    activityMessageText = changeActivityMessage.value;
    changeActivityMessage.placeholder = activityMessageText;
    activityMessage.innerHTML = activityMessageText;
    toggleEditMoodContainer();
  } else {
    activityMessageText = "";
    changeActivityMessage.placeholder = "Change activity message";
    activityMessage.innerHTML = "Change activity message";
    toggleEditMoodContainer();
  }
});

changeActivityMessage.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    saveMoodEdit.click();
  }
});

changeActivityMessage.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    cancelMoodEdit.click();
  }
});