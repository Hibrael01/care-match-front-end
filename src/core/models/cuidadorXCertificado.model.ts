import { Cuidador } from "./cuidador.model";
import { CuidadorXCertificadoKey } from "./keys/cuidadorXCertificadoKey,model";

export class CuidadorXCertificado {
    
    idCertificado !: number;
    idCuidador !: number;
    cuidador !: Cuidador;
    instituicao !: string;
    dataInicial !: Date;
    dataFinal !: Date;
    linkCertificado !: string;

}