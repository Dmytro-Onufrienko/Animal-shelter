import { IBaseEntity } from "src/common/interfaces/IBaseEntity";
import { IPet } from "src/pets/interfaces/IPet";

export interface IOwner extends IBaseEntity {
  name: string;

  pets: IPet[]
}