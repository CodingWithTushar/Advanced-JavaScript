console.log('Its Working');

async function sleep(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(44)
        }, 1000);
    })
}

// IIFE 

(async function main(){

    console.log(z1);
    
    // let a = await sleep()
    // console.log(a);
    // let b = await sleep()
    // console.log(b);

    // Destructuring


    // let [x,y,...rest] = [1,5,3,456,678,6543234,56765,4334,5] 
    // console.log(x,y,rest);
    // We Have to also create x and y  and Array to show The Numbers Without undefined
    let obj = {
        a:1,
        b:2,
        c:3
    }
    
    function sum(a,b,c) {
        return (a+b+c)
    }

    let {a,b} = obj
    console.log(a,b);

    let arr = [1,7,9]

console.log(sum(...arr));

console.log(sum(arr[0],arr[1],arr[2]));

var z1 = 33;

})()






