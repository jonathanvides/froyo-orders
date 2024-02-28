const order = prompt("Enter your order of froyo flavors separated by commas");
const stringArray = order.split(",");

//create a count var 
//look in flavorMap for flavor
//if there are more than one add 1 to count 
//else set to 1
//store flavor as a key in object
//store count as a value in object
function froyo(flavors) {
    const flavorMap = {};
    flavors.forEach(flavor => {
        if (!flavorMap[flavor]) {
            flavorMap[flavor] = 1;
        } else {
            flavorMap[flavor]++;
        }
    });

    return flavorMap;
};

console.table(froyo(stringArray));
