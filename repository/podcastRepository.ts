import mongoose from "mongoose";
import { Podcast } from "../models/podcast";

const PodcastSchema = new mongoose.Schema<Podcast>({
    titulo: { type: String },
    texto: { type: String },
    imagem: { type: String },
    duracao: { type: String },
    link: { type: String },
    url: { type: String },
    dataPublicacao: { type: Date },
    tags: { type: String },
    ativo: { type: Boolean }
})

export const PodcastRepository = mongoose.model<Podcast>('podcast', PodcastSchema);