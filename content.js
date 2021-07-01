const btn = document.createElement("button");
btn.textContent = "Cover Images";
btn.style.backgroundColor = "red";
btn.style.position = "fixed";
btn.style.color = "white";
btn.style.height = "75px";
btn.style.width = "200px";
btn.style.top = "50%";
btn.style.right = 0;
btn.style.transform = "translateY(-50%)";
btn.addEventListener("click", function () {
  let imgs = [...document.body.getElementsByTagName("img")],
    iframes = [...document.getElementsByTagName("iframe")];
  imgs.forEach((img) => {
    img.src =
      "https://secure.gravatar.com/avatar/a4be085553c175067749093777136e61?s=256&d=mm&r=g";
    img.width = "100";
    img.height = "100";
  });
  iframes.forEach((iframe) => iframe.remove());
});
chrome.storage.local.get("enabled", (data) => {
  data.enabled &&
    [...document.body.getElementsByTagName("img")].forEach((img) => {
      img.src =
        "https://secure.gravatar.com/avatar/a4be085553c175067749093777136e61?s=256&d=mm&r=g";
      img.width = "100";
      img.height = "100";
    });
  data.enabled ? document.body.appendChild(btn) : btn.remove();
});
