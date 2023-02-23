document.querySelector("#svg2982").addEventListener("mouseover", (e) => {
    let id = e.target.id;
    document.querySelector("#" + id).style.fill = "rgb(255,0,0)";
});

document.querySelector("#svg2982").addEventListener("mouseout", (e) => {
    let id = e.target.id;
    document.querySelector("#" + id).style.fill = "#FEFEE9";
});

var garimpo = ["Brasil", "USA"];
var pecuaria = ["Brasil", "USA"];
var madeira = ["Brasil", "USA"];
var agricultura = ["Brasil", "USA"];
var agua = ["Brasil", "USA"];

document.querySelector("#garimpo").addEventListener("mouseover", (e) => {
    garimpo.forEach((pais) => {
        document.querySelector(`#${pais}`).style.fill = "rgb(255,0,0)";
    });
});

document.querySelector("#garimpo").addEventListener("mouseout", (e) => {
    garimpo.forEach((pais) => {
        document.querySelector(`#${pais}`).style.fill = "#FEFEE9";
    });
});

document.querySelector("#agua").addEventListener("mouseover", (e) => {
    garimpo.forEach((pais) => {
        document.querySelector(`#${pais}`).style.fill = "rgb(255,0,0)";
    });
});

document.querySelector("#agua").addEventListener("mouseout", (e) => {
    garimpo.forEach((pais) => {
        document.querySelector(`#${pais}`).style.fill = "#FEFEE9";
    });
});
