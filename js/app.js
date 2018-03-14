'use strict';

//Declare global variables
var allLocations = [];
var locationHoursArray = ['6:00am' ,'7:00am' ,'8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'];

//Function for random number calc used in the object prototype.
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

//Object Constructor
function Location(locationName, minCustomers, maxCustomers, cookiePerSale, sales){
  this.locationName = locationName;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookiePerSale = cookiePerSale;
  this.cookieSales = sales
  allLocations.push(this);
};

//Function to calc the sales per location
/*Location.prototype.cookieSales = function () {
  var salesArray = [];
  for(var i = 0; i <= locationHoursArray.length; i++) {
    var sales = Math.floor(randomNumber(this.minCustomers, this.maxCustomers) * this.avgCookiePerSale);

    return salesArray;
    salesArray.push(sales);
    }
  };
*/
//Populate location data
var pike = new Location('First and Pike', 23, 65, 6.3, [5, 10, 15, 20, 25]);
var seaTac = new Location('SeaTac Airport', 3, 24, 1.2, [1, 2, 3, 4, 5]);
var seattleCenter = new Location('Seattle Center', 11, 38, 3.7, [2, 4, 6, 8, 10]);
var capitalHill = new Location('Capital Hill', 20, 38, 2.3, [3, 6, 9, 12, 15]);
var alki = new Location('Alki', 2, 16, 4.6, [4, 8, 12, 16, 20]);

console.log(pike.cookieSales);

//Call sales function to populate sales data


//Create table
var salesTable = document.getElementById('sales');

//Create header row
function makeHeaderRow () {
  var headerTrElement = document.createElement('tr');
  var thElement = document.createElement('th');

  thElement.textContent = '';
  headerTrElement.appendChild(thElement);

    for(var i = 0; i <= locationHoursArray.length; i++){
    thElement = document.createElement('th');  
    thElement.textContent = locationHoursArray[i];
    headerTrElement.appendChild(thElement);
    }
    thElement.textContent = 'Daily Location Total';
    headerTrElement.appendChild(thElement);

    salesTable.appendChild(headerTrElement);
}

makeHeaderRow();

//Enter location sales data
Location.prototype.render = function () {
  var trElement = document.createElement('tr');
  var tdElement = document.createElement('td');

  tdElement.textContent = this.locationName;
  trElement.appendChild(tdElement);
  
  for(var i = 0; i <= locationHoursArray.length; i++){
    tdElement = document.createElement('td');
    tdElement.textContent = this.cookieSales[i];
    trElement.appendChild(tdElement);
}
   salesTable.appendChild(trElement);
};

//Call render functions
pike.render();
seaTac.render();
seattleCenter.render();
capitalHill.render();
alki.render();

//Create footer row
function makeFooterRow () {
  var headerTrElement = document.createElement('tr');
  var thElement = document.createElement('th');

  thElement.textContent = 'Totals';
  headerTrElement.appendChild(thElement);
  headerTrElement.appendChild(thElement);

  salesTable.appendChild(headerTrElement);
}
makeFooterRow();
