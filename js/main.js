let req = new XMLHttpRequest();

req.onreadystatechange = () => {
  if (req.readyState == XMLHttpRequest.DONE) {
    familyJson = JSON.parse(req.responseText)
console.log(familyJson );
  }
};

req.open("GET", "https://api.jsonbin.io/v3/b/6b061107ac6210605aa1e795/latest?meta=false", true);
req.setRequestHeader("X-Access-Key", "$2a$10$aTe4JFGarhL93PdFBjVDpuLC9ElWCcNkMpqP8OL1pqpQRRLlthl1C");
req.send();