document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let captcha = document.getElementById("captcha").value.trim();

  if (captcha !== "9") {
    alert("Veuillez résoudre correctement la question de sécurité !");
    return;
  }

  if (!document.getElementById("consent").checked) {
    alert("Vous devez accepter les conditions avant de soumettre.");
    return;
  }

  alert("Formulaire envoyé avec succès !");
  this.reset();
});
