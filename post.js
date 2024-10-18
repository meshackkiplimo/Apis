// REST api

//Post http method

async function AddData() {
  let endpoint = "https://jsonplaceholder.typicode.com/users";
  const request = await fetch(endpoint, {
    method: "POST",
    body: JSON.stringify(data),
  });
  const response = await request.json();
  console.log("good response",response);
}
const data = {
  name: "John Doe",
  age: 22,
};

AddData();

//console.log data
console.log("the data is sent",data)


