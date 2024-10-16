import { AppLanguages, JsonObject, JsonValue } from 'types/global/types';
export namespace CategoryInterfaces {
  export interface Request {
    staffNumber: number;
    name: AppLanguages;
  }

  export interface Update {
    id: number;
    staffNumber?: number;
    name?: AppLanguages;
  }

  export interface Response {
    id: number;
    staffNumber: number;
    name: JsonValue;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
  }

  export interface ResponseWithoutPagination {
    totalDocs: number;
    data: Response[];
  }

  export interface ResponseWithPagination extends ResponseWithoutPagination {
    totalPage: number;
  }
}