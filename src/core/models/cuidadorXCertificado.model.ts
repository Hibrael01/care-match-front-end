import { Cuidador } from "./cuidador.model";
import { CuidadorXCertificadoKey } from "./keys/cuidadorXCertificadoKey,model";

export class CuidadorXCertificado {
    
    id !: CuidadorXCertificadoKey;
    cuidador !: Cuidador;
    instituicao !: string;
    dataInicial !: Date;
    dataFinal !: Date;
    linkCertificado !: string;

}