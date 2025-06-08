enum Type{
    UNKNOW,
    PAR_OPEN,
    PAR_CLOSE,
    COR_OPEN,
    COR_CLOSE,
    LLA_OPEN,
    LLA_CLOSE,
    SEMICOLON,
    EQUALS,
    TWO_POINTS,
    ASSIGMENT,
    RESERVED_WORD,
    NUMBER,
    STRING
}

class Token{

    private row: number;
    private column: number;
    private lexeme: string;
    private typeToken: Type;
    private typeTokenString: String

    constructor(typeToken: Type, lexeme: string, row: number, column: number, ){
        this.typeToken = typeToken;
        this.typeTokenString = Type[typeToken];
        this.lexeme = lexeme;
        this.row = row;
        this.column = column;
    }

}

export {Token, Type}