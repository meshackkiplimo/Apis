// this method DELETE is used to delete data parnerbently from the  server

async function UpdateData() {
  let endpoint = "https://jsonplaceholder.typicode.com/users/2";
  const request = await fetch(endpoint, {
    method: "DELETE",
  });
  const response = await request.json();
  console.log(response, "the data has ben deleted");
}

UpdateData();
