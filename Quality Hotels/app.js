try {
  const hotel = document.getElementsByClassName('hotel-choice');
  const hotelImage = document.getElementsByClassName('hotel-image');
  const hotelName = document.getElementsByClassName('hotel-name');
  const hotelCity = document.getElementsByClassName('hotel-city');
  const hotelPrice = document.getElementsByClassName('hotel-price');
  const hotelInfo = document.getElementsByClassName('hotel-info');
  const input = document.getElementById('city-input');
  const form = document.getElementById('form');
  const button = document.getElementsByClassName('book-button');
  const ascending = document.getElementById('ascending');
  const descending = document.getElementById('descending');
  const hotelData = [
    {name:'The Edwardian',city:'london',locations:['united kingdom','uk', 'england', 'london'],price:187,image:'url("img/hotels/london1.jpg")'},
    {name:'The Piccadilly',city:'london',locations:['united kingdom','uk', 'england', 'london'],price:219,image:'url("img/hotels/london2.jpg")'},
    {name:'W London',city:'london',locations:['united kingdom','uk', 'england', 'london'],price:220,image:'url("img/hotels/london3.jpg")'},
    {name:'M by Montcalm',city:'london',locations:['united kingdom','uk', 'england', 'london'],price:219,image:'url("img/hotels/london4.jpg")'},
    {name:'Le Meridien',city:'london',locations:['united kingdom','uk', 'england', 'london'],price:217,image:'url("img/hotels/london5.jpg")'},
    {name:'Grand Hotel Palace',city:'rome',locations:['italy','rome'],price:207,image:'url("img/hotels/rome1.jpg")'},
    {name:'Ambasciatori Palace',city:'rome',locations:['italy','rome'],price:190,image:'url("img/hotels/rome2.jpg")'},
    {name:'Hotel d’Inghilterra',city:'rome',locations:['italy','rome'],price:241,image:'url("img/hotels/rome3.jpg")'},
    {name:'Rome Cavalieri',city:'rome',locations:['italy','rome'],price:218,image:'url("img/hotels/rome4.jpg")'},
    {name:'Hotel Majestic',city:'rome',locations:['italy','rome'],price:175,image:'url("img/hotels/rome5.jpg")'},
    {name:'Paris Le Grand',city:'paris',locations:['france','paris'],price:263,image:'url("img/hotels/paris1.jpg")'},
    {name:'Du Collectionneur',city:'paris',locations:['france','paris'],price:275,image:'url("img/hotels/paris2.jpg")'},
    {name:'Sofitel Arc',city:'paris',locations:['france','paris'],price:243,image:'url("img/hotels/paris3.jpg")'},
    {name:'Banke Hôtel',city:'paris',locations:['france','paris'],price:149,image:'url("img/hotels/paris4.jpg")'},
    {name:'Le Codet',city:'paris',locations:['france','paris'],price:291,image:'url("img/hotels/paris5.jpg")'},
    {name:'Ohla Barcelona',city:'barcelona',locations:['spain','barcelona'],price:249,image:'url("img/hotels/barcelona1.jpg")'},
    {name:'Grand Marina Hotel',city:'barcelona',locations:['spain','barcelona'],price:183,image:'url("img/hotels/barcelona2.jpg")'},
    {name:'The One Barcelona',city:'barcelona',locations:['spain','barcelona'],price:273,image:'url("img/hotels/barcelona3.jpg")'},
    {name:'Ohla Eixample',city:'barcelona',locations:['spain','barcelona'],price:249,image:'url("img/hotels/barcelona4.jpg")'},
    {name:'Hotel Arts',city:'barcelona',locations:['spain','barcelona'],price:390,image:'url("img/hotels/barcelona5.jpg")'}
  ];

  for (let i = 0; i < hotel.length; i++) {
    hotelName[i].textContent = hotelData[i].name;
    hotelName[i].setAttribute('data-hotelData', hotelData[i].locations);
    hotelCity[i].textContent = hotelData[i].city;
    hotelImage[i].style.backgroundImage = hotelData[i].image;
    hotelPrice[i].textContent = "FROM: £" + hotelData[i].price;
    hotelInfo[i].textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    hotel[i].style.order = Math.floor(Math.random() * 1000) + 1;
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    // fix data search to include,and search for, full strings as opposed to characters. Use .split() method to split string by commas.
    let text = input.value.toLowerCase();
    let searchSuccessful = false;
      for (let i = 0; i < hotelName.length; i++) {
        let data = hotelName[i].getAttribute('data-hotelData').split(',');
        if (data.includes(text) || text === '') {
          hotel[i].style.display = '';
          searchSuccessful = true;
        } else {
          hotel[i].style.display = 'none'
        }
      }
      if (searchSuccessful === false) {
        basicModal.show({
          body: '<p>Unfortunately, we only have hotels in London, Paris, Rome, and Barcelona. Please search for one of these cities.</p>',
          buttons: {
            action: {
              title: 'OK',
              fn: basicModal.close
            }
          }
        })
        for (let i = 0; i < hotelName.length; i++) {
          hotel[i].style.display = '';
        }
      }
    input.value = '';
    document.getElementById("sort-div").scrollIntoView();
    // window.scrollTo(0,570);
  });

  ascending.addEventListener('click', (e) => {
    for (let i = 0; i < hotel.length; i++) {
      hotel[i].style.order = hotelData[i].price;
    }
  });

  descending.addEventListener('click', (e) => {
    for (let i = 0; i < hotel.length; i++) {
      hotel[i].style.order = hotelData[i].price*-1;
    }
  });

  for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', (e) => {
      basicModal.show({
        body: '<p>Unfortunately, and surprisingly, booking is unavailable at this time. Please write your order on a piece of paper and throw it in the bin :)</p>',
        buttons: {
          action: {
            title: 'Done!',
            fn: basicModal.close
          }
        }
      })
    });
  };
}
catch (err) {
  basicModal.show({
    body: '<p>There was an error: '+ err +'</p>',
    buttons: {
      action: {
        title: 'Done!',
        fn: basicModal.close
      }
    }
  })
}
