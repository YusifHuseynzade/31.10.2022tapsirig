const add = document.getElementById("add");
const edit = document.getElementById("edit");
const tbody = document.querySelector(".t-body");
const deleteBtn = document.querySelector(".delBtn");

const baseUrl = "https://jsonplaceholder.typicode.com"

const getData = () => {
    const fetchData = fetch(`${baseUrl}/users`)
    .then((response) => response.json())
    .then((data) => {
        data?.map((item) => (
            tbody.innerHTML += `
            <tbody class="t-body" id="table-Edit">
                  <tr class="tbody-tr">
                    <th><input type="checkbox"></th>
                    <td>${item.name}</td>
                    <td>${item.username}</td>
                    <td>${item.email}</td>
                    <td>${item.phone}</td>
                    <td>${item.address.city}</td>
                    <td>${item.company.name}</td>
                    <td><button class="text-decor fs-6" title="Edit" id="edit"><i class="fa-solid fa-pen-to-square me-2 fs-6"></i>Edit</button><button class="text-decor2 fs-6" title="Delete" onclick="this.parentElement.parentElement.remove()"><i class="fa-solid fa-trash me-2 fs-6"></i>Delete</button></td>
                  </tr>
                </tbody>`
        ))
    })

    return fetchData
}

add.addEventListener('click', getData);
deleteBtn.addEventListener('click', ()=>{
  fetch(`${baseUrl}/users/1`, {
    method: 'DELETE',
  })
  .then(()=> console.log("delete"))
})

const tableEdit = document.getElementById("tableEdit");
const nameInput = document.querySelector(".name_Input");
const usernameInput = document.querySelector(".username_Input");
const emailInput = document.querySelector(".email_Input");
const phoneInput = document.querySelector(".phone_Input");
const addressInput = document.querySelector(".address_Input");
const companyNameInput = document.querySelector(".companyName_Input");

tableEdit.addEventListener('click', e => {
  if(e.target.id === "edit"){
    e.target.parentElement.parentElement.innerHTML = `
    <tbody class="t-body">
          <tr class="tbody-tr">
            <th><input type="checkbox"></th>
            <td>${nameInput.value}</td>
            <td>${usernameInput.value}</td>
            <td>${emailInput.value}</td>
            <td>${phoneInput.value}</td>
            <td>${addressInput.value}</td>
            <td>${companyNameInput.value}</td>
            <td><button class="text-decor fs-6" title="Edit" id="edit"><i class="fa-solid fa-pen-to-square me-2 fs-6"></i>Edit</button><button class="text-decor2 fs-6" title="Delete" onclick="this.parentElement.parentElement.remove()"><i class="fa-solid fa-trash me-2 fs-6"></i>Delete</button></td>
          </tr>
        </tbody>`
  }
})

