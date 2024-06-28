import { AvaliacaoCuidador } from "./avaliacaoCuidador.model";
import { ConexaoCuidadorXProcurador } from "./conexaoCuidadorXProcurador.model";
import { CuidadorXCertificado } from "./cuidadorXCertificado.model";
import { CuidadorXDisponibilidade } from "./cuidadorXDisponibilidade.model";
import { CuidadorXExperiencia } from "./cuidadorXExperiencia.model";
import { EnderecoCuidador } from "./enderecoCuidador.model";
import { Usuario } from "./usuario.model";

export class Cuidador {
    
    idCuidador !: number;
    usuario !: Usuario;
    descricao !: string;
    tempoExp !: number;
    unidadeTempo !: string;
    formacao !: string;
    atendeCasa !: string;
    enderecoCuidador !: EnderecoCuidador;
    lstAvalicaoCuidador !: Array<AvaliacaoCuidador>;
    lstConexoes !: Array<ConexaoCuidadorXProcurador>;
    lstCertificados !: Array<CuidadorXCertificado>;
    lstDisponibilidade !: Array<CuidadorXDisponibilidade>;
    lstExperiencia !: Array<CuidadorXExperiencia>;

}