function funcPrompt() {
  var answer = prompt("Are you a photographer?", "Yes/No");
  if (answer === null || answer === "") {
    alert("Please enter an answer.");
    funcPrompt();
    return;
  }
  answer = answer.toLowerCase();
  if (answer == "yes") {
    alert(
      "Excellent! See our links above and below to see more work and find contact info!"
    );
  } else if (answer == "no") {
    alert("That is okay! See our links above and below to learn more!");
  } else {
    alert("Sorry, that answer is not an option");
    funcPrompt();
  }
}
console.log(funcPrompt());
