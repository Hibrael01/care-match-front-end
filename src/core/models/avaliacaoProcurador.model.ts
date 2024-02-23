import { ConexaoCuidadorXProcurador } from "./conexaoCuidadorXProcurador.model";
import { Cuidador } from "./cuidador.model";
import { AvalicaoProcuradorKey } from "./keys/avalicaoProcuradorKey.model";
import { Procurador } from "./procurador.model";

export class AvaliacaoProcurador {
    
    id !: AvalicaoProcuradorKey;
    procurador !: Procurador;
    cuidador !: Cuidador;
    conexao !: ConexaoCuidadorXProcurador;
    observacao !: string;
    avaliacao !: number;
    
}