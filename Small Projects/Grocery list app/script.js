let groceryList = [];

function addItem() {
    let item = document.getElementById("itemInput").value;

    if (item === "") {
        alert("Please enter an item!");
        return;
    }

    groceryList.push(item);
    document.getElementById("itemInput").value = "";
    displayList();
}

function removeItem() {
    groceryList.pop();
    displayList();
}

function displayList() {
    let list = document.getElementById("listArea");
    list.innerHTML = "";

    for (let i = 0; i < groceryList.length; i++) {
        list.innerHTML += `<li>${groceryList[i]}</li>`;
    }

    document.getElementById("count").innerText = groceryList.length;
}
