"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Core = void 0;
const mongoose_1 = require("mongoose");
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
class Core extends mongoose_1.Document {
}
exports.Core = Core;
