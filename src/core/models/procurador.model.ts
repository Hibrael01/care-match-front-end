import { AvaliacaoProcurador } from "./avaliacaoProcurador.model";
import { ConexaoCuidadorXProcurador } from "./conexaoCuidadorXProcurador.model";
import { EnderecoProcurador } from "./enderecoProcurador.model";
import { ProcuradorXNecessidade } from "./procuradorXNecessidade.model";
import { Usuario } from "./usuario.model";

export class Procurador {

    idProcurador !: number;
    usuario !: Usuario;
    descricao !: string;
    resumoNecessidade !: string;
    enderecoProcurador !: EnderecoProcurador;
    lstAvalicaoProcurador !: Array<AvaliacaoProcurador>;
    lstConexoes !: Array<ConexaoCuidadorXProcurador>;
    lstProcuradorXNecessidade !: Array<ProcuradorXNecessidade>;

}