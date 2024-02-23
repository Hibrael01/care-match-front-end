import { Time } from "@angular/common";
import { ProcuradorXNecessidadeKey } from "./keys/procuradorXNecessidadeKey.model";
import { Procurador } from "./procurador.model";

export class ProcuradorXNecessidade {
    
    id !: ProcuradorXNecessidadeKey;
    procurador !: Procurador;
    horaInicial !: Time;
    horaFinal !: Time;
    integral !: string;

}