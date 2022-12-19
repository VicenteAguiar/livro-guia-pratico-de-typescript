import { IPodcastService } from "../contracts/IPodcastService";
import { Result } from "../infra/result";
import { Podcast } from "../models/podcast";
import { PodcastRepository } from "../repository/podcastRepository";


export class PodcastService implements IPodcastService {
    async get(id: string): Promise<Podcast> {
        let result = await PodcastRepository.findById(id)
        //@ts-ignore
        return result
    }

    async getAll(page: number, qtd: number): Promise<Result<Podcast>> {
        let result = new Result<Podcast>();
        result.Page = page;
        result.Qtd = qtd;
        result.Total = await PodcastRepository.count({});
        result.Data = await PodcastRepository.find({}).skip((page * qtd) - qtd).limit(qtd);
        return result;
    }
}