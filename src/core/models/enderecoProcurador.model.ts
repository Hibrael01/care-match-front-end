import { Cidade } from "./cidade.model";
import { EnderecoProcuradorKey } from "./keys/enderecoProcuradorKey.model";
import { Procurador } from "./procurador.model";

export class EnderecoProcurador {
    
    id !: EnderecoProcuradorKey;
    procurador !: Procurador;
    cidade !: Cidade;
    logradouro !: string;
    bairro !: string;
    complemento !: string;
    cep !: string;
    
}