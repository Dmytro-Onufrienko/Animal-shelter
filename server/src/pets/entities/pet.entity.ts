import { Field, Int, ObjectType } from '@nestjs/graphql';
import { BaseEntity } from 'src/common/entities/base.entity';
import { IPet } from '../interfaces/IPet';
import { Column, Entity, ManyToOne } from 'typeorm';
import { OwnerEntity } from 'src/owners/entities/owner.entity';

@Entity('pet')
@ObjectType()
export class PetEntity extends BaseEntity implements IPet {
  @Column()
  @Field()
  name: string;

  @Column()
  @Field(type => Int)
  ownerId: number;

  @ManyToOne(() => OwnerEntity, owner => owner.pets)
  @Field(type => OwnerEntity)
  owner: OwnerEntity;

  @Column({ nullable: true })
  @Field({ nullable: true })
  type?: string;
}
