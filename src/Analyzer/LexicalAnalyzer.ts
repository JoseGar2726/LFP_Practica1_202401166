import { Token, Type } from "./Token";

class LexicalAnalyzer {

    private row: number;
    private column: number;
    private auxChar: string;
    private state: number;
    private tokenList: Token[];
    private errorList: Token[];

    constructor() {
        this.row = 1;
        this.column = 1;
        this.auxChar = '';
        this.state = 0;
        this.tokenList = [];
        this.errorList = [];
    }

    scanner(input: string){
        input += '#';
        let char: string;

        for(let i: number = 0; i < input.length; i++){

            char = input[i];

            switch(this.state){
                case 0:
                    switch(char){
                        case 'J':
                            this.state = 1;
                            this.addCharacter(char);
                            break;
                        case 'a':
                            this.state = 8;
                            this.addCharacter(char);
                            break;
                        case 'd':
                            this.state = 17;
                            this.addCharacter(char);
                            break;
                        case 'p':
                            this.state = 29;
                            this.addCharacter(char);
                            break;
                        case 'n':
                            this.state = 48;
                            this.addCharacter(char);
                            break;
                        case 's':
                            this.state = 54;
                            this.addCharacter(char);
                            break;
                        case 'f':
                            this.state = 43;
                            this.addCharacter(char);
                            break;
                        case '(':
                            this.state = 59;
                            this.addCharacter(char);
                            break;
                        case '{':
                            this.state = 60;
                            this.addCharacter(char);
                            break;
                        case '[':
                            this.state = 61;
                            this.addCharacter(char);
                            break;
                        case ')':
                            this.state = 62;
                            this.addCharacter(char);
                            break;
                        case '}':
                            this.state = 63;
                            this.addCharacter(char);
                            break;
                        case ']':
                            this.state = 64;
                            this.addCharacter(char);
                            break;
                        case ';':
                            this.state = 65;
                            this.addCharacter(char);
                            break;
                        case '"':
                            this.state = 66;
                            this.addCharacter(char);
                            break;
                        case '=':
                            this.state = 68;
                            this.addCharacter(char);
                            break;
                        case ':':
                            this.state = 70;
                            this.addCharacter(char);
                            break;
                        case ' ':
                            this.column++;
                            break;
                        case '\n':
                        case '\r':
                            this.row++;
                            this.column = 1;
                            break;
                        case '\t':
                            this.column += 4;
                            break;
                        default:
                            if(/\d/.test(char)){
                                //Es un digito
                                this.state = 69;
                                this.addCharacter(char);
                            } else if(char == '#' && i == input.length - 1){
                                //Fin Analisis
                            } else{
                                //Error
                                this.addError(Type.UNKNOW, char, this.row, this.column);
                                this.column++;
                            }
                            break;
                    }
                    break;
                case 1:
                    if(char != 'u'){
                        //ERROR
                        this.addError(Type.UNKNOW, this.auxChar, this.row, this.column - this.auxChar.length);
                        this.clean();
                        i--;
                        continue
                    }
                    this.addCharacter(char);
                    this.state = 2
                    break;
                case 2:
                    if(char != 'g'){
                        //ERROR
                        this.addError(Type.UNKNOW, this.auxChar, this.row, this.column - this.auxChar.length);
                        this.clean();
                        i--;
                        continue
                    }
                    this.addCharacter(char);
                    this.state = 3
                    break;
                case 3:
                    if(char != 'a'){
                        //ERROR
                        this.addError(Type.UNKNOW, this.auxChar, this.row, this.column - this.auxChar.length);
                        this.clean();
                        i--;
                        continue
                    }
                    this.addCharacter(char);
                    this.state = 4
                    break;
                case 4:
                    if(char != 'd'){
                        //ERROR
                        this.addError(Type.UNKNOW, this.auxChar, this.row, this.column - this.auxChar.length);
                        this.clean();
                        i--;
                        continue
                    }
                    this.addCharacter(char);
                    this.state = 5
                    break;
                case 5:
                    if(char != 'o'){
                        //ERROR
                        this.addError(Type.UNKNOW, this.auxChar, this.row, this.column - this.auxChar.length);
                        this.clean();
                        i--;
                        continue
                    }
                    this.addCharacter(char);
                    this.state = 6
                    break;
                case 6:
                    if(char != 'r'){
                        //ERROR
                        this.addError(Type.UNKNOW, this.auxChar, this.row, this.column - this.auxChar.length);
                        this.clean();
                        i--;
                        continue
                    }
                    this.addCharacter(char);
                    this.state = 7
                    break;
                case 7:
                    //ACEPTACION
                    this.addToken(Type.RESERVED_WORD, this.auxChar, this.row, this.column - this.auxChar.length);
                    this.clean();
                    i--;
                    break;
                case 8:
                    if(char != 'g' && char != 't'){
                        //ERROR
                        this.addError(Type.UNKNOW, this.auxChar, this.row, this.column - this.auxChar.length);
                        this.clean();
                        i--;
                        continue
                    } else if(char == 'g'){
                        this.addCharacter(char);
                        this.state = 9
                        continue
                    }
                    this.addCharacter(char);
                    this.state = 12
                    break;
                case 9:
                    if(char != 'u'){
                        //ERROR
                        this.addError(Type.UNKNOW, this.auxChar, this.row, this.column - this.auxChar.length);
                        this.clean();
                        i--;
                        continue
                    }
                    this.addCharacter(char);
                    this.state = 10
                    break;
                case 10:
                    if(char != 'a'){
                        //ERROR
                        this.addError(Type.UNKNOW, this.auxChar, this.row, this.column - this.auxChar.length);
                        this.clean();
                        i--;
                        continue
                    }
                    this.addCharacter(char);
                    this.state = 11
                    break;
                case 11:
                    //ACEPTACION
                    this.addToken(Type.RESERVED_WORD, this.auxChar, this.row, this.column - this.auxChar.length);
                    this.clean();
                    i--;
                    break;    
                case 12:
                    if(char != 'a'){
                        //ERROR
                        this.addError(Type.UNKNOW, this.auxChar, this.row, this.column - this.auxChar.length);
                        this.clean();
                        i--;
                        continue
                    }
                    this.addCharacter(char);
                    this.state = 13
                    break;    
                case 13:
                    if(char != 'q'){
                        //ERROR
                        this.addError(Type.UNKNOW, this.auxChar, this.row, this.column - this.auxChar.length);
                        this.clean();
                        i--;
                        continue
                    }
                    this.addCharacter(char);
                    this.state = 14
                    break;
                case 14:
                    if(char != 'u'){
                        //ERROR
                        this.addError(Type.UNKNOW, this.auxChar, this.row, this.column - this.auxChar.length);
                        this.clean();
                        i--;
                        continue
                    }
                    this.addCharacter(char);
                    this.state = 15
                    break;
                case 15:
                    if(char != 'e'){
                        //ERROR
                        this.addError(Type.UNKNOW, this.auxChar, this.row, this.column - this.auxChar.length);
                        this.clean();
                        i--;
                        continue
                    }
                    this.addCharacter(char);
                    this.state = 16
                    break;
                case 16:
                    //ACEPTACION
                    this.addToken(Type.RESERVED_WORD, this.auxChar, this.row, this.column - this.auxChar.length);
                    this.clean();
                    i--;
                    break;
                case 17:
                    if(char != 'r' && char != 'e'){
                        //ERROR
                        this.addError(Type.UNKNOW, this.auxChar, this.row, this.column - this.auxChar.length);
                        this.clean();
                        i--;
                        continue
                    } else if(char == 'r'){
                        this.addCharacter(char);
                        this.state = 18
                        continue
                    }
                    this.addCharacter(char);
                    this.state = 23
                    break;
                case 18:
                    if(char != 'a'){
                        //ERROR
                        this.addError(Type.UNKNOW, this.auxChar, this.row, this.column - this.auxChar.length);
                        this.clean();
                        i--;
                        continue
                    }
                    this.addCharacter(char);
                    this.state = 19
                    break;
                case 19:
                    if(char != 'g'){
                        //ERROR
                        this.addError(Type.UNKNOW, this.auxChar, this.row, this.column - this.auxChar.length);
                        this.clean();
                        i--;
                        continue
                    }
                    this.addCharacter(char);
                    this.state = 20
                    break;
                case 20:
                    if(char != 'o'){
                        //ERROR
                        this.addError(Type.UNKNOW, this.auxChar, this.row, this.column - this.auxChar.length);
                        this.clean();
                        i--;
                        continue
                    }
                    this.addCharacter(char);
                    this.state = 21
                    break;
                case 21:
                    if(char != 'n'){
                        //ERROR
                        this.addError(Type.UNKNOW, this.auxChar, this.row, this.column - this.auxChar.length);
                        this.clean();
                        i--;
                        continue
                    }
                    this.addCharacter(char);
                    this.state = 22
                    break;
                case 22:
                    //ACEPTACION
                    this.addToken(Type.RESERVED_WORD, this.auxChar, this.row, this.column - this.auxChar.length);
                    this.clean();
                    i--;
                    break;
                case 23:
                    if(char != 'f'){
                        //ERROR
                        this.addError(Type.UNKNOW, this.auxChar, this.row, this.column - this.auxChar.length);
                        this.clean();
                        i--;
                        continue
                    }
                    this.addCharacter(char);
                    this.state = 24
                    break;
                case 24:
                    if(char != 'e'){
                        //ERROR
                        this.addError(Type.UNKNOW, this.auxChar, this.row, this.column - this.auxChar.length);
                        this.clean();
                        i--;
                        continue
                    }
                    this.addCharacter(char);
                    this.state = 25
                    break;
                case 25:
                    if(char != 'n'){
                        //ERROR
                        this.addError(Type.UNKNOW, this.auxChar, this.row, this.column - this.auxChar.length);
                        this.clean();
                        i--;
                        continue
                    }
                    this.addCharacter(char);
                    this.state = 26
                    break;
                case 26:
                    if(char != 's'){
                        //ERROR
                        this.addError(Type.UNKNOW, this.auxChar, this.row, this.column - this.auxChar.length);
                        this.clean();
                        i--;
                        continue
                    }
                    this.addCharacter(char);
                    this.state = 27
                    break;
                case 27:
                    if(char != 'a'){
                        //ERROR
                        this.addError(Type.UNKNOW, this.auxChar, this.row, this.column - this.auxChar.length);
                        this.clean();
                        i--;
                        continue
                    }
                    this.addCharacter(char);
                    this.state = 28
                    break;
                case 28:
                    //ACEPTACION
                    this.addToken(Type.RESERVED_WORD, this.auxChar, this.row, this.column - this.auxChar.length);
                    this.clean();
                    i--;
                    break;
                case 29:
                    if(char != 'l' && char != 's'){
                        //ERROR
                        this.addError(Type.UNKNOW, this.auxChar, this.row, this.column - this.auxChar.length);
                        this.clean();
                        i--;
                        continue
                    } else if(char == 'l'){
                        this.addCharacter(char);
                        this.state = 30
                        continue
                    }
                    this.addCharacter(char);
                    this.state = 35
                    break;
                case 30:
                    if(char != 'a'){
                        //ERROR
                        this.addError(Type.UNKNOW, this.auxChar, this.row, this.column - this.auxChar.length);
                        this.clean();
                        i--;
                        continue
                    }
                    this.addCharacter(char);
                    this.state = 31
                    break;
                case 31:
                    if(char != 'n'){
                        //ERROR
                        this.addError(Type.UNKNOW, this.auxChar, this.row, this.column - this.auxChar.length);
                        this.clean();
                        i--;
                        continue
                    }
                    this.addCharacter(char);
                    this.state = 32
                    break;
                case 32:
                    if(char != 't'){
                        //ERROR
                        this.addError(Type.UNKNOW, this.auxChar, this.row, this.column - this.auxChar.length);
                        this.clean();
                        i--;
                        continue
                    }
                    this.addCharacter(char);
                    this.state = 33
                    break;
                case 33:
                    if(char != 'a'){
                        //ERROR
                        this.addError(Type.UNKNOW, this.auxChar, this.row, this.column - this.auxChar.length);
                        this.clean();
                        i--;
                        continue
                    }
                    this.addCharacter(char);
                    this.state = 34
                    break;
                case 34:
                    //ACEPTACION
                    this.addToken(Type.RESERVED_WORD, this.auxChar, this.row, this.column - this.auxChar.length);
                    this.clean();
                    i--;
                    break;
                case 35:
                    if(char != 'i'){
                        //ERROR
                        this.addError(Type.UNKNOW, this.auxChar, this.row, this.column - this.auxChar.length);
                        this.clean();
                        i--;
                        continue
                    }
                    this.addCharacter(char);
                    this.state = 36
                    break;
                case 36:
                    if(char != 'q'){
                        //ERROR
                        this.addError(Type.UNKNOW, this.auxChar, this.row, this.column - this.auxChar.length);
                        this.clean();
                        i--;
                        continue
                    }
                    this.addCharacter(char);
                    this.state = 37
                    break;
                case 37:
                    if(char != 'u'){
                        //ERROR
                        this.addError(Type.UNKNOW, this.auxChar, this.row, this.column - this.auxChar.length);
                        this.clean();
                        i--;
                        continue
                    }
                    this.addCharacter(char);
                    this.state = 38
                    break;
                case 38:
                    if(char != 'i'){
                        //ERROR
                        this.addError(Type.UNKNOW, this.auxChar, this.row, this.column - this.auxChar.length);
                        this.clean();
                        i--;
                        continue
                    }
                    this.addCharacter(char);
                    this.state = 39
                    break;
                case 39:
                    if(char != 'c'){
                        //ERROR
                        this.addError(Type.UNKNOW, this.auxChar, this.row, this.column - this.auxChar.length);
                        this.clean();
                        i--;
                        continue
                    }
                    this.addCharacter(char);
                    this.state = 40
                    break;
                case 40:
                    if(char != 'o'){
                        //ERROR
                        this.addError(Type.UNKNOW, this.auxChar, this.row, this.column - this.auxChar.length);
                        this.clean();
                        i--;
                        continue
                    }
                    this.addCharacter(char);
                    this.state = 41
                    break;
                case 41:
                    //ACEPTACION
                    this.addToken(Type.RESERVED_WORD, this.auxChar, this.row, this.column - this.auxChar.length);
                    this.clean();
                    i--;
                    break;
                case 43:
                    if(char != 'u'){
                        //ERROR
                        this.addError(Type.UNKNOW, this.auxChar, this.row, this.column - this.auxChar.length);
                        this.clean();
                        i--;
                        continue
                    }
                    this.addCharacter(char);
                    this.state = 44
                    break;
                case 44:
                    if(char != 'e'){
                        //ERROR
                        this.addError(Type.UNKNOW, this.auxChar, this.row, this.column - this.auxChar.length);
                        this.clean();
                        i--;
                        continue
                    }
                    this.addCharacter(char);
                    this.state = 45
                    break;
                case 45:
                    if(char != 'g'){
                        //ERROR
                        this.addError(Type.UNKNOW, this.auxChar, this.row, this.column - this.auxChar.length);
                        this.clean();
                        i--;
                        continue
                    }
                    this.addCharacter(char);
                    this.state = 46
                    break;
                case 46:
                    if(char != 'o'){
                        //ERROR
                        this.addError(Type.UNKNOW, this.auxChar, this.row, this.column - this.auxChar.length);
                        this.clean();
                        i--;
                        continue
                    }
                    this.addCharacter(char);
                    this.state = 47
                    break;
                case 47:
                    //ACEPTACION
                    this.addToken(Type.RESERVED_WORD, this.auxChar, this.row, this.column - this.auxChar.length);
                    this.clean();
                    i--;
                    break;
                case 48:
                    if(char != 'o'){
                        //ERROR
                        this.addError(Type.UNKNOW, this.auxChar, this.row, this.column - this.auxChar.length);
                        this.clean();
                        i--;
                        continue
                    }
                    this.addCharacter(char);
                    this.state = 49
                    break;
                case 49:
                    if(char != 'r'){
                        //ERROR
                        this.addError(Type.UNKNOW, this.auxChar, this.row, this.column - this.auxChar.length);
                        this.clean();
                        i--;
                        continue
                    }
                    this.addCharacter(char);
                    this.state = 50
                    break;
                case 50:
                    if(char != 'm'){
                        //ERROR
                        this.addError(Type.UNKNOW, this.auxChar, this.row, this.column - this.auxChar.length);
                        this.clean();
                        i--;
                        continue
                    }
                    this.addCharacter(char);
                    this.state = 51
                    break;
                case 51:
                    if(char != 'a'){
                        //ERROR
                        this.addError(Type.UNKNOW, this.auxChar, this.row, this.column - this.auxChar.length);
                        this.clean();
                        i--;
                        continue
                    }
                    this.addCharacter(char);
                    this.state = 52
                    break;
                case 52:
                    if(char != 'l'){
                        //ERROR
                        this.addError(Type.UNKNOW, this.auxChar, this.row, this.column - this.auxChar.length);
                        this.clean();
                        i--;
                        continue
                    }
                    this.addCharacter(char);
                    this.state = 53
                    break;
                case 53:
                    //ACEPTACION
                    this.addToken(Type.RESERVED_WORD, this.auxChar, this.row, this.column - this.auxChar.length);
                    this.clean();
                    i--;
                    break;
                case 54:
                    if(char != 'a'){
                        //ERROR
                        this.addError(Type.UNKNOW, this.auxChar, this.row, this.column - this.auxChar.length);
                        this.clean();
                        i--;
                        continue
                    }
                    this.addCharacter(char);
                    this.state = 55
                    break;
                case 55:
                    if(char != 'l'){
                        //ERROR
                        this.addError(Type.UNKNOW, this.auxChar, this.row, this.column - this.auxChar.length);
                        this.clean();
                        i--;
                        continue
                    }
                    this.addCharacter(char);
                    this.state = 56
                    break;
                case 56:
                    if(char != 'u'){
                        //ERROR
                        this.addError(Type.UNKNOW, this.auxChar, this.row, this.column - this.auxChar.length);
                        this.clean();
                        i--;
                        continue
                    }
                    this.addCharacter(char);
                    this.state = 57
                    break;
                case 57:
                    if(char != 'd'){
                        //ERROR
                        this.addError(Type.UNKNOW, this.auxChar, this.row, this.column - this.auxChar.length);
                        this.clean();
                        i--;
                        continue
                    }
                    this.addCharacter(char);
                    this.state = 58
                    break;
                case 58:
                    //ACEPTACION ultima palabra reservada
                    this.addToken(Type.RESERVED_WORD, this.auxChar, this.row, this.column - this.auxChar.length);
                    this.clean();
                    i--;
                    break;
                case 59:
                    //ACEPTACION (
                    this.addToken(Type.PAR_OPEN, this.auxChar, this.row, this.column - this.auxChar.length);
                    this.clean();
                    i--;
                    break;
                case 60:
                    //ACEPTACION {
                    this.addToken(Type.LLA_OPEN, this.auxChar, this.row, this.column - this.auxChar.length);
                    this.clean();
                    i--;
                    break;
                case 61:
                    //ACEPTACION [
                    this.addToken(Type.COR_OPEN, this.auxChar, this.row, this.column - this.auxChar.length);
                    this.clean();
                    i--;
                    break;
                case 62:
                    //ACEPTACION )
                    this.addToken(Type.PAR_CLOSE, this.auxChar, this.row, this.column - this.auxChar.length);
                    this.clean();
                    i--;
                    break;
                case 63:
                    //ACEPTACION }
                    this.addToken(Type.LLA_CLOSE, this.auxChar, this.row, this.column - this.auxChar.length);
                    this.clean();
                    i--;
                    break;
                case 64:
                    //ACEPTACION ]
                    this.addToken(Type.COR_CLOSE, this.auxChar, this.row, this.column - this.auxChar.length);
                    this.clean();
                    i--;
                    break;
                case 65:
                    //ACEPTACION ;
                    this.addToken(Type.SEMICOLON, this.auxChar, this.row, this.column - this.auxChar.length);
                    this.clean();
                    i--;
                    break;
                case 66:
                    //COMILLAS-Strings
                    if(char == '"'){
                        this.state = 67;
                        this.addCharacter(char);
                        continue
                    }
                    this.addCharacter(char);
                    break;
                case 67:
                    //ACEPTACION-STRINGS
                    this.addToken(Type.STRING, this.auxChar, this.row, this.column - this.auxChar.length);
                    this.clean();
                    i--;
                    break;
                case 68:
                    //ACEPTACION =
                    this.addToken(Type.EQUALS, this.auxChar, this.row, this.column - this.auxChar.length);
                    this.clean();
                    i--;
                    break;
                case 69:
                    //ACEPTACION-NUMEROS
                    if(/\d/.test(char)){
                        this.addCharacter(char);
                        continue
                    }
                    this.addToken(Type.NUMBER, this.auxChar, this.row, this.column - this.auxChar.length)
                    this.clean();
                    i--;
                    break;
                case 70:
                    //INTENTO DE ANALISIS :=
                    if(char == '='){
                        this.addCharacter(char);
                        this.state = 71
                    } else{
                        //ACEPTACION-:
                        this.addToken(Type.TWO_POINTS, this.auxChar, this.row, this.column - this.auxChar.length);
                        this.clean();
                        i--;
                    }
                    break;
                case 71:
                    //ACEPTACION-:=
                    this.addToken(Type.ASSIGMENT, this.auxChar, this.row, this.column - this.auxChar.length);
                    this.clean();
                    i--;
                    break;
            }
        }

        return this.tokenList;

    }

    private addCharacter(char: string){
        this.auxChar += char;
        this.column++;
    }

    //FUNCION DE RETORNO
    private clean(){
        this.state = 0;
        this.auxChar = '';
    }

    private addToken(type: Type, lexeme: string, row: number, column: number){
        this.tokenList.push(new Token(type, lexeme, row, column));
    }

    private addError(type: Type, lexeme: string, row: number, column: number){
        this.errorList.push(new Token(type, lexeme, row, column));
    }

    getErrorList(){
        return this.errorList;
    }

}

export {LexicalAnalyzer};