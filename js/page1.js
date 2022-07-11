if (window.localStorage.getItem("pontos") == null) {
    window.localStorage.setItem("pontos", 0);
}

function validarForm(certo) {
    const point = [document.querySelector("#flexRadioDefault1"),
    document.querySelector("#flexRadioDefault2"),
    document.querySelector("#flexRadioDefault3"),
    document.querySelector("#flexRadioDefault4")];  

    let eValido = true;

    const doc = document.querySelector("#txt_warning");

    for (let index = 0; index < point.length; index++) {
        const e = point[index];
        if(e.checked){
            console.log("foi checado");
            if (certo == index) {
                let pontos = parseInt(window.localStorage.getItem("pontos"));
                pontos++;
                console.log(pontos);
                window.localStorage.setItem("pontos", pontos);
            }
            break;
        }
        if (point.length - 1 == index) {
            eValido = false;
        }
    }

    if (!eValido) {
        doc.style.visibility = "visible";
    }

    return eValido;
}
