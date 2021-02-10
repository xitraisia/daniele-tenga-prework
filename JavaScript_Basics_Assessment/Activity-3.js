let arrayName = ['Jason', 'Chris', 'Tabitha'];
for(i=0; i<3; i++){
    let newName = prompt(['Add another name']);
    arrayName.push([newName[i]]);
}
for(i=0; i<arrayName.length; i++){
    console.log(arrayName[i]);
}