import { Cuidador } from "./cuidador.model";
import { CuidadorXExperienciaKey } from "./keys/cuidadorXExperienciaKey.model";

export class CuidadorXExperiencia {
    
    id !: CuidadorXExperienciaKey;
    cuidador !: Cuidador;
    descricao !: string;
    dataInicial !: Date;
    dataFinal !: Date;
    local !: string;
    qtdPessoas !: number;

}