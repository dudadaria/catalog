let table = document.querySelector('#tbody')
let nameProduct = document.getElementById('name')
let priceProduct = document.getElementById('price')
let countProduct = 1
let infoMessage = document.getElementById('info_message')
let btnInfoMessage = document.getElementById('btn_info_message')
btnInfoMessage.addEventListener('click', sentInfoMessage)


function clearInputs() {
    nameProduct.value = null
    priceProduct.value = null
}

function createTable() {
    const name = nameProduct.value;
    if (priceProduct.value <= 0) {
        let newPrice = prompt('Цена должна быть > или = 0. Введите верное значение')
        priceProduct.value = newPrice.toString()
    }
    if (priceProduct.value > 0) {
        let price = priceProduct.value;
        const row = createRow(countProduct, name, price)
        table.appendChild(row)
        clearInputs()
    }
}


function createRow(count, name, price) {
    const row = document.createElement('tr')
    row.classList.add('row')


    const columnNumber = document.createElement('td')
    columnNumber.classList.add('column_number')
    columnNumber.textContent = count
    row.appendChild(columnNumber)


    const columnName = document.createElement('td')
    columnName.classList.add('column_name')
    columnName.textContent = name
    row.appendChild(columnName)

    const columnDate = document.createElement('td')
    columnDate.classList.add('column_date')
    let now = new Date()
    let options = {
        hour: 'numeric',
        minute: 'numeric',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
    }
    columnDate.textContent = now.toLocaleString("ru", options)
    row.appendChild(columnDate)

    const columnPrice = document.createElement('td')
    columnPrice.classList.add('column_price')
    columnPrice.textContent = price
    row.appendChild(columnPrice)

    const columnDelete = document.createElement('td')
    columnDelete.classList.add('column_delete')
    let btnDelete = document.createElement('button')
    btnDelete.classList.add("btn_delete")
    btnDelete.textContent = "X"
    btnDelete.value = countProduct
    btnDelete.onclick = () => {
        row.remove()
    }
    columnDelete.appendChild(btnDelete)
    row.appendChild(columnDelete)

    countProduct++
    return row
}

function sentInfoMessage() {
    countProduct++
    let message = document.createElement('div')
    let btn_message = document.createElement('button')
    message.classList.add('info_message')
    btn_message.classList.add("btn_message")
    btn_message.textContent = "X"
    btn_message.onclick = () => {
        message.remove()
    }
    message.textContent = infoMessage.value
    document.body.appendChild(message)
    message.appendChild(btn_message)
}
