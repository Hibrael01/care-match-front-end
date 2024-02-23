import { Cuidador } from "./cuidador.model";
import { MotivoCancelamento } from "./motivoCancelamento.model";
import { Procurador } from "./procurador.model";

export class ConexaoCuidadorXProcurador {

    idConexao !: number;
    procurador !: Procurador;
    cuidador !: Cuidador;
    justificativaProcurador !: string;
    justificativaCuidador !: string;
    status !: string;
    motivoCancelamento1 !: MotivoCancelamento;
    motivoCancelamento2 !: MotivoCancelamento;
    motivoCancelamento3 !: MotivoCancelamento;

}