import { IPaginationMeta } from "./IPagination";
import { IUserDetails } from "./IUserDetails";

export interface ISummaryDetails {
    data: IUserDetails[];
    meta: IPaginationMeta;
}