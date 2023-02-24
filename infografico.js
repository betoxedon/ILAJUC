document.querySelector("#svg2982").addEventListener("mouseover", (e) => {
    let id = e.target.id;
    document.querySelector("#" + id).style.fill = "#2A2A28";
});

document.querySelector("#svg2982").addEventListener("mouseout", (e) => {
    let id = e.target.id;
    document.querySelector("#" + id).style.fill = "#FEFEE9";
});

var garimpo = ["Brasil", "Canada", "Suisse", "ReinoUnido"];
var pecuaria = ["Brasil", "USA", "Inde", "Chine"];
var madeira = [
    "Brasil",
    "Allemagne",
    "Belgique",
    "Danemark",
    "France",
    "Italie",
    "Portugal",
    "ReinoUnido",
    "Pays-Bas",
];
var agricultura = ["Brasil", "USA", "Chine", "Inde", "Russie"];
var agua = ["USA", "Australie", "Italie", "Japon", "Mexique", "Espagne"];

function showPaises(id) {
    let vetor;
    if (id == "garimpo") {
        vetor = garimpo;
    }
    if (id == "pecuaria") {
        vetor = pecuaria;
    }
    if (id == "madeira") {
        vetor = madeira;
    }
    if (id == "agricultura") {
        vetor = agricultura;
    }
    if (id == "agua") {
        vetor = agua;
    }
    vetor.forEach((pais) => {
        document.querySelector(`#${pais}`).style.fill = "#2A2A28";
    });
}

function hidePaises(id) {
    let vetor;
    if (id == "garimpo") {
        vetor = garimpo;
    }
    if (id == "pecuaria") {
        vetor = pecuaria;
    }
    if (id == "madeira") {
        vetor = madeira;
    }
    if (id == "agricultura") {
        vetor = agricultura;
    }
    if (id == "agua") {
        vetor = agua;
    }
    vetor.forEach((pais) => {
        document.querySelector(`#${pais}`).style.fill = "#FEFEE9";
    });
}

document.querySelector("#lista").addEventListener("mouseover", (e) => {
    showPaises(e.target.id);
});

document.querySelector("#lista").addEventListener("mouseout", (e) => {
    hidePaises(e.target.id);
});

document.querySelector("#lista").addEventListener("onclick", (e) => {
    console.log(e.target);
    document.querySelector("active").classList.remove("active");
    // document.querySelector(".texto " + e.target.id).classLista.add("active");
});
