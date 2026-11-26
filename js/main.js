let req = new XMLHttpRequest();

req.onreadystatechange = () => {
  if (req.readyState == XMLHttpRequest.DONE) {
    //grabs current page based of the data-page attribute on the body tag
    const currentPage = document.body.dataset.page;
    //parsing the JSON
    const familyJson = JSON.parse(req.responseText)
    console.log(familyJson );
    //getting the first level of the JSON
    const members = familyJson.FamilyMembers;
    //if members and currentpage match display the list
    const pageContent = members ? members[currentPage] : undefined;
    
    // console.log("currentPage:", currentPage);
    // console.log("avaiable keys:", Object.keys(familyJson));
    // console.log("pageContent:", pageContent[currentPage]);
    
    //loop through array until all list items are displayed
     list = document.getElementById("wish-list");
     pageContent.forEach(item => {
       const li = document.createElement('li');
       li.textContent = item;
      list.appendChild(li);
     })
    
  }
};

req.open("GET", "https://api.jsonbin.io/v3/b/6b061107ac6210605aa1e795/latest?meta=false", true);
req.setRequestHeader("X-Master-Key", "$2a$10$JNdkBhvAYyuzv1ByZvLuyODWqm3ErmPO.oUJhCG4EMMHwzrYZeP3K");
req.send();


const form = document.getElementById('form');
const input = document.getElementById('wish');
form.addEventListener('submit', (event) =>{
  event.preventDefault();
  const newItem = input.value.trim();

  if (!Array.isArray(familyData.FamilyMembers[currentPage])) {
    familyData.FamilyMembers[currentPage] = [];
  }

  familyData.FamilyMembers[currentPage].push(newItem);

  let req = new XMLHttpRequest();

req.onreadystatechange = () => {
  if (req.readyState == XMLHttpRequest.DONE) {
   input.value = "";
   
  }
};

req.open("PUT", "https://api.jsonbin.io/v3/b/6b061107ac6210605aa1e795", true);
req.setRequestHeader("Content-Type", "application/json");
req.setRequestHeader("X-Master-Key", "$2a$10$JNdkBhvAYyuzv1ByZvLuyODWqm3ErmPO.oUJhCG4EMMHwzrYZeP3K");
req.send(JSON.stringify(familyJson));
})
