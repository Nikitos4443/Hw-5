function root(obj, value, path = []) {
    for(let key in obj){
        if (obj[key] === value){
            path.push(key);
            console.log(path.join(" => "));
            return;
        } else if(typeof(obj[key]==='object')){
            root(obj[key], value, [...path, key])
        }
    }
}
object = {
    "one": {
        "nest1": {
            "val1": [9, 34, 92, 100]
        }
    },
    "2f7": {
        "n1": [10, 92, 53, 71],
        "n2":{
            "n3": [1, 92, 97],
        }
    }
}
root(object, 92)