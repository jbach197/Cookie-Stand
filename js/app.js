'use strict';

//Declare global variables
var allLocations = [];
var locationHoursArray = ['6am' ,'7am' ,'8am', '9am', '10am', '11am', '12pm', '1pm', '2pm',   '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

//Declare HTML elements for table and form
var salesTable = document.getElementById('sales');
var newLocationForm = document.getElementById('newLocationForm')

//Function for random number calc used in the object prototype.
function randomNumber(min, max) {
 // console.log(min,'fromrandom', max);
  return ((Math.random() * (max - min)) + min);
  
}

//Object Constructor to create instances for locations
function Location(locationName, minCustomers, maxCustomers, cookiePerSale){
  this.locationName = locationName;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookiePerSale = cookiePerSale;
  this.totalByHourArray = [];
  this.counterTotal = 0;
  allLocations.push(this);
}

//Function to calc the sales per location
Location.prototype.cookieSales = function () {
   //console.log(this.minCustomers, this.maxCustomers, this.avgCookiePerSale);
   console.log(randomNumber(this.minCustomers, this.maxCustomers));
  for(var i = 0; i < locationHoursArray.length; i++) {
    
    var sales = Math.floor(randomNumber(this.minCustomers, this.maxCustomers) * this.avgCookiePerSale);
    this.totalByHourArray.push(sales);
    //console.log(sales, this.locationName);

    this.counterTotal += sales;  //counter to keep a running total of sales
  }
}

//Populate location data with constructor
var pike = new Location('First and Pike', 23, 65, 6.3);
var seaTac = new Location('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new Location('Seattle Center', 11, 38, 3.7);
var capitalHill = new Location('Capital Hill', 20, 38, 2.3);
var alki = new Location('Alki', 2, 16, 4.6);

//Calcuate total for each out

/*function totalByHour()  {
  for(var i = 0; i < locationHoursArray.length; i++){
    var counter = 0;
    for(var k= 0; k < allLocations.length; k++) {
        var totalByHour = 0;
        
          totalByHour += locationName.totalByHourArray[k];
        
          consol.log(totalByHour);
    }
  }
}
totalByHour();
*/


//Create header row for the table
function makeHeaderRow () {
  var headerTrElement = document.createElement('tr');
  var thElement = document.createElement('th');

  thElement.textContent = 'Location';
  headerTrElement.appendChild(thElement);

    for(var i = 0; i < locationHoursArray.length; i++){
    thElement = document.createElement('th');  
    thElement.textContent = locationHoursArray[i];
    headerTrElement.appendChild(thElement);
    }
    var totalElement = document.createElement('th');
    totalElement.textContent = 'Daily Location Total';
    headerTrElement.appendChild(totalElement);

    salesTable.appendChild(headerTrElement);
}

//Insert sales data into the table for each location
Location.prototype.render = function () {
  var trElement = document.createElement('tr');
  var tdElement = document.createElement('td');

  tdElement.textContent = this.locationName;
  trElement.appendChild(tdElement);
  
  for(var i = 0; i < locationHoursArray.length; i++){
    tdElement = document.createElement('td');
    tdElement.textContent = this.totalByHourArray[i];
    trElement.appendChild(tdElement);
}
  tdElement = document.createElement('td');
  tdElement.textContent = this.counterTotal;
  trElement.appendChild(tdElement);

   salesTable.appendChild(trElement);
};
//Create table footer
function makeFooterRow () {
  var headerTrElement = document.createElement('tr');
  var thElement = document.createElement('th');

  thElement.textContent = 'Hourly Totals';
  headerTrElement.appendChild(thElement);
  headerTrElement.appendChild(thElement);

  salesTable.appendChild(headerTrElement);
}

//Function to run the cookieSales function for all locations
function cookieSalesAllLocations () {
  for(var i in allLocations)  {
    allLocations[i].cookieSales();
  }
}

//Function to run render function for all locations
function renderAllLocations () {
  for(var i in allLocations)  {
    allLocations[i].render();
  }
}

//Create event to add values user inputs onto form.
function addLocation(event){
  event.preventDefault();
  console.log(event.target.name.value);

  var newName = event.target.name.value;
  var minCust = parseInt(event.target.minCust.value);
  var maxCust = parseInt(event.target.maxCust.value);
  var avgCookie = parseInt(event.target.avgCookie.value);

  new Location(newName, minCust, maxCust, avgCookie);

  salesTable.innerHTML = '';
  makeHeaderRow();
  cookieSalesAllLocations();
  renderAllLocations();
  makeFooterRow();
}

newLocationForm.addEventListener('submit', addLocation);

//Run funcitons to create head/foot and load data
makeHeaderRow();
cookieSalesAllLocations();
renderAllLocations();
makeFooterRow();
