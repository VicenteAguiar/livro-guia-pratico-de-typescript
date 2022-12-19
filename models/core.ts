import { Document } from "mongoose";

/**
 * @summary Classe abstrata para criação das models
 * @type titulo {String} título
 * @type texto {String} texto ou descrição
 * @type imagem {String} imagem padão ou avatar
 * @type dataPublicacao {Date} data da publicação
 * @type tags {String} tags relacionadas a model
 * @type link {String} link do conteúdo
 * @type ativo {Boolean} status
 * @type chapeu {String} título menor
 * @type autor {String} quem escreveu a noticia
 */

export abstract class Core extends Document {
    titulo?: String;
    texto?: String;
    imagem?: String;
    dataPublicacao?: String;
    tags?: String;
    link?: String;
    ativo?: String;
    chapeu?: String;
    autor?: String;
}