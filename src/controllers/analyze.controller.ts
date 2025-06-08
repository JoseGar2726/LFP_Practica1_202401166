import { Request, Response } from "express";
import { LexicalAnalyzer } from "../Analyzer/LexicalAnalyzer";
import { Jugadores } from "../Player/Jugadores";
import { Jugador } from "../Player/Jugador";

let errorList: any[] = [];

let listaJugadores: Jugador[] = [];


export const analyze = (req: Request, res: Response) => {

    const input = req.body.txtArea;
    let lexicalAnalyzer: LexicalAnalyzer = new LexicalAnalyzer();

    let tokenList = lexicalAnalyzer.scanner(input);
    errorList = lexicalAnalyzer.getErrorList();

    let jugadores = new Jugadores();

    jugadores.construirJugador(tokenList);
    listaJugadores = jugadores.listaJugador;

    //console.log(JSON.stringify(jugadores.listaJugador,null,2));

    res.render('pages/index',{
        tokens: tokenList,
        errors: errorList,
        codigo: input,
        contador: 0,
        listaJugadores: listaJugadores
    });
}

export const inicio = (req: Request, res: Response) => {

    res.render('pages/index',{
        tokens: [],
        errors: [],
        codigo: '',
        contador: 0,
        listaJugadores: listaJugadores
    });
    

}

export const reporte = (req: Request, res: Response) => {

    res.render('pages/reporte',{
        errors: errorList,
        contador: 0
    });
}

export const pokemones = (req: Request, res: Response) => {
    const nombreJugador = req.params.nombre.toLowerCase();
    const pagjugador = listaJugadores.find(j => j.nombre.replace(/"/g, '').toLowerCase() === nombreJugador);

    if(pagjugador){
        return res.render('pages/jugador',{
            pagjugador: pagjugador.nombre,
            listaPokemon: pagjugador.pokemonTop
        });
    }

    res.status(404).send("Jugador no encontrado");
}