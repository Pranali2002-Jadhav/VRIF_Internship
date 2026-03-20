function convertToSnakeCase(str){
    return str.split(" ").join("_").toLowerCase();
}

console.log(convertToSnakeCase("Hellow World"));
