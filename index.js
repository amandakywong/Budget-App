const dollarSpent = document.getElementById("inputdollarspent");
const dollarSaved = document.getElementById("inputdollarsaved");
const dateSpent = document.getElementById("inputdatespent");
const dateSaved = document.getElementById("inputdatesaved");
const logExpenseButton = document.getElementById("logexpensebutton");
const logSavingButton = document.getElementById("logsavingbutton");


logExpenseButton.addEventListener("mouseup", (e) => {
  let setDollarSpent = dollarSpent.value;
  let setDateSpent = dateSpent.value;

  localStorage.setItem("dollarSpent", setDollarSpent);
  localStorage.setItem("dateSpent", setDateSpent);

  alert("Submitted expense :)");
});

logSavingButton.addEventListener("mouseup", (e) => {
    let setDollarSaved = dollarSaved.value;
    let setDateSaved = dateSaved.value;
  
    localStorage.setItem("dollarSaved", setDollarSaved);
    localStorage.setItem("dateSaved", setDateSaved);
  
    alert("Submitted saving :)");
  });
