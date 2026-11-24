// let req = new XMLHttpRequest();

// req.onreadystatechange = () => {
//   if (req.readyState == XMLHttpRequest.DONE) {
//     familyJson = JSON.parse(req.responseText)
// console.log(familyJson );
//   }
// };

// req.open("GET", "https://api.jsonbin.io/v3/b/6b061107ac6210605aa1e795/latest?meta=false", true);
// req.setRequestHeader("X-Master-Key", "$2a$10$JNdkBhvAYyuzv1ByZvLuyODWqm3ErmPO.oUJhCG4EMMHwzrYZeP3K");
// req.send();

let req = new XMLHttpRequest();

req.onreadystatechange = () => {
  if (req.readyState == XMLHttpRequest.DONE) {
    console.log(req.responseText);
  }
};

req.open("PUT", "https://api.jsonbin.io/v3/b/6b061107ac6210605aa1e795", true);
req.setRequestHeader("Content-Type", "application/json");
req.setRequestHeader("X-Master-Key", "$2a$10$JNdkBhvAYyuzv1ByZvLuyODWqm3ErmPO.oUJhCG4EMMHwzrYZeP3K");
req.send('{"FamilyMembers": {"GrandmaDorothy": ["Blanket"],"Granny": [],"Grandad": [],"Jonny": [],"Perry": [],"Brad": [],"Jess": [],"Amy": [],"Stephy": [],"Kayden": [],"Logan": [],"Zander": [],"Peyton": [],"Declan": [],"Greyson": []}}');