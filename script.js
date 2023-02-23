// JS Code here...
// target the value in the input fields
//
const form = document.querySelector("form")
const productTable = document
  .getElementById("products-table")
  .getElementsByTagName("tbody")[0]
const productName = document.getElementById("product")
const productPrice = document.getElementById("price")
const productIva = document.getElementById("iva")
const deleteButton = document.getElementsByTagName("button")

const insertRow = (event) => {
  event.preventDefault()
  const newRow = productTable.insertRow(-1)
  const id = Math.floor(Math.random() * 999) + 1
  const timestamp = new Date().toLocaleDateString()
  newRow.innerHTML = `
    <td>${id}</td>
    <td>${productName.value}</td>
    <td>$ ${productPrice.value}</td>
    <td>${productIva.value} %</td>
    <td>$ ${productPrice.value * (1 + productIva.value / 100)}</td>
    <td>${timestamp}</td>
    <td>
    <button class="btn btn-delete" onclick="deleteRow(event)">Delete</button>
    </td>
  `
  form.reset()
}

// funtion must delete the current row, so we need to target the button and the row

function deleteRow(event) {
  const button = event.currentTarget
  const row = button.parentNode.parentNode
  row.parentNode.removeChild(row)
}
