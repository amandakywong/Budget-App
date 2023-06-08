const tableExpense = document.getElementById("dynamicTableSpend");
const tableSave = document.getElementById("dynamicTableSav");

const logExpenseButton = document.getElementById("logexpensebutton");
const logSavingButton = document.getElementById("logsavingbutton");

const dollarExpense = document.getElementById("inputdollarspent");
const dateExpense = document.getElementById("inputdatespent");

const dollarSave = document.getElementById("inputdollarsaved");
const dateSave = document.getElementById("inputdatesaved");

const alertExpense = document.getElementById("alertSpend");
const alertSave = document.getElementById("alertSav");

let expenseData = {};
let saveData = {};

logExpenseButton.addEventListener("click", expenseInData);
logSavingButton.addEventListener("click", saveInData);

function round(number) {
  let roundedNum = Math.round(number / 0.05) * 0.05;
  return roundedNum.toFixed(2);
}
function formatDate(date) {
  const [year, month, day] = date.split("-");
  return `${day}/${month}/${year}`;
}
function sortObjectByDate(obj) {
  const sortedArray = Object.entries(obj).sort(([keyA], [keyB]) => {
    const dateA = new Date(keyA);
    const dateB = new Date(keyB);
    return dateA - dateB;
  });
  const sortedObject = Object.fromEntries(sortedArray);
  return sortedObject;
}

function expenseInData() {
  const finalDoll = round(dollarExpense.value);
  const finalDate = dateExpense.value;
  if (dollarExpense.value === "" && dateExpense.value === "") {
    alertExpense.innerHTML = "*Please fill in both fields*";
    return;
  }
  if (dollarExpense.value === "") {
    alertExpense.innerHTML = "*Please enter amount spent*";
    return;
  }
  if (dateExpense.value === "") {
    alertExpense.innerHTML = "*Please enter date spent*";
    return;
  }
  if (Object.keys(expenseData).length === 0) {
    expenseData = { [finalDate]: finalDoll };
  } else {
    expenseData[finalDate] = finalDoll;
  }
  expenseData = sortObjectByDate(expenseData);
  displayExpense();
}

function displayExpense() {
  while (tableExpense.rows.length > 1) {
    tableExpense.deleteRow(1);
  }

  //alternative loop code
  // Object.entries(expenseData).forEach(([key, value]) => {
  //   const row = tableExpense.insertRow();
  //   const keyCell = row.insertCell();
  //   const valueCell = row.insertCell();

  //   keyCell.textContent = formatDate(key);
  //   valueCell.textContent = value;
  // });

  const key = Object.keys(expenseData);
  const value = Object.values(expenseData);
 
  for (let i = 0; i <key.length; i++) {
    const row = tableExpense.insertRow();
    const keyCell = row.insertCell();
    const valueCell = row.insertCell();

    keyCell.textContent = key[i];
    valueCell.textContent = value[i];
  }
  clearInput();
}

function saveInData() {
  const finalDoll = round(dollarSave.value);
  const finalDate = dateSave.value;
  if (dollarSave.value === "" && dateSave.value === "") {
    alertSave.innerHTML = "*Please fill in both fields*";
    return;
  }
  if (dollarSave.value === "") {
    alertSave.innerHTML = "*Please enter amount saved*";
    return;
  }
  if (dateSave.value === "") {
    alertSave.innerHTML = "*Please enter date saved*";
    return;
  }
  if (Object.keys(saveData).length === 0) {
    saveData = { [finalDate]: finalDoll };
  } else {
    saveData[finalDate] = finalDoll;
  }
  saveData = sortObjectByDate(saveData);
  displaySave();
}

function displaySave() {
  while (tableSave.rows.length > 1) {
    tableSave.deleteRow(1);
  }
  const key = Object.keys(saveData);
  const value = Object.values(saveData);
 
  for (let i = 0; i <key.length; i++) {
    const row = tableSave.insertRow();
    const keyCell = row.insertCell();
    const valueCell = row.insertCell();

    keyCell.textContent = key[i];
    valueCell.textContent = value[i];
  }
  clearInput();
}

function clearInput() {
  dollarExpense.value = "";
  dateExpense.value = "";
  dollarSave.value = "";
  dateSave.value = "";
  alertExpense.innerHTML = "";
  alertSave.innerHTML = "";
}
