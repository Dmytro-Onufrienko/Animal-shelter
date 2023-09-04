import { IBaseEntity } from 'src/common/interfaces/IBaseEntity';
import { IOwner } from 'src/owners/interfaces/IOwner';

export interface IPet extends IBaseEntity {
  name: string;

  ownerId: number;

  owner: IOwner;

  type?: string;
}
