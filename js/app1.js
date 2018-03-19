'use strict';

//var salesTable = document.getElementById('sales');
allOrders = [];
var orderForm = document.getElementById('orderForm')

//Object Constructor to create instances for orders
function Order(custName, address, city, state, zip, email, qtyTshirt, qtyCutter, qtyCookies, creditCard, expiration){
  this.custName = custName;
  this.address = address;
  this.city = city;
  this.state = state;
  this.zip = zip;
  this.email = email;
  this.tshirts = qtyTshirt;
  this.cutter = qtyCutter;
  this.cookies = qtyCookies;
  this.creditCard = creditCard;
  this.expiration = expiration;
  allOrders.push(this);
}

//Create header row for the table
function makeHeaderRow () {
  var headerTrElement = document.createElement('tr');
  var thElement = document.createElement('th');

  thElement.textContent = 'Orders';
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
