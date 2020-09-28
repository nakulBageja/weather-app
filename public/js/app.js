const weatherForm = document.querySelector("form");
const messageOne = document.getElementById("message-1");
const messageTwo = document.getElementById("message-2");

weatherForm.addEventListener("submit", event => {
  event.preventDefault();
  messageOne.textContent = "Loading...";
  messageTwo.textContent = "";
  const location = event.target[0].value; //Finding the input value

  //Fetching the forcast by using fetch function provided by NodeJs
  fetch(`/weather?address=${location}`).then(response => {
    response.json().then(data => {
      if (data.error) {
        messageOne.textContent = `${data.error}`;
        console.log(data.error);
      } else {
        messageOne.textContent = `Here is your forcast.`;
        messageTwo.textContent = `Today in ${data.location}, the temperature will be ${data.temperature}*C but it will feel like ${data.feelsLike}*C.`;
        console.log(data);
      }
    });
  });
});
