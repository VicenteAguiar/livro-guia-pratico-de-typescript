import { Core } from "./core";
import { Fotos } from './fotos';

/**
 * Model de Galeria de fotos
 * @type fotos {Array} lista da model fotos
 */

export class Galeria extends Core {
    fotos?: Array<Fotos>;
}