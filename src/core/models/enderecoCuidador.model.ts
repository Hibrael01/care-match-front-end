import { Cidade } from "./cidade.model";
import { Cuidador } from "./cuidador.model";
import { EnderecoCuidadorKey } from "./keys/enderecoCuidadorKey.model";

export class EnderecoCuidador {

    id !: EnderecoCuidadorKey;
    cuidador !: Cuidador;
    cidade !: Cidade;
    logradouro !: string;
    bairro !: string;
    complemento !: string;
    acessivel !: string;
    cep !: string;

}