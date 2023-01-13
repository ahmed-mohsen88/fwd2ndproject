const baseUrl = "http://api.openweathermap.org/data/2.5/weather?";
const query = "q=London,uk&";
// Personal API Key for OpenWeatherMap API
// const apiKey = '<your_api_key>&units=${savedVar}';
const apiKey = "APPID=d0908eba7de46c86b9f2703c3c46351e";
const generate = document.getElementById("generate");
const zip = document.getElementById("zip");

generate.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("do");
  postData();
});

const getData = async (url = "http://localhost:5000/get") => {
  const response = await fetch(url);
  try {
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log("error", error);
  }
};

const postData = async (
  url = "http://localhost:5000/post",
  data = {
    temperature: "test",
    date: "web test",
    userResponse: "test",
  }
) => {
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  try {
    const newData = await response.json();
    console.log(newData);
    return newData;
  } catch (error) {
    console.log("error", error);
  }
};
