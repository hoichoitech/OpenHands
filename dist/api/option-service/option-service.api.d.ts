import { ModelsResponse, WebClientConfig } from "./option.types";
declare class OptionService {
    static getModels(): Promise<ModelsResponse>;
    static getConfig(): Promise<WebClientConfig>;
}
export default OptionService;
