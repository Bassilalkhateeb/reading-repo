var order= prompt("what do you want turkish or cuppatchino ?");

while (order !== "turkish" && order !== "cuppatchino") {

    order= prompt("what do you want turkish or cuppatchino ?");
}

var itemorder = '';

if (order === 'cappatchino'){
    itemorder = 'img src= '
}else if (order ==='turkish'){

}
var nocups = prompt('how many cups do u want?');

var result = '';

for (var i = 0; i < noCups; i++) {
  result = result + itemOrder;
}

document.write(result);