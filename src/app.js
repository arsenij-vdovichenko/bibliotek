import { success } from '@pnotify/core';
import Chart from 'chart.js';
import Chart from 'chart.js/auto';
const graphRef = document.querySelector(".graphic")
const data = {

labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],


datasets: [{

label: 'Temperature',

data: [13, 15, 17, 18, 20, 12, 30],

fill: false,

// borderColor: 'rgb(75, 192, 192)',
 backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)',
      'rgb(0,255,0)',
      'rgb(255,100,100)'
    ],

tension: 0.1

}]

};

const config = {

type: 'line',

data: data,

options: {}

};
// const config = {
//   type: 'bar',
//   data: data,
//   options: {
//     scales: {
//       y: {
//         beginAtZero: true
//       }
//     }
//   },
// };
// const config = {
//   type: 'doughnut',
//   data: data,
// };
// const config = {
//   type: 'polarArea',
//   data: data,
//   options: {}
// };






const chartData = {
  labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"],
  datasets: [
    {
      label: "Продажі за останній місяць",
      data: [150, 220, 180, 200, 250, 300, 280, 350, 400, 380, 420, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1300, 1350],
      backgroundColor: "#2196f3",
      borderColor: "#2196f3",
      borderWidth: 1,
    },
  ],
};
// const config = {
//   type: 'line',
//   data: chartData,
// };







new Chart(graphRef, config)






// import { success } from '@pnotify/core';
// import * as basicLightbox from 'basiclightbox'
// import 'basiclightbox/dist/basicLightbox.min.css';
// const btnRef = document.querySelector(".btn")
// const instance = basicLightbox.create(`
//         <div class="modal">
//             <button type="button" class="modal-close" data-modal-close><svg class="modal-buttonsvg">
//                 <use href="./pages/symbol-defs.svg#icon-close"></use>
//             </svg></button>
//             <form>
//                 <h2 class="modal-title">Залиште свої дані, ми вам передзвонимо</h2>
//                 <label class="modal-label">Ім'я
//                     <div class="modal-wrap">
//                     <input type="text" class="modal-input" required>
//                     <svg class="modal-svg">
//                         <use href="./pages/symbol-defs.svg#icon-person"></use>
//                     </svg>
//                 </div>
//                 </label>
//                 <label class="modal-label">Телефон
//                     <div class="modal-wrap">
//                     <input type="text" class="modal-input" required>
//                     <svg class="modal-svg">
//                         <use href="./pages/symbol-defs.svg#icon-phone"></use>
//                     </svg>
//                 </div>
//                 </label>
//                 <label class="modal-label">Пошта
//                     <div class="modal-wrap">
//                     <input type="text" class="modal-input" required>
//                     <svg class="modal-svg">
//                         <use href="./pages/symbol-defs.svg#icon-email2"></use>
//                     </svg>
//                 </div>
//                 </label>
//                 <label class="modal-label">Коментар
//                     <textarea name="" class="modal-coment"  placeholder="Введіть текст"></textarea>
//                 </label>
//                 <label class="modal-check">
//                     <br><input type="checkbox" class="modal-checkbox" required>
//                     <span class="checkbox-span">Погоджуюся з розсилкою та приймаю</span> <a href="#" class="modal-link">Умови договору</a>
//                 </label>
//                 <button type="submit" class="modal-button">Відправити</button>
//             </form>
//         </div>
// `)

btnRef.addEventListener("click", ()=>{
    instance.show()
})


window.addEventListener("keydown", ()=>{
    instance.close()
})

// Напиши гру "Натисни правильну клавішу", використовуючи події keydown та keypress.
// Створити елементи для відображення повідомлення про стан гри та поточної клавіші, яку потрібно натиснути.
// Створити масив keys, що містить десять можливих клавіш, які можуть бути натиснуті.
// Створити змінну currentKeyIndex, що зберігає індекс поточної клавіші, яку потрібно натиснути.
// Встановити текст елементу з id="key" на поточну клавішу, яку потрібно натиснути.
// Створити обробник події keydown, що перевіряє, чи була натиснута правильна клавіша. Якщо була натиснута правильна клавіша, то збільшити currentKeyIndex на 1, встановити нову поточну клавішу та оновити текст елементу з id="key". Вивести повідомлення про помилку використовуючи бібліотеку pnotifyю
// Якщо була натиснута неправильна клавіша, то повідомити користувача про помилку, використовуючи бібліотеку pnotify
// Створити обробник події keypress, що запобігає дії за замовчуванням для уникнення несподіваного поведінки сторінки під час гри.
// Додати кнопку "Нова гра", що оновлює гру з новим поточним ключем та повідомленням, використовуючи бібліотеку pnotify


const divRef = document.querySelector(".game")
const keys = ["a",
    "d",
    "s",
    "f",
    "g",
    "h",
    "j",
    "k",
    "o",
    "l",
    "m",
    "n",
    "b",
    "v",
    "c",
    "z",]
let currentkeyIndex = Math.floor((Math.random() * (keys.length -1 - 1) +1)) 
divRef.textContent = keys[currentkeyIndex]

window.addEventListener("keydown", (event)=>{
    if(event.key === divRef.textContent) {
        success({
            title: "Succces",
            text: "правильно"
        })
    currentkeyIndex = Math.floor((Math.random() * (keys.length -1 - 1) +1)) 
    divRef.textContent=  keys[currentkeyIndex]

     } else({
        title: "no",
        text: "неправильно",
        delay: 400
    })
    
    
})
