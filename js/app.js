//function to generate random numbers to be used later.
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

var arrayOfRandomCustomersPike = [];
var arrayOfRandomCookiesPike = [];
var pike = {
  locationName: 'First and Pike',
  locationHours: [6,7,8],
  lessCustomers: 23,
  maxCustomers: 65,
  randomCustomersPike: function () {

    for (i=0; i < this.locationHours.length; i++) {
      var randomCustomersPike = randomNumber(23, 65);
      arrayOfRandomCustomersPike.push(randomCustomersPike);
    }
   return[arrayOfRandomCustomersPike];
},
  randomCookiesPike:  function () {
  for (i=0; i < this.randomCustomersPike.length; i++) {
    var randomCookies = Math.floor((this.randomCustomersPike[i]) * 6.3);
    console.log(randomCookiesPike);
  arrayOfRandomCookiesPike.push(randomCookies);
  }
  return [arrayOfRandomCookiesPike];
 },

  salesPerHour: function () {

    var pikeContainer = document.getElementById('pike');
      for(i = 0; i < this.randomCookiesPike.length; i++) {

        var pikeElement = document.createElement('li');

        pikeElement.textContent = this.locationHours[i] + this.randomCookiesPike[i];
        pikeContainer.appendChild(pikeElement);
    
  }
}
}
pike.randomCustomersPike();
pike.randomCookiesPike();
pike.salesPerHour();




