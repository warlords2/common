import { ISize } from "./geometry/size";
import { ICity } from "./city";
import { IPosition } from "./geometry/position";
import { IWorld } from "./world";

export interface IProvince{
    name: String;
    size: ISize;
    position: IPosition;
    world: IWorld;

    /* @todo futuro sistema de desastres
    type: string; // Tipo Terremotos, Tempestade
    frequency: number; // Frequência com que o desastre pode ocorrer
    severity: number; // Severidade do desastre em uma escala de 1 a 10
    */

   /* @todo futuro sistema de tipos
    type: string; // Tipo Deserto, FLoresta, Tundra
    */
   
    cities: ICity[];
}