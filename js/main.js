let req = new XMLHttpRequest();

req.onreadystatechange = () => {
  if (req.readyState == XMLHttpRequest.DONE) {
    currentPage = document.body.dataset.page;
    console.log(currentPage);
    familyJson = JSON.parse(req.responseText)
console.log(familyJson );
    const pageContent = familyJson[FamilyMembers.currentPage];
    console.log(pageContent);
    //console.log(familyJson.FamilyMembers.GrandmaDorothy);
    list = document.getElementById("wish-list");
    pageContent.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      list.appendChild(li);
    })
      // for (const content of pageContent) {
      //   const item = document.createElement("li");
      //   item.textContent = content;
      //   list.appendChild(item);
      // }
    
  }
};

req.open("GET", "https://api.jsonbin.io/v3/b/6b061107ac6210605aa1e795/latest?meta=false", true);
req.setRequestHeader("X-Master-Key", "$2a$10$JNdkBhvAYyuzv1ByZvLuyODWqm3ErmPO.oUJhCG4EMMHwzrYZeP3K");
req.send();

// let req = new XMLHttpRequest();

// req.onreadystatechange = () => {
//   if (req.readyState == XMLHttpRequest.DONE) {
//     console.log(req.responseText);
//   }
// };

// req.open("PUT", "https://api.jsonbin.io/v3/b/6b061107ac6210605aa1e795", true);
// req.setRequestHeader("Content-Type", "application/json");
// req.setRequestHeader("X-Master-Key", "$2a$10$JNdkBhvAYyuzv1ByZvLuyODWqm3ErmPO.oUJhCG4EMMHwzrYZeP3K");
// req.send('{"FamilyMembers": {"GrandmaDorothy": ["Blanket"],"Granny": [],"Grandad": [],"Jonny": [],"Perry": [],"Brad": [],"Jess": [],"Amy": [],"Stephy": [],"Kayden": [],"Logan": [],"Zander": [],"Peyton": [],"Declan": [],"Greyson": []}}');