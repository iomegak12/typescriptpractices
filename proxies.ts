function doSomething(a: number, b: number): number {
    console.log('Doing Something ... ' + a + ', ' + b);

    return a + b;
}

function doProcess(values: number[]) {
    console.log('doProcess Started ...');
    let result = doSomething(values[0], values[1]);
    console.log('Result : ' + result);
    console.log('doProcess Completed ...');
}

let doSomething = new Proxy(doSomething, {
    apply: (target, current, args) => {
        let validation = args[0] !== args[1];

        if (!validation) {
            console.log('Validation Failed ... Throwing ...');
            throw new Error('Validation Failed!');
        }

        let resultFromOriginal = target(<any>args[0], <any>args[1]);

        console.log('Proxy Completed ...  ' + resultFromOriginal);

        return resultFromOriginal;
    }
});

doProcess([10, 22, 30, 40, 50]);