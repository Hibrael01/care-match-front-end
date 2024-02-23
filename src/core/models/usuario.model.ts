import { booleano } from "../enums/booleano.enum";

export class Usuario{

    idUsuario!: number;
    nome!: string;
    sobrenome!: string;
    login!: string;
    senha!: string;
    dtCriacao!: Date;
    sessionToken!: string;
    tipoUsuario!: string;
    email!: string;
    telefone!: string;
    dtNascimento!: Date;
    desabilitado!: string;

}
