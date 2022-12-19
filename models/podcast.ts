import { Core } from "./core";

/**
 * Model de podcast
 * @type url {String} url do podcast
 * @type duracao {String} tempo do audio
 */

export class Podcast extends Core {
    url?: String;
    duracao?: String;
}