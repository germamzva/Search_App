function loadData(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(json => insertToList(json))
}

function insertToList(data){
    let listEl = ""
    data.forEach(list => {
        listEl += '<li>'+list.name+'</li>';
    });
    const ulList = document.querySelector(".list_box ul");
    ulList.innerHTML = listEl
}

loadData()

// search name 
const inputSearch = document.querySelector("input[data-input]")

inputSearch.addEventListener("keyup", (event) => {

    const inputValue = event.target.value

    const ulList = document.querySelectorAll(".list_box ul li");

    ulList.forEach(list => {
        const liContent = list.innerText
        if (liContent.toLowerCase().indexOf(inputValue) > -1) {
            list.style.display = "";
        } else {
            list.style.display = "none";
        }
    })

})