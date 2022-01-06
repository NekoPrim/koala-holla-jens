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
    // call saveKoala with the new object
    saveKoala( koalaToSend );

    // call delete function when clicked
    $(document).on('click', 'deleteBtn', onDelete);
  }); 
}

function getKoalas(){
  console.log( 'in getKoalas' );
  // ajax call to server to get koalas
  
} // end getKoalas

function saveKoala( newKoala ){
  console.log( 'in saveKoala', newKoala );
  // ajax call to server to get koalas

}


// delete function
function onDelete() {
  console.log('in onDelete');

  // capture koala id
  let koalaId = $(this).parents.('tr').data('id');
  console.log('koala id:'koalaId);

  // send koala id to server side
  $.ajax({
    method: 'DELETE',
    url: `/koala/${koalaId}`
  })
    .then((res) => {
      // send success
      console.log('ajax DELETE success!');
    })
    .catch((err) => {
      // send failure
      console.log('ajax DELETE failed!');
    })
}