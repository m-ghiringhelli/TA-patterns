/* eslint-disable indent */
// import functions and grab DOM elements

// initialize global state
import { candies } from './candies-data.js';
import { renderCandy } from './render-candy.js';

const candyList = document.getElementById('candy-list');

function displayCandies() {
  for (let candy of candies) {
    candyList.append(renderCandy(candy));
  }
}

displayCandies();
