
/*Wayne Barnett	Founder & CEO	wayne-barnett-founder-ceo.jpg
Angela Caroll	Chief Editor	angela-caroll-chief-editor.jpg
Walter Gordon	Office Manager	walter-gordon-office-manager.jpg
Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
Scott Estrada	Developer	scott-estrada-developer.jpg
Barbara Ramos	Graphic Designer	barbara-ramos-graphic-designer.jpg
*/

// creo elemento container dove inserire i miei elementi
const elContainer = document.getElementById("container")

//  creo l'array per gli oggetti
teamArray = [];

// creo gli oggetti da pushare nell'array
const teamMember1 = {
    "name" : "Wayne Barnett",
    "role" : "Founder & CEO",
    "img" : "wayne-barnett-founder-ceo.jpg"
}

const teamMember2 = {
    "name" : "Angela Caroll",
    "role" : "Chief Editor",
    "img" : "angela-caroll-chief-editor.jpg"
}

const teamMember3 = {
    "name" : "Walter Gordon",
    "role" : "Office Manager",
    "img" : "walter-gordon-office-manager.jpg"
}

const teamMember4 = {
    "name" : "Angela Lopez",
    "role" : "Social Media Manager",
    "img" : "angela-lopez-social-media-manager.jpg"
}

const teamMember5 = {
    "name" : "Scott Estrada",
    "role" : "Developer",
    "img" : "scott-estrada-developer.jpg"
}

const teamMember6 = {
    "name" : "Barbara Ramos",
    "role" : "Graphic Designer",
    "img" : "barbara-ramos-graphic-designer.jpg"
}

//prove
//console.log(teamMember1)

for (let chiave in teamMember1) {
    //console.log(teamMember1[chiave])
}

for (let chiave in teamMember1) {
   // console.log(chiave)
}

/* pusho gli oggetti nell array
c'è sicuramente un modo migliore di farlo invece di farlo uno per uno come ho fatto io, tra i commenti sotto un idea che non ha funzionato
*/

/*
for (i = 1; i <= 6; i++) {
    teamArray.push(teamMember{i})
}
*/

teamArray.push(teamMember1,teamMember2,teamMember3,teamMember4,teamMember5,teamMember6);

//console.log(teamArray);

// stampo info di ogni membro  del team in console e le inserisco nel file HTML


// per ogni elemento nel array che contiene gli oggetti
for (i = 0 ; i < teamArray.length ; i ++) {

    // creo un elemento div
    let elDiv = document.createElement("div")
    //creo un elemento img
    const elImg = `<img src="img/${teamArray[i].img}">`;


    // per ogni proprietà che l'oggetto contiene:
    for (let chiave in teamArray[i]) {
        console.log(teamArray[i][chiave])

            if (chiave !== "img") {
            //la inserisco nell' elemtno div

                elDiv.append(teamArray[i][chiave] + " - ");
                //che poi metto nel container
                elContainer.append(elDiv);}
                
            
        
    }

    //inserisci elemento img nel div in html
    elDiv.innerHTML += elImg;

    console.log(elDiv)

    
}