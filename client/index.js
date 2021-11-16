//ES6/2015
let show = (m = "Fish project") => {
    alert(m)
};
show();

function resolveAfter20Seconds(){
    return new Promise( resolve =>{
        setTimeout(()=>{
            resolve('Resolved')
        }, 2000);
    });
}

async function asyncCall(){
    console.log("Fish project");
    const result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();
