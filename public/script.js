const showsnacks = async() => {
    const snacksJSON = await getsnacks();
    const snackBody = document.getElementById("snacks-body");

    if (snacksJSON == "") {
        console.log("Invalid load of json");
        return;
    }

    snacksJSON.forEach((snack) =>
      snackBody.append(getsnackItem(snack))
    );
}
const getsnackItem = (snack) => {
    const snackSection = document.createElement("section");
    snackSection.classList.add("flex-container");
    const snackTxtSection = document.createElement("div");

    console.log(snack);

    const img = document.createElement("img");
    img.src = "https://assignment13.onrender.com/" + snack.img;
    snackSection.append(img);

    const h1 = document.createElement("h1");
    snackTxtSection.append(h1);
    h1.innerHTML = snack.name;
    
    const p1 = document.createElement("p");
    snackTxtSection.append(p1);
    p1.innerHTML = snack.flavor;
    snackSection.append(snackTxtSection);

    const p2 = document.createElement("p");
    snackTxtSection.append(p2);
    p2.innerHTML = snack.price;
    snackSection.append(snackTxtSection);

    const p3 = document.createElement("p");
    snackTxtSection.append(p3);
    p3.innerHTML = "Type: " + snack.type;
    snackSection.append(snackTxtSection);

    const p4 = document.createElement("p");
    snackTxtSection.append(p4);
    p4.innerHTML = "Ingredients: "+ snack.ingredients;
    snackSection.append(snackTxtSection);

    return snackSection;
};
const getsnacks = async() => {
    try {
        return (await fetch("https://assignment13.onrender.com/api/snacks")).json();
    } catch (error) {
        console.log("error retrieving json");
        return "";
    }
}

window.onload = () => showsnacks();