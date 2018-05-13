let questions = [];

let Question = function(short, full) {
  this.short = short;
  this.full = full;
};

let q1 = new Question("books", "You love books");

//TODO see if it is worth redoing it smarter, generating the html from here, that would allow more flex to the number of questions, possibility to easily retrieve the number of questions etc

$(document).ready(() => {
  $(document).on("click", "#submit-survey", event => {
    //TODO a validation layer could be added to remove the possibility of sending non working information (that could cause server errors)
    let answers = [];
    // loop to fetch the answers and add them into a table
    for (let i = 1; i <= 10; i++) {
      let value = $(`#q${i} input:checked`).val();
      answers.push(parseInt(value));
    }
    // creation of a friend object
    let friend = {
      name: $("#name").val(),
      scores: answers
    };
    // post the newly created friend, the best current match is expected as an answer
    $.post(
      "/api/friends",
      // the newly constructed friend is sent to the server
      friend,
      // get the best match object in return (see apiRoutes.js post(/api/friends))
      BFF => {
        // display the best match name in the modal (that was displayed through bootstrap dork methods)
        $(".modal-body").text(BFF.name);
      }
    );
  });
});
