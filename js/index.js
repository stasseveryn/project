
function calculate() {
    width  = document.getElementById('width').value;
    length  = document.getElementById('length').value;
    if(width == ""){
    alert("Ви не вказали ширину в см.");
    } else if(length == ""){
    alert("Ви не вказали довжину в см.");
    } else {
    price = 2;
    square = parseFloat (width)* parseFloat (length);
    document.getElementById('square').innerHTML = "Загальна площа: "+ square +" кв. см.";
    constPrice = square*price;
    document.getElementById('constPrice').innerHTML = "Приблизна вартість: "+ constPrice +" грн.";
    }
    }
    console.log();
    