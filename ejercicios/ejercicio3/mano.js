import { fileURLToPath } from "url";
import Baraja from "../ejercicio2/baraja.js";

class Mano {
    constructor() {
        this.cartas = []
        
        /*
        * TODO: Inicializar la propiedad cartas como un array vacío
        */
    }
  
    agregarCarta(carta) {
        this.cartas.push(carta);
        /*
        * TODO: Agregar una carta a la mano
        */
    }
  
    getValor() {
      let valor = 0;
      let tieneAs = 0;


    for (let carta of this.cartas) {
        valor += carta.getValor();
        if (carta.valor === "A") {
            tieneAs = +1;
        }
    }

    while (tieneAs && valor > 21) {
        valor -= 10;
        tieneAs--;
    }

    
  
      return valor;
     
    }
  }
         /*
      * TODO: Calcular el valor de la suma de las cartas
      * Si la mano tiene un As y la suma es mayor que 21, restar 10 a la suma
      */
      


  export default Mano;

    if (process.argv[1] === fileURLToPath(import.meta.url)) {
        let baraja = new Baraja();
        let mano = new Mano();
        baraja.mezclar();
        for (let i = 0; i < 2; i++) {
            let carta = baraja.sacarCarta();
            mano.agregarCarta(carta);
        }
        console.log(mano.cartas);
    }
  