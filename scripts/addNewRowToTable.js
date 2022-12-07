function serializeForm(formNode) {
    const { elements } = formNode
    const data = Array.from(elements)
        .filter((item) => !!item.name)
        .map((element) => {
            const { name, value } = element

            return { name, value }
        })
    let table = document.getElementById("tableBody")
    let row_2 = document.createElement('tr')
    let row_2_data_1 = document.createElement('td')
    row_2_data_1.innerHTML = data.at(0).value
    let row_2_data_2 = document.createElement('td')
    row_2_data_2.innerHTML = data.at(1).value
    row_2.appendChild(row_2_data_1)
    row_2.appendChild(row_2_data_2)
    table.appendChild(row_2)
    localStorage.setItem(data.at(0).value, data.at(1).value)
}

function handleFormSubmit(event) {
    event.preventDefault()
    serializeForm(applicantForm)
}
let table = document.getElementById("tableBody")
for(let i=0; i<localStorage.length; i++) {
    let key = localStorage.key(i);
    let row_2 = document.createElement('tr')
    let row_2_data_1 = document.createElement('td')
    row_2_data_1.innerHTML = key
    let row_2_data_2 = document.createElement('td')
    row_2_data_2.innerHTML = localStorage.getItem(key)
    row_2.appendChild(row_2_data_1)
    row_2.appendChild(row_2_data_2)
    table.appendChild(row_2)
}
const applicantForm = document.getElementById('form-example')
applicantForm.addEventListener('submit', handleFormSubmit)