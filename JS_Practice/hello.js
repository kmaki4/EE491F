console.log("hello from external file");
let stringVariable = "hello"; //let is local and generally preferred
console.log(stringVariable);
let numberVariable = 2.3; //var is global
console.log(numberVariable);
let arrayVariable = [
    1,
    "two",
    3,
    4,
    [
        "array:one",
        "array:three",
    ],
    {
        "array:inner-key1": "array:inner-value1",
        "array:inner-key2": "array:inner-value2",
    },
];
console.log(arrayVariable);
let objectVariable = {
    "key": "value",
    "key2": stringVariable,
    [stringVariable]: "value2",
    "array-key": [
        "object:one",
        "object:three",
    ],
    "object-key": {
        "object:inner-key1": "object:inner-value1",
        "object:inner-key2": "object:inner-value2",
    }
};
console.log(objectVariable);

if (numberVariable > 3){
    console.log("greater");
} else {
    console.log("lesser");
}

if (numberVariable === "2.3"){
    console.log("true");
} else {
    console.log("false");
}

console.log("looping through array");
for (arrayItem of arrayVariable) {
    console.log(arrayItem);
}

console.log("looping through object");
for (key in objectVariable) {
    console.log(key);
    console.log(objectVariable[key]);
}