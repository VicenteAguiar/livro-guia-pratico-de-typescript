import { Core } from "./core";

/**
 * Model News
 * @type chapeu {String} título menor
 * @type autor {String} quem escreveu o a notícia
 */

export class News extends Core {
    chapeu?: String;
    autor?: String;
}