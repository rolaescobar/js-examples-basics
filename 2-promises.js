function resolverAfter2Seconds(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x);
        }, 2000);

    })
}


async function add1(x) {
    const a = await resolverAfter2Seconds(25)
    const b = await resolverAfter2Seconds(30)
    return x + a + b
}

add1(10).then(v=>{console.log(v)})


