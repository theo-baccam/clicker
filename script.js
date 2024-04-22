let obj = {
    a: "a",
    b: 2,
    c: 3.33,
};

function save() {
    const jsonString = JSON.stringify(obj);
    localStorage.setItem("obj", jsonString);
}

function load() {
    const loadedObj = localStorage.getItem("obj");
    const parsedObj = JSON.parse(loadedObj);
    obj.a = parsedObj.a;
    obj.b = parsedObj.b;
    obj.c = parsedObj.c;
}

function logObj() {
    console.log(obj);
}