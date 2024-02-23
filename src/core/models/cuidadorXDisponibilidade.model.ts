import { Time } from "@angular/common";
import { Cuidador } from "./cuidador.model";

export class CuidadorXDisponibilidade {
    
    id !: CuidadorXDisponibilidade;
    cuidador !: Cuidador;
    horaInicial !: Time;
    horaFinal !: Time;
    diaInteiro !: string;

}