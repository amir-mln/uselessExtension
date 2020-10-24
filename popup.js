const popupButton = document.getElementById("popupButton");
const popupButton2 = document.getElementById("popupButton2");
let isEnabled = false; //disabled by default

chrome.storage.local.get("enabled", (data) => {
  isEnabled = !!data.enabled;
  popupButton.textContent = isEnabled ? "Disable" : "Enable";
});

popupButton.addEventListener("click", () => {
  isEnabled = !isEnabled;
  popupButton.textContent = isEnabled ? "Disable" : "Enable";
  chrome.storage.local.set({ enabled: isEnabled });
});
