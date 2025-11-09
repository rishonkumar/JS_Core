/*

JS does not wait for anyone it exec all the line on by one
const data = fetch("https://api.github.com/users")
if log this you will get Promise<pending>

When calls go to github there can be response Fulfilled or Rejected or Pending (State of Promise)

Reject state => Internet down, Server down, DNS down only in this case reject state

Fulfilled => Whenever server responds then it is called Fulfilled state it can be even url is wrong 

It is asnychrouse task (we need to wait for the response)
*/
const data = fetch("https://api.github.com/users")

console.log(data);


//so how to consume response can be fulfilled or rejected
const finalData = data.then((response) => {
    //console.log(response); // here resonse we will not see actual data it will be in byte form we need to convert into JS obect (  body: ReadableStream { locked: false, state: 'readable', supportsBYOB: true },)
    //console.log("Converted data " , response.json()); // this is also aysyncro process so it will be promise pending (Converted data  Promise { <pending> })
    // so now store this and then do .then

    return response.json()
})

//console.log(finalData);// this is also aysyncro process so it will be promise pending (Converted data  Promise { <pending> })

finalData.then((data) => {
    console.log(data);
        
})

//console.log("pther way");


// other way of writing nit

//promise chaining
fetch("https://api.github.com/users")
.then(respone => {
    if(!respone.ok) { // this to handle if promise fuilfilled but no data is present
        throw new Error("Data is not present")
    }
    return respone.json()
})
.then(data => {
    console.log(data);
}).catch((error) => { // reject state we will catch
    console.log(error.message);  
})

// How to create a promise
const p2 = new Promise((resolve,reject) => {
    resolve("Hello")
})

// to handle reject
const p1 = new Promise((resolve,reject) => {
    reject("Hello")
})

p1.then((response) => {
    console.log(response)
}).catch((err) => console.log(err))
