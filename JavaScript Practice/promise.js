// Promise = way of communicating with API's
// an object that returns a value that hope to recieve in future but not right now
// well suited for Asynchronous operations
// has three states :- pending fulfilled and rejected

function sayHi()
{
    return new Promise((resolve,reject) => {
        console.log("Let me check my calendar");
        setTimeout(()=>{
            const err = false;
            if(! err)
        {
            resolve("Ok let's meet");
        }
        else
        {
            reject("Sorry , I'm busy");
        }
    },3000);

});
}

sayHi()
.then((val)=>console.log(val))
.catch((err)=>console.log(err));