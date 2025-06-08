import { Pokemon } from "./Pokemon";

class Jugador{
    nombre: string;
    listaPokemon: Pokemon[];
    pokemonTop: Pokemon[];

    constructor(nombre: string) {
        this.nombre = nombre;
        this.listaPokemon = [];
        this.pokemonTop = [];
    }

    agregarPokemon(pokemon: Pokemon){
        this.listaPokemon.push(pokemon);
    }

    ordenarPokemon(){
        this.listaPokemon.sort((a,b) => b.ivs - a.ivs);
    }

    obtenerTop(){
        const listaPoke = this.listaPokemon
        if (listaPoke.length <= 6) {
            for(let i = 0; i < listaPoke.length; i++){
                this.pokemonTop.push(listaPoke[i]);
                this.listaPokemon.splice(i,1);
            }
        }else{
            this.pokemonTop.push(listaPoke[0]);
            this.listaPokemon.splice(0,1);
            for(let i = 0; i < listaPoke.length; i++){
                let tipoRepetido = false;
                const pokemonActual = this.listaPokemon[i];
                for(let j = 0; j < this.pokemonTop.length; j++){
                    const pokemonComparar = this.pokemonTop[j];
                    if(pokemonComparar.tipo === pokemonActual.tipo){
                        tipoRepetido = true;
                        break;
                    }
                }
                if(tipoRepetido) continue
                this.pokemonTop.push(listaPoke[i]);
                this.listaPokemon.splice(i,1);
                i -= 1;
            }
        }
        while(this.pokemonTop.length < 6 && listaPoke.length > 0){
            const pokemon = this.listaPokemon[0];
            this.pokemonTop.push(pokemon);
            this.listaPokemon.splice(0, 1);
        }
    }

}

export {Jugador};   