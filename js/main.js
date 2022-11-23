// Классная работа. Асинхронность, промисы и HTTP.

// Используя API списка всех стран
// выведите таблицу с информацией о
// всех странах наподобие такой:
// API: https://restcountries.com/v3.1/all

let tbody = document.getElementById("tbody");
let img = document.getElementsByClassName("img");

let data = fetch("https://restcountries.com/v3.1/all");
let arr;
// console.log(data);
data
  .then(info => {
    return info.json();
  })
  .then(info1 => {
    info1.forEach(item => {
      // console.log(item);
      let elem = document.createElement("tr");
      elem.innerHTML = `<td>${item.cca2}</td> 
      <td class="img" style="background:url(${item.flags.svg});"></td> 
      <td>${item.name.official}</td>
      <td>${item.capital}</td>
      <td>${item.population}</td>
      `;
      tbody.append(elem);
      for (let i = 0; i < img.length; i++) {
        img[i].style.backgroundSize = "contain";
        img[i].style.backgroundRepeat = "no-repeat";
        img[i].style.backgroundPosition = "center";
      }
    });
  });
