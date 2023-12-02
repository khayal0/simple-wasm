const addFunctionInitilize = async () => {
    try {
        const wasm = await fetch('simple.wasm');
        const buffer = await wasm.arrayBuffer();
        const bytes = await WebAssembly.instantiate(buffer);
        const add = bytes.instance.exports.add;
        return add;
    } catch (e) {
        console.log("== Error while loading wasm ==> ", e);
    }
    
}

const add = await addFunctionInitilize();
console.log(add(2,3));