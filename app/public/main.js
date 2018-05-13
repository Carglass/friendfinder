let questions = [];

let Question = function(short, full) {
  this.short = short;
  this.full = full;
};

let q1 = new Question("books", "You love books");

//TODO see if it is worth redoing it smarter..

$(document).ready(() => {
  $(document).on("click", "#submit-survey", event => {
    let answers = [];
    for (let i = 1; i <= 10; i++) {
      let value = $(`#q${i} input:checked`).val();
      answers.push(parseInt(value));
    }
    let friend = {
      name: $("#name").val(),
      scores: answers
    };
    $.post("/api/friends", friend, data => {
      console.log(data.status);
    });
  });
});
