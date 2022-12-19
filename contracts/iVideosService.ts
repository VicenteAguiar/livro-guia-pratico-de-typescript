import { Videos } from "../models/videos";
import { IService } from "./iService";

/**
 * Contrato IVideosService
 * @summary esse contrato implementa a interface IService passanddo a model de Videos
 */

export interface IVideosService extends IService<Videos>{}