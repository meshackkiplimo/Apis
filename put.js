
// the put is used to update the data in the database when working with REST APIS

// you use this method PUT when younjustb want to update dat

async function UpdateData() {

    //declare the endpoint
    let endpoint = 'https://jsonplaceholder.typicode.com/users/2';
    const request = await fetch(endpoint, {
        method: 'PUT',
        body: JSON.stringify(data),
    });
    const response = await request.json();
    console.log(response, "the data has ben updated");

    
}

//update the data

const data = {
    name: 'John Doe',
    username: 'XXXXXXX',
    email: 'johndoe@example.com',
}
UpdateData();

console.log("you now understand howmput works ins restapi")