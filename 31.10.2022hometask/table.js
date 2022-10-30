const add = document.getElementById("add");
const tbody = document.querySelector(".t-body");


const BASEURL = "https://jsonplaceholder.typicode.com";

const getData = () => {
    const fetchData = fetch(`${BASEURL}/users`)
    .then((response) => response.json())
    .then((data) => {
        data?.map((item) => (
            tbody.innerHTML += `
            <tbody class="t-body">
                  <tr class="tbody-tr">
                    <th><input type="checkbox"></th>
                    <td>${item.name}</td>
                    <td>${item.username}</td>
                    <td>${item.email}</td>
                    <td>${item.phone}</td>
                    <td>${item.address.city}</td>
                    <td>${item.company.name}</td>
                    <td><a href="#" class="text-decor" title="Edit"><i class="fa-solid fa-pen-to-square me-3"></i></a><a href="#" class="text-decor2" title="Delete" onclick="this.parentElement.parentElement.remove()"><i class="fa-solid fa-trash"></i></a></td>
                  </tr>
                </tbody>`
        ))
    })

    return fetchData
}


add.addEventListener('click', getData);

