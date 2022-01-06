console.log( 'js' );

$( document ).ready( function(){
  console.log( 'JQ' );
  // Establish Click Listeners
  setupClickListeners()
  // load existing koalas on page load
  getKoalas();

}); // end doc ready

function setupClickListeners() {
  $( '#addButton' ).on( 'click', function(){
    console.log( 'in addButton on click' );
    // get user input and put in an object
    // NOT WORKING YET :(
    // using a test object
    let koalaToSend = {
      name: 'testName',
      age: 'testName',
      gender: 'testName',
      readyForTransfer: 'testName',
      notes: 'testName',
    };
    // call saveKoala with the new obejct
    saveKoala( koalaToSend );
  }); 
}

function getKoalas(){
  console.log( 'in getKoalas' );
  // ajax call to server to get koala

  
    $("#viewKoalas").empty();
    $.ajax({
        type: 'GET',
        url: '/koala'
    }).then(function(response) {
      console.log('GET /koalas response', response);
      // Appended Table
      for(let i =0; i < response.length; i++) {
        $('#viewKoalas').append(`
        <tr data-ready_to_transfer="${response[i].readyForTransfer}"data-id="${response[i].id}>
            <td>${response[i].name}</td>
            <td>${response[i].age}</td>
            <td>${response[i].gender}</td>
            <td>${response[i].readyForTransfer}</td>
            <td>${response[i].notes}</td>
          </tr>
        `)
      }
    })
} // end getKoalas

function saveKoala( newKoala ){
  console.log( 'in saveKoala', newKoala );
  // ajax call to server to get koalas
 
}
