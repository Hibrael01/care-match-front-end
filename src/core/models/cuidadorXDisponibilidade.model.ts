import { Time } from "@angular/common";
import { Cuidador } from "./cuidador.model";
import { CuidadorXDisponibilidadeKey } from "./keys/cuidadorXDisponibilidadeKey.model";

export class CuidadorXDisponibilidade {
    
    idDisponibilidade !: number;
    diaSemana !: string;
    idCuidador !: number;
    cuidador !: Cuidador;
    horaInicial !: Time;
    horaFinal !: Time;
    diaInteiro !: string;

}