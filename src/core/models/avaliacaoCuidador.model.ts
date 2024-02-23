import { ConexaoCuidadorXProcurador } from "./conexaoCuidadorXProcurador.model";
import { Cuidador } from "./cuidador.model";
import { AvaliacaoCuidadorKey } from "./keys/avaliacaoCuidadorKey.model";
import { Procurador } from "./procurador.model";

export class AvaliacaoCuidador {
    
    id !: AvaliacaoCuidadorKey;
    cuidador !: Cuidador;
    procurador !: Procurador;
    conexao !: ConexaoCuidadorXProcurador;
    observacao !: string;
    avaliacao !: number;

}