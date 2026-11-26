 //grabs current page based of the data-page attribute on the body tag
const currentPage = document.body.dataset.page;
//getting elements
const list = document.getElementById("wish-list");
const form = document.getElementById('form');
const input = document.getElementById('wish');

let familyJson = null;

function renderList() {
  list.innerHTML = "";
  //getting the first level of the JSON
    const members = familyJson.FamilyMembers;
    //if members and currentpage match display the list
    const pageContent = members ? members[currentPage] : undefined;

  if (!Array.isArray(pageContent)) return;

  //loop through array until all list items are displayed
     
     pageContent.forEach(item => {
       const li = document.createElement('li');
       li.textContent = item;
      list.appendChild(li);
     })
}

let req = new XMLHttpRequest();

req.onreadystatechange = () => {
  if (req.readyState == XMLHttpRequest.DONE) {
   
    //parsing the JSON
    familyJson = JSON.parse(req.responseText)
    console.log(familyJson );
    renderList();
    
    // console.log("currentPage:", currentPage);
    // console.log("avaiable keys:", Object.keys(familyJson));
    // console.log("pageContent:", pageContent[currentPage]);
    
  
    
  }
};

req.open("GET", "https://api.jsonbin.io/v3/b/6b061107ac6210605aa1e795/latest?meta=false", true);
req.setRequestHeader("X-Master-Key", "$2a$10$JNdkBhvAYyuzv1ByZvLuyODWqm3ErmPO.oUJhCG4EMMHwzrYZeP3K");
req.send();



form.addEventListener('submit', (event) =>{
  event.preventDefault();
  const newItem = input.value.trim();
  if (!newItem || !familyJson?.FamilyMembers) return;

  if (!Array.isArray(familyJson.FamilyMembers[currentPage])) {
    familyData.FamilyMembers[currentPage] = [];
  }

  familyData.FamilyMembers[currentPage].push(newItem);

  let req = new XMLHttpRequest();

req.onreadystatechange = () => {
  if (req.readyState == XMLHttpRequest.DONE) {
   input.value = "";
   renderList();
  }
};

req.open("PUT", "https://api.jsonbin.io/v3/b/6b061107ac6210605aa1e795", true);
req.setRequestHeader("Content-Type", "application/json");
req.setRequestHeader("X-Master-Key", "$2a$10$JNdkBhvAYyuzv1ByZvLuyODWqm3ErmPO.oUJhCG4EMMHwzrYZeP3K");
req.send(JSON.stringify(familyJson));
})
