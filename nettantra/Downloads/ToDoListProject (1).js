var itemJsonArray = [];

update();
function update() {

    if (localStorage.getItem('itemJson') == null) {
        //let itemJsonArray = [];

        localStorage.setItem('itemJson', JSON.stringify(itemJsonArray));
    }
    else {
        let itemJsonArrayStr = localStorage.getItem('itemJson');
        itemJsonArray = JSON.parse(itemJsonArrayStr);

    }
        let tit = document.getElementById('title').value
        let desc = document.getElementById('description').value
        let tableBody = document.getElementById("tableBody");
        let str = "";
        // Add and Show Tasks to The Table

        itemJsonArray.forEach((element, index) => {
            str += `
                 <tr>
                     <th scope="row">${index + 1}</th>
                     <td>${element.title}</td>
                     <td>${element.description}</td>
                     <td><button class="btn btn-primary" onclick = "deleted(${index})">Remove Task</button></td>
                 </tr>
                 `
        });
        tableBody.innerHTML = str;
}



add = document.getElementById("add");
add.addEventListener("click", newUpdate);


function newUpdate() {

    let tit = document.getElementById('title').value
    let desc = document.getElementById('description').value
    //Adding Table and Tasks to local Storage
    console.log("updating the list");


    if (localStorage.getItem('itemJson') == null) {
        itemJsonArray.push({ title: tit, description: desc });
        localStorage.setItem('itemJson', JSON.stringify(itemJsonArray));
    }
    else {
        let itemJsonArrayStr = localStorage.getItem('itemJson');
        itemJsonArray = JSON.parse(itemJsonArrayStr);
        itemJsonArray.push({ title: tit, description: desc });
        localStorage.setItem('itemJson', JSON.stringify(itemJsonArray));

    }

    update();
}


function deleted(itemIndex) {
    console.log("Delete", itemIndex);
    let itemJsonArrayStr = localStorage.getItem('itemJson');
    itemJsonArray = JSON.parse(itemJsonArrayStr);

    //Delete Index and Elements from the local Storage
    itemJsonArray.splice(itemIndex, 1);
    localStorage.removeItem(itemIndex);

    localStorage.setItem('itemJson', JSON.stringify(itemJsonArray));
    update();

}



function searchTask() {

    //Searching for Tasks
    let srch = document.getElementById('searchtask').value
    let foundTask = itemJsonArray.filter(fnd => (fnd.title == srch))
    console.log("Task Found")
    console.log(foundTask);

        let tit = document.getElementById('title').value
        let desc = document.getElementById('description').value
        let tableBody = document.getElementById("tableBody");
        tableBody.innerHTML = "";
        //Show Found Tasks to The Table

        foundTask.forEach((element, index) => {
            tableBody.innerHTML += `
                 <tr>
                     <th scope="row">${index + 1}</th>
                     <td>${element.title}</td>
                     <td>${element.description}</td>
                     <td><button class="btn btn-primary" onclick = "deleted(${index})">Remove Task</button></td>
                 </tr>
                 `
        });
        


}