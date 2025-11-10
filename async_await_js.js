//async fucntion alawys return a promise


async function greeet() {
     return "Rishon"
}

const response = greeet()
console.log(response); //Promise { 'Rishon' }

// we know how to log promise using then right away

response.then((data) => console.log(data)) //Rishon

//without then
// async function greeet() {
//     return new Promise((resolve,reject) => {
//         resolve("Rishon")
//     })
// }


fetch("https://api.github.com/users")
.then((res) => res.json())
.then((d) => console.log(d))

// instead of above we can write 

//if u add await JS will wait for that line to complete and then move to next line

async function github() {
    const r1 = await fetch("https://api.github.com/users")
    const d1 = await r1.json();
    console.log(d1);
}

// once u add async then it will run in background but same time it will go and do other task
// basically below log will print 

github()

console.log("CHECK");

