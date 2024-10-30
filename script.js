function generateList(){
    const treats = document.getElementById('treats');
    const eats = document.getElementById('eats');
    const list = document.getElementById('postList');

    var treatsItems = ["Rice Krispys", "Bat Cakes"];
    var eatsItems = ["Mummy Cake Pops", "Spider Pumpkins"];

    let itemsToDisplay = []

    if(treats.checked){
        itemsToDisplay = treatsItems;
    }else if(eats.checked){
        itemsToDisplay = eatsItems;
    }

    list.innerHTML = "<ul>" + itemsToDisplay.map(item => `<li>${item}</li>`).join('')+"</ul>";
}