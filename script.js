//your JS code here. If required.

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

document.getElementById("btn").addEventListener("click", async function () {

  const text = document.getElementById("text").value;
  const delayTime = parseInt(document.getElementById("delay").value);

 
  const outputDiv = document.getElementById("output");
  outputDiv.textContent = "";

  
  await delay(delayTime);

  
  outputDiv.textContent = text;
});
