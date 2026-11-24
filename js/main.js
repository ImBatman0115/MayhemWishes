let req = new XMLHttpRequest();

req.onreadystatechange = () => {
  if (req.readyState == XMLHttpRequest.DONE) {
    familyJson = JSON.parse(req.responseText)
console.log(familyJson );
  }
};

req.open("GET", "https://api.jsonbin.io/v3/b/6b061107ac6210605aa1e795/latest?meta=false", true);
req.setRequestHeader("X-Master-Key", "$2a$10$JNdkBhvAYyuzv1ByZvLuyODWqm3ErmPO.oUJhCG4EMMHwzrYZeP3K");
req.send();


console.log("this is a message.");