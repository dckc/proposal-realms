export function getStdLib(sandbox) {
    const { confinedWindow: _ } = sandbox;
    return {
        Array: { value: _.Array },
        ArrayBuffer: { value: _.ArrayBuffer },
        Boolean: { value: _.Boolean },
        DataView: { value: _.DataView },
        Date: { value: _.Date },
        decodeURI: { value: _.decodeURI },
        decodeURIComponent: { value: _.decodeURIComponent },
        encodeURI: { value: _.encodeURI },
        encodeURIComponent: { value: _.encodeURIComponent },
        Error: { value: _.Error },
        eval: { value: _.eval },
        EvalError: { value: _.EvalError },
        Float32Array: { value: _.Float32Array },
        Float64Array: { value: _.Float64Array },
        Function: { value: _.Function },
        Int8Array: { value: _.Int8Array },
        Int16Array: { value: _.Int16Array },
        Int32Array: { value: _.Int32Array },
        isFinite: { value: _.isFinite },
        isNaN: { value: _.isNaN },
        JSON: { value: _.JSON },
        Map: { value: _.Map },
        Math: { value: _.Math },
        Number: { value: _.Number },
        Object: { value: _.Object },
        parseFloat: { value: _.parseFloat },
        parseInt: { value: _.parseInt },
        Promise: { value: _.Promise },
        Proxy: { value: _.Proxy },
        RangeError: { value: _.RangeError },
        ReferenceError: { value: _.ReferenceError },
        Reflect: { value: _.Reflect },
        RegExp: { value: _.RegExp },
        Set: { value: _.Set },
        String: { value: _.String },
        Symbol: { value: _.Symbol },
        SyntaxError: { value: _.SyntaxError },
        TypeError: { value: _.TypeError },
        Uint8Array: { value: _.Uint8Array },
        Uint8ClampedArray: { value: _.Uint8ClampedArray },
        Uint16Array: { value: _.Uint16Array },
        Uint32Array: { value: _.Uint32Array },
        URIError: { value: _.URIError },
        WeakMap: { value: _.WeakMap },
        WeakSet: { value: _.WeakSet },
        
        // TODO: Annex B
        // TODO: other special cases
    };
}