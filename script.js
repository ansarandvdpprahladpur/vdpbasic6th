const TARGET_URL = "https://2no.co/av6th";
const DELAY = 5;

const goNow = document.getElementById("goNow");
const openLink = document.getElementById("openLink");
const countText = document.getElementById("countText");
const targetHost = document.getElementById("targetHost");

try{
  const url = new URL(TARGET_URL);
  targetHost.textContent = url.hostname;
}catch(e){ targetHost.textContent = TARGET_URL; }

openLink.href = TARGET_URL;
goNow.addEventListener("click", () => { window.location.href = TARGET_URL });

let t = DELAY;
countText.textContent = t;
const timer = setInterval(()=>{
  t--;
  if(t <= 0){
    clearInterval(timer);
    window.location.href = TARGET_URL;
  } else {
    countText.textContent = t;
  }
},1000);
