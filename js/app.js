'use strict';

//Declare global variables
var allLocations = [];
var locationHoursArray = ['6am' ,'7am' ,'8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

//Function for random number calc used in the object prototype.
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

//Object Constructor
function Location(locationName, minCustomers, maxCustomers, cookiePerSale, sales){
  this.locationName = locationName;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookiePerSale = cookiePerSale;
  allLocations.push(this);
}

//Function to calc the sales per location
Location.prototype.cookieSales = function () {
  var cookieSalesArray = [];
  
  for(var i = 0; i < locationHoursArray.length; i++) {
    
    var sales = Math.floor(randomNumber(this.minCustomers, this.maxCustomers) * this.avgCookiePerSale);
    cookieSalesArray.push(sales);

    return cookieSalesArray;
    }
  }

//Populate location data
var pike = new Location('First and Pike', 23, 65, 6.3);
var seaTac = new Location('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new Location('Seattle Center', 11, 38, 3.7);
var capitalHill = new Location('Capital Hill', 20, 38, 2.3);
var alki = new Location('Alki', 2, 16, 4.6);

//Call sales function to populate sales data
pike.cookieSales();
seaTac.cookieSales();
seattleCenter.cookieSales();
capitalHill.cookieSales();
alki.cookieSales();

//Create table
var salesTable = document.getElementById('sales');

//Create header row
function makeHeaderRow () {
  var headerTrElement = document.createElement('tr');
  var thElement = document.createElement('th');

  thElement.textContent = 'Location';
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
  
  for(var i = 0; i < locationHoursArray.length; i++){
    tdElement = document.createElement('td');
    tdElement.textContent = this.cookieSales();
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

  thElement.textContent = 'Hourly Totals';
  headerTrElement.appendChild(thElement);
  headerTrElement.appendChild(thElement);

  salesTable.appendChild(headerTrElement);
}
makeFooterRow();


