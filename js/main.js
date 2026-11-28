 //grabs current page based of the data-page attribute on the body tag
const currentPage = document.body.dataset.page;
//getting elements
const list = document.getElementById("wish-list");
const form = document.getElementById('form');
const input = document.getElementById('wish');
const update = document.getElementById('last-updated');

let familyJson = null;

function saveFamilyData() {
  const putReq = new XMLHttpRequest();

  putReq.onreadystatechange = () => {
    if (putReq.readyState === XMLHttpRequest.DONE) {
      if (putReq.status >= 200 && putReq.status < 300) {
        renderList();
      } else {
        console.error("Failed to update wish list:", putReq.status, putReq.statusText);
      }
    }
  };

  putReq.open("PUT", "https://api.jsonbin.io/v3/b/6b089db43957a11c13b51d2b/latest?meta=false", true);
  putReq.setRequestHeader("Content-Type", "application/json");
  putReq.setRequestHeader("X-Master-Key", '$2a$10$JNdkBhvAYyuzv1ByZvLuyODWqm3ErmPO.oUJhCG4EMMHwzrYZeP3K');
  putReq.send(JSON.stringify(familyJson));
}

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
       const deleteBtn = document.createElement('button');
       deleteBtn.type = 'button';
       deleteBtn.textContent = 'Delete';
       li.textContent = item;

       deleteBtn.addEventListener("click", () => {
        pageContent.splice(index, 1);
        saveFamilyData();
       })
       
       li.appendChild(deleteBtn);
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

req.open("GET", "https://api.jsonbin.io/v3/b/6b089db43957a11c13b51d2b/latest?meta=false", true);
req.setRequestHeader("X-Master-Key", "$2a$10$JNdkBhvAYyuzv1ByZvLuyODWqm3ErmPO.oUJhCG4EMMHwzrYZeP3K");
req.send();



form.addEventListener('submit', (event) =>{
  event.preventDefault();

  const newItem = input.value.trim();
  if (!newItem || !familyJson?.FamilyMembers) return;

  if (!Array.isArray(familyJson.FamilyMembers[currentPage])) {
    familyJson.FamilyMembers[currentPage] = [];
  }

  familyJson.FamilyMembers[currentPage].push(newItem);
input.value = "";
saveFamilyData();
})
