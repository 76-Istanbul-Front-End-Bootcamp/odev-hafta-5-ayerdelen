import data from "./data.js"
import {createTableElements} from "./main.js";

/*
  ALWAYS USE IMPORTED data ARRAY TO MAKE MANIPULATIONS

  ID for allcities table is #allcities
  ID for singlecity table is #singlecity
/*

/*
* PASS ARRAY TO createTableElements function to fill tables
* first argument - data
* second argument - tableId
* Example createTableElements([{name: "Istanbul"}], "allcities");
*/

/*
    ids for buttons and select

    Population - bigger than 500.000 => #populationBigger
    land area - less than "1000 => #landAreaLess
    Does any city has population less than 100.000? => #isPopulationLess
    Does every city has land area bigger than 100? => #isLandBigger
    city select => #selectcity
*/

/* RESET ACTION */
document.querySelector("#reset").addEventListener("click", () => {
    createTableElements(data, "allcities");
    createTableElements([], "singlecity")
});

 
/* START CODING HERE */

document.querySelector("#populationBigger").addEventListener("click", () => {
  let popBigger = data.filter(elements => elements.population > 500000)
   createTableElements(popBigger,"allcities");
})

document.querySelector("#landAreaLess").addEventListener("click",()=> {
  let lessThan = data.filter(elements => elements.landArea < 1000)
   createTableElements(lessThan,"allcities");
})

document.querySelector("#isPopulationLess").addEventListener("click",() => {
  let populationSome = data.some(elements => elements.population < 100000)
  if(populationSome){
    alert("YES")
  }
  else {
    alert ("NO")
  }
})

document.querySelector("#isLandBigger").addEventListener("click",()=> {
  let landEvery = data.every(elements => elements.landArea > 100)
  if(landEvery){
    alert("YES")
  }
  else{
    alert("NO")
  }
})

const dataCities = data.map(cities => cities.name);
  const citySelect =document.querySelector("#inputGroupSelect01")
  for(let i = 0; i<=citySelect.length; i++){
  let beforeOptions = document.querySelector("option[value]")
citySelect.removeChild(beforeOptions)
  }
    
dataCities.forEach((element) => {
   let cityOption = document.createElement("option");
    cityOption.setAttribute("value", element);
    cityOption.innerHTML= element;
    citySelect.appendChild(cityOption);
    
})

citySelect.addEventListener("change",(event) => {
  let oneName = data.filter(element => event.target.value=== element.name)
  createTableElements(oneName,"singlecity")
})