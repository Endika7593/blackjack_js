import { fileURLToPath } from "url";

class Carta {
    constructor(palo, valor) {
        // TODO: Guardar palo y valor en propiedades
        this.palo = palo;
        this.valor = valor;
    }
  
    getValor() {
        /* 
        * TODO: Devolver el valor de la carta
        * 2-10 valen su valor
        * J, Q, K valen 10
        * A vale 11 
        */
       if (this.valor >= 2 && this.valor <= 10) {
        return parseInt(this.valor);

        }else if (['J', 'Q', 'K'].includes(this.valor)){
        return 10;

        }else if (this.valor === 'A'){
        return 11;
        }else{
       return 0;
   
        }
    }

  
}

export default Carta;



if (process.argv[1] === fileURLToPath(import.meta.url)) {
    let carta = new Carta("corazones", "A");
    console.log(carta.getValor());
    carta = new Carta("corazones", "J");
    console.log(carta.getValor());
    carta = new Carta("corazones", "2");
    console.log(carta.getValor());
}

//--------------------------------------------------------//

