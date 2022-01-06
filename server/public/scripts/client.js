console.log("js");

$(document).ready(function () {
  console.log("JQ");
  // Establish Click Listeners
  setupClickListeners();
  // load existing koalas on page load
  getKoalas();
}); // end doc ready

function setupClickListeners() {
  $("#addButton").on("click", function () {
    console.log("in addButton on click");
    // get user input and put in an object
    // NOT WORKING YET :(
    // using a test object
    let koalaToSend = {
      name: "testName",
      age: "testName",
      gender: "testName",
      readyForTransfer: "testName",
      notes: "testName",
    };
    // call saveKoala with the new object
    saveKoala(koalaToSend);

    // call delete function when clicked
    $(document).on("click", "deleteBtn", onDelete);
  });

  $(document).on("click", ".updateBtn", onUpdateKoala);
}

function onUpdateKoala() {
  //checking if we are in onUpdateKoala
  console.log("onUpdateKoala");

  let koalaId = $("this").parents("tr").data("id");
  let koalaReady = $("this").parents("tr").data("ready_to_transfer");

  $.ajax({
    method: "PUT",
    url: `/koala/${koalaId}`,
    data: {
      ready_to_transfer: 'Y'
    }
  })
  .then(() => {
    console.log('PUT successful');
  })
  .catch((err) => {
    console.log('PUT failed', err);
    })
};
   

function getKoalas() {
  console.log("in getKoalas");
  // ajax call to server to get koala
  $.ajax({
    type: "GET",
    url: "/koala",
  })
    .then(function (response) {
      console.log("GET /koalas response", response);
      renderKoala(response);
    })
    .catch((err) => {
      console.log("/GET unsuccessful", err);
    });
}

function renderKoala(response) {
  $("#viewKoalas").empty();
  for (let i = 0; i < response.length; i++) {
    $("#viewKoalas").append(`
    <tr data-ready_to_transfer="${response[i].readyForTransfer}"data-id="${response[i].id}">
        <td>${response[i].name}</td>
        <td>${response[i].age}</td>
        <td>${response[i].gender}</td>
        <td>${response[i].readyForTransfer}</td>
        <td>${response[i].notes}</td>
      </tr>
    `);
  }
}

function saveKoala(newKoala) {
  //testing what newKoala is
  console.log("in saveKoala", newKoala);
  // ajax call to server to get koalas

  //new object to store the values
  let koalaObject = {
    name: $("#nameIn").val(),
    age: $("#ageIn").val(),
    gender: $("#genderIn").val(),
    ready_to_transfer: $("#readyForTransferIn").val(),
    notes: $("#notesIn").val(),
  };

  $.ajax({
    type: "POST",
    url: "/koala",
    data: koalaObject,
  }).then(function (response) {
    //clearing out the input fields for future use
    $("#nameIn").val(" "),
      $("#ageIn").val(" "),
      $("genderIn").val(" "),
      $("#readyForTransferIn").val(" "),
      $("#notesIn").val(" ");

    getKoalas();
  });
}

// delete function
function onDelete() {
  console.log("in onDelete");

  // capture koala id
  let koalaId = $(this).parents("tr").data("id");
  console.log("koala id:", koalaId);

  // ajax call to server to send koala id
  $.ajax({
    method: "DELETE",
    url: `/koala/${koalaId}`,
  })
    .then((res) => {
      // send success
      console.log("ajax DELETE success!");
    })
    .catch((err) => {
      // send failure
      console.log("ajax DELETE failed!");
    });
}
// end onDelete
