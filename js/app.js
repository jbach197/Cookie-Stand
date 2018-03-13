//Function to calc random number
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
//Information for Pike location object
var arrayOfRandomCookiesPike = [];
var pike = {
  locationName: 'First and Pike',
  locationHours: ['6am' ,'7am' ,'8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  minCustomers: 23,
  maxCustomers: 65,
  avgCookiePerSale: 6.3,
  //Calc random cookies per hour at location, rounding down if avg sale is not a whole number
randomCookiesPike: function () {
  var arrayOfRandomCookiesPike = [];
  for (i=0; i < this.locationHours.length; i++) {
    var randomCookies = Math.floor(this.cusstomers * this.avgCookiePerSale);
  //Push data into an array.
    arrayOfRandomCookiesPike.push(randomCookies);

    var cookies = arrayOfRandomCookiesPike;
  }
  return [cookies];
 },
//Write the sales data onto the page
  salesPerHourPike: function () {

    var pikeContainer = document.getElementById('pike');
      for(i = 0; i < this.locationHours.length; i++) {

        var pikeElement = document.createElement('li');

        pikeElement.textContent = this.locationHours[i] + ': ' + this.randomCookiesPike[i] + ' cookies';
        pikeContainer.appendChild(pikeElement);
    
  }
}
}
pike.randomCookiesPike();
pike.salesPerHourPike();


//Repeat above steps for SeaTac location
var arrayOfRandomCookiesSeaTac = [];
var seaTac = {
  locationName: 'Seattle-Tacoma International Airport',
  locationHours: ['6am' ,'7am' ,'8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  minCustomers: 3,
  maxCustomers: 24,
  avgCookiePerSale: 1.2,
  randomCookiesSeaTac: function () {
    var arrayOfRandomCookiesseaTac = [];
    for (i=0; i < this.locationHours.length; i++) {
      var randomCookies = Math.floor(this.cusstomers * this.avgCookiePerSale);
      arrayOfRandomCookiesSeaTac.push(randomCookies);

      var cookies = arrayOfRandomCookiesSeaTac;
  }
  return [cookies];
 },
  salesPerHourSeaTac: function () {

    var seaContainer = document.getElementById('sea');
      for(i = 0; i < this.locationHours.length; i++) {

        var seaElement = document.createElement('li');

        seaElement.textContent = this.locationHours[i] + ': ' + this.randomCookiesSeaTac[i] + ' cookies';
        seaContainer.appendChild(seaElement);
    
  }
}
}
seaTac.randomCookiesSeaTac();
seaTac.salesPerHourSeaTac();

