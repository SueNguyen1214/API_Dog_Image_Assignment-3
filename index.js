//This function is to retrieve the image from Dog API
function retrieveImage(chosenBreed){
    fetch(`https://dog.ceo/api/breed/${chosenBreed}/images/random`)
      .then(response => response.json())
      .then(responseJson => displayImages(responseJson))
      .catch(error => alert ('Something went wrong.Please try again later.'));
}

// This function is to display the retrieve image(s)
function displayImages(responseJson){
  let chosenBreed=$(`input[type="text"]`).val();
  console.log(responseJson);
  $('.results').html('');
  if (responseJson.status==="success"){
    $('.results').append(
      `<h2>Here is your image</h2>
      <img src="${responseJson.message}" class="results-img"><br>`)    
    } else{
      $('.results').append(
      `<h2>${chosenBreed} breed is not available</h2>`) 
    }
    $('.results').removeClass('hidden');
}
//This function reponses to the event of users click on the retrieve button
function watchForm(){
    $('form').submit(event =>{
        event.preventDefault();
        let chosenBreed=$(`input[type="text"]`).val().toLowerCase();
        console.log(chosenBreed);
        retrieveImage(chosenBreed);
    })
}
//This function  is to console log the link retrieved from Dog API
$(function(){
    console.log('App loaded! Waiting for submit!');    
    watchForm();
});