class Pokemon{
    nombre: string;
    tipo: string;
    private salud: number;
    private ataque: number;
    private defensa: number;
    ivs: number;

    constructor(nombre: string, tipo: string, salud: number, ataque: number, defensa: number, ivs: number){
        this.nombre = nombre;
        this.tipo = tipo;
        this.salud = salud;
        this.ataque = ataque;
        this.defensa = defensa;
        this.ivs = ivs;
    }
}

export {Pokemon}