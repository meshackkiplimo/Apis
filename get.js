//get http rest api

async function GetData() {
  //declare the endpoint
  const endpoint = "https://jsonplaceholder.typicode.com/posts";
  const request = await fetch(endpoint, {
    method: "GET",
  });
  const response = await request.json();
  console.log("this is how get api workd", response);
}
//getdata
GetData();
console.log("this is get data");
