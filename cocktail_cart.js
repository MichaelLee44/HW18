/*
  Michael Kellems

*/

/** @format */

 // import {animals} from "animal_info.js";

 //I decided to make a global string literal that contains the information desired to display at default

function hideCalories(){
  calories = $(".calories")
  calories.css("opacity", "0");
  return;
}

const defaultDesciption = (index) =>
{
  return `${cocktails[index].Name}`
}

 const showCalories = (index) => {
  calories.text = cocktails[index] 
 }

  const readyBox = (index) => {
    $(".description").eq(index).html(defaultDesciption(index));
  };
  
  const showInformation = () => {
    sleigh = $(".sleigh");
    sleigh.animate({left: "90%", top: "-160%"}, 3000)
    setUpBoxes();
    // Display the feed times for each dog
    // using the JSON data, with function establishFeedTimes
    jQuery.each($(".box"), readyBox);
  
    // Add an event handler for when the element of
    // class box gets a click event,anonymous function here
  
    // Add an event handler for when the element
    // of class box gets a mouseover event
    $(".box").on("mouseover", function () {
      let index = $(".box").index(this);

      $(".box").on("click", function () {
        let calories = $(".calories");
        calories.text(`Calories: ${cocktails[index].calories}`);
        calories.css("opacity", 1);
      });
  
      $(this)
        .find("p.description")
        .html(
          `<ul>
            Ingredients: <br> </br>
            ${cocktails[index].Ingredients.join("</li><li>")}
          </ul>

          <ol>
            Steps: <br> </br>
            ${cocktails[index].Steps.join("</li><li>")}
          </ol>
          `
        );
    });
  
    // Add an event handler for when the
    // element of class box gets a mouseout event
    $(".box").on("mouseout", function () {
      let index = $(".box").index(this);
      $(this).find("p.description").html(defaultDesciption(index));
    });

  };
  
const setUpBoxes = ()=> {
    let wrapperRef = $('.wrapper');
    wrapperRef.append(`<button class = "calories" onclick = "hideCalories()"></button>`);
    cocktails.forEach((cocktail)=>{
        let boxMarkup= ` <div class="box">
        <img class="cocktailimg" src="./images/${cocktail.img}.png"/>
        <p class="description"></p>
      </div>`;
      wrapperRef.append(boxMarkup);
    },);
}

$(document).ready(showInformation);
  