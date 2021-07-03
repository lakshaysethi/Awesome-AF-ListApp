console.log('this line is coming from service worker file')
console.log('this line is coming from service worker file')
console.log('I can now do stuff in the background - this happens in the back ground :)))')
console.log('I can now do stuff in the background - this happens in the back ground :)))')
console.log('I can now do stuff in the background - this happens in the back ground :)))')
console.log('this line is coming from service worker file')

fetch('https://dog.ceo/api/breeds/image/random')
.then((response) => {
    return response.json();
  })
  .then((myJson) => {
    console.log(myJson);
  });

