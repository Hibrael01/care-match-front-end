import { Cuidador } from "./cuidador.model";
import { CuidadorXExperienciaKey } from "./keys/cuidadorXExperienciaKey.model";

export class CuidadorXExperiencia {
    
    idExperiencia !: number;
    idCuidador !: number;
    cuidador !: Cuidador;
    descricao !: string;
    dataInicial !: Date;
    dataFinal !: Date;
    local !: string;
    qtdPessoas !: number;

}