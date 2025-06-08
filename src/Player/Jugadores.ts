import { Jugador } from "./Jugador";
import { Pokemon } from "./Pokemon";

class Jugadores{
    listaJugador: Jugador[];

    constructor() {
        this.listaJugador = [];
        
    }

    agregarJugador(jugador: Jugador){
        this.listaJugador.push(jugador)
    }

    construirJugador(tokenList: any[]){
        let jugadorActual: Jugador | null = null;
        let pokemonActual: Pokemon | null = null;

        let nombrePokemon = '';
        let tipoPokemon = '';
        let ataque = 0;
        let defensa = 0;
        let salud = 0;
        let ivs = 0;

        for(let i=0; i<tokenList.length;i++){
            const token = tokenList[i];

            if (token.typeTokenString === 'LLA_OPEN'){
                const tokenJugador = tokenList[i-1];
                jugadorActual = new Jugador(tokenJugador.lexeme);
                this.agregarJugador(jugadorActual);
            }
            if (token.typeTokenString === 'COR_OPEN'){
                const tokenPokemon = tokenList[i-1];
                if(tokenPokemon.typeTokenString === 'STRING'){
                    nombrePokemon = tokenPokemon.lexeme
                }
                const tokentipo = tokenList[i+1];
                if(tokentipo.typeTokenString === 'RESERVED_WORD'){
                    if(tipoPokemon === ''){
                        tipoPokemon = tokentipo.lexeme
                    }
                }
            }
            if (token.typeTokenString === 'NUMBER'){
                const tokenStat = tokenList[i];
                if(salud === 0){
                    salud = parseInt(tokenStat.lexeme)
                    continue
                } else if(ataque === 0){
                    ataque = parseInt(tokenStat.lexeme)
                    continue
                } else if(defensa === 0){
                    defensa = parseInt(tokenStat.lexeme)
                    ivs = parseFloat(((salud + ataque + defensa) * (100/45)).toFixed(2));
                }
                if(ivs !== 0){
                    pokemonActual = new Pokemon(nombrePokemon,tipoPokemon,salud,ataque,defensa,ivs);
                    jugadorActual?.agregarPokemon(pokemonActual);
                    jugadorActual?.ordenarPokemon()
                    salud = 0;
                    ataque = 0;
                    defensa = 0;
                    ivs = 0;
                    tipoPokemon = '';
                }
            }
            
        }
        for(const jugador of this.listaJugador){
            jugador.obtenerTop();
        }

    }
}

export {Jugadores}
