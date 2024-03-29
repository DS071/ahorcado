const txtResult = document.querySelector("#result")
const txtMessage = document.querySelector("#message")
const buttonA = document.querySelector(".abecedario")
const listButton = document.querySelectorAll('.abecedario')


const listaPalabras = ["AGUA", "LAPIZ", "SILLA", "MESA", "PANTALLA", "RELOJ", "PORTAEQUIPAJE", "CAMARA", "LIBRO", "BOLIGRAFO", "VENTANA", "TECLADO", "RATON", "MOCHILA", "PUERTA", "ESCRITORIO", "CUADERNO", "PIZARRA", "TELEFONO", "LAMPARA", "PAPEL", "CAJA", "ALFOMBRA", "ESPEJO", "TAZA", "CUCHARA", "TENEDOR", "PLATO", "VASIJA", "VENTILADOR", "ESTANTERIA", "LLAVE", "CANDADO", "HORNO", "REFRIGERADOR", "LAVADORA", "SECADORA", "RADIADOR", "CUBETA", "ESCALERA", "BOMBILLA", "CEPILLO", "PEINE", "ESPONJA", "TOALLA", "JABON", "ESCURRIDOR", "ABANICO", "TERMO", "TIJERAS", "MARTILLO", "DESTORNILLADOR", "SIERRA", "ESCOBA", "CUBO", "PALA", "CESTO", "SARTEN", "COLCHON", "ALMOHADA", "VASO", "PLANCHA", "CUCHARON", "LLAVERO", "ESTUFA", "COLADOR", "TABLA", "RASTRILLO", "MOPA", "SOMBRERO", "BASTON", "SOMBRILLA", "ESCALERA", "CUCHARON", "BANQUETA", "TIMBRE", "HACHA", "SILLON", "CENICERO", "PARRILLA", "PERSIANAS", "LINTERNA", "OLLA", "CALENTADOR", "PERCHERO", "GUANTE", "ESCALPELO", "RODILLO", "MANTA", "ANILLO", "LAMPARA", "ESCUDO", "BOCINA", "TUBERIA", "CARRITO", "BICICLETA", "ESPEJO", "TROMPETA", "FLAUTA", "COFRE", "BILLETERA", "FREGADERO"];

let palabra = "";
let espacios = "";
let vidas = 8; 

txtResult.innerHTML = "Presione Inicio";
txtMessage.innerHTML = "------";
listButton.forEach(button => {
    button.addEventListener("click", (e) => {
        e.preventDefault()
        const boton = e.target
        validateLetter(boton.innerHTML);
        if (vidas > 0) {
            if (espacios.includes("_")) {
                txtMessage.innerHTML = "Vidas: " + vidas
            } else {
                txtMessage.innerHTML = "Ganaste"
                btnInicio.disabled = false
                validateButtons(true)
            }
        } else {
            txtMessage.innerHTML = "Perdiste. La palabra es " + palabra
            btnInicio.disabled = false
            validateButtons(true)
        }
    })
    button.disabled = true
})

const validateButtons = (estado) => {
    listButton.forEach(b => {
        b.disabled = estado
    })
}
 
const btnInicio = document.querySelector(".inicio")
btnInicio.addEventListener("click", (e) => {
    e.preventDefault();
    juego()
    btnInicio.disabled = true
})

const juego = () => {
    vidas = 8 
    palabra = listaPalabras[Math.floor(Math.random() * listaPalabras.length)];
    palabra.toUpperCase();
    validateButtons(false)
    const count = palabra.length
    espacios = "_".repeat(count)
    txtResult.innerHTML = espacios
    txtMessage.innerHTML = "Vidas: " + vidas;

}

const validateLetter = (letter) => {
    if (palabra.includes(letter)) {
        const splitWord = palabra.split('');
        const splitEspacios = espacios.split('');
        splitWord.forEach((l, i) => {
            if (l === letter) {
                splitEspacios[i] = letter
            }
        })
        espacios = splitEspacios.join('')
        txtResult.innerHTML = espacios
    } else {
        vidas--;
    }
}

