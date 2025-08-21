let submitBtn = document.getElementById("submit");

submitBtn.onclick = function () {
  let username = document.getElementById("nom-prenom").value;
  if (username === "") {
    document.getElementById(
      "submit-message"
    ).textContent = `Veuillez remplir le formulaire!`;
  } else {
    username = username.trim();
    console.log(username);
    username = username.slice(username.indexOf(" "), username.length);
    console.log(username);
    document.getElementById(
      "submit-message"
    ).textContent = `Vos informations ont été soumises, nous vous contacterons bientôt, ${username}! `;
  }
};
