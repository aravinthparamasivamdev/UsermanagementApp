import { IPaginationMeta } from "./IPagination";
import { IUserDetails } from "./IUserDetails";

export interface IUserInfo {
    data: IUserDetails;
    meta: IPaginationMeta;
}