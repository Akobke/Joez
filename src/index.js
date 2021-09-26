import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {isWeekend,getDayName} from './dates';


const calendar = document.querySelector("#app-calendar");


for (let day = 1; day <= 31; day++){
  console.log(day)

  const weekend = isWeekend(day);

  let name = "";

  if(day <= 7){
    const dayName = getDayName(day);
    name = `<div class="name">${dayName}</div>`;
  }
  const dayName = getDayName(day);

  calendar.insertAdjacentHTML("beforeend", `<div 
  class="day ${weekend ? "weekend" : ""}"><div class="name">${name}</div>${day}</div>`);
}

document.querySelectorAll("#app-calendar .day").forEach(
  day => {
    day.addEventListener("click", event => {
      event.currentTarget.classList.toggle("selected");
    })
  }
)




ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
