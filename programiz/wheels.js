function checkVehicleType(wheels) {
    if(wheels==2)
        return "Two-wheeler";
    else if(wheels==4)
        return "Four-wheeler";
    else
        return "Invalid";

}

console.log(checkVehicleType(2));
console.log(checkVehicleType(8));