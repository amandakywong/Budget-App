
const logExpenseButton = document.getElementById("logexpensebutton");
const logSavingButton = document.getElementById("logsavingbutton");

const dollarExpense = document.getElementById("inputdollarspent");
const dateExpense = document.getElementById("inputdatespent");

const dollarSave = document.getElementById("inputdollarsaved");
const dateSave = document.getElementById("inputdatesaved");

const tableExpense = document.getElementById("dynamicTableSpend");
const tableSave = document.getElementById("dynamicTableSav");

let expenseData = {}
let saveData = {}

logExpenseButton.addEventListener("click", expenseInData)
logSavingButton.addEventListener("click", saveInData)

function round(number) {
  let roundedNum = Math.round(number / 0.05) * 0.05;
  return roundedNum.toFixed(2)
}

function expenseInData(){
  const finalDoll = (round(dollarExpense.value))
  const finalDate = dateExpense.value
  if (Object.keys(expenseData).length === 0){
    expenseData = {[finalDate]: finalDoll};
  } else {
    expenseData[finalDate] = finalDoll;
  }
  displayExpense()
}

function displayExpense(){
  while (tableExpense.rows.length > 1) {
    tableExpense.deleteRow(1);
  }
  
  Object.entries(expenseData).forEach(([key, value]) => {
    const row = tableExpense.insertRow();
    const keyCell = row.insertCell();
    const valueCell = row.insertCell();
  
    keyCell.textContent = key;
    valueCell.textContent = value;
  });
}

function saveInData(){

}

function displaySave(){

}

function clearData() {

}


/*
logExpenseButton.addEventListener("mouseup", function () {
  let existingDollarSpent = localStorage.getItem("dollarSpent");
  existingDollarSpent = existingDollarSpent ? JSON.parse(existingDollarSpent) : [];
  existingDollarSpent.push(dollarSpent);
  localStorage.setItem("dollarSpent", JSON.stringify(existingDollarSpent));
  let dollarSpent = "";

  let existingDateSpent = localStorage.getItem("dateSpent");
  existingDateSpent = existingDateSpent ? JSON.parse(existingDateSpent) : [];
  existingDateSpent.push(dateSpent);
  localStorage.setItem("dateSpent", JSON.stringify(existingDateSpent));
  let dateSpent = "";

  displayDataSpent();
})

function displayDataSpent() {
  const storedDollarData = localStorage.getItem("dollarSpent");
  const dollarData = storedDollarData ? JSON.parse(storedDollarData) : [];
  const storedDateData = localStorage.getItem("dateSpent");
  const dateData = storedDateData ? JSON.parse(storedDateData) : [];

  const table = document.getElementById("dynamicTableSpend");
  while (table.rows.length > 1) {
    table.deleteRow(1);
  }
  for (let i = 0; i < Math.max(dollarData.length, dateData.length); i++) {
    const row = table.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);

    if (i < dateData.length) {
      cell1.textContent = dateData[i];
    } else {
      cell1.textContent = "";
    }

    if (i < dollarData.length) {
      cell2.textContent = dollarData[i];
    } else {
      cell2.textContent = "";
    }
  }
  }

logSavingButton.addEventListener("mouseup", function () {

  let existingDollarSaved = localStorage.getItem("dollarSav");
  existingDollarSaved = existingDollarSaved ? JSON.parse(existingDollarSaved) : [];
  existingDollarSaved.push(dollarSaved);
  localStorage.setItem("dollarSav", JSON.stringify(existingDollarSaved));
  let dollarSaved = "";


  let existingDateSaved = localStorage.getItem("dateSav");
  existingDateSaved = existingDateSaved ? JSON.parse(existingDateSaved) : [];
  existingDateSaved.push(dateSaved);
  localStorage.setItem("dateSav", JSON.stringify(existingDateSaved));
  let dateSaved = "";

  displayDataSav();

  if (dollarSpent=== NaN){
    document.getElementById("alertSpend").innerHTML = "Enter number"
  }
})


function displayDataSav() {
  const storedDollarData = localStorage.getItem("dollarSav");
  const dollarData = storedDollarData ? JSON.parse(storedDollarData) : [];
  const storedDateData = localStorage.getItem("dateSav");
  const dateData = storedDateData ? JSON.parse(storedDateData) : [];

  const table = document.getElementById("dynamicTableSav");
  while (table.rows.length > 1) {
    table.deleteRow(1);
  }
  for (let i = 0; i < Math.max(dollarData.length, dateData.length); i++) {
    const row = table.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);

    if (i < dateData.length) {
      cell1.textContent = dateData[i];
    } else {
      cell1.textContent = "";
    }

    if (i < dollarData.length) {
      cell2.textContent = dollarData[i];
    } else {
      cell2.textContent = "";
    }
  }
  }
*/


/*
  * add required date and dollar
  * restrictions on number dollar
*/
