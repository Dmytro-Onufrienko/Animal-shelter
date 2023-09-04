import { IOwner } from './../interfaces/IOwner';
import { ObjectType, Field } from '@nestjs/graphql';
import { BaseEntity } from 'src/common/entities/base.entity';
import { PetEntity } from 'src/pets/entities/pet.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity('owner')
@ObjectType()
export class OwnerEntity extends BaseEntity implements IOwner {
  @Column()
  @Field()
  name: string;

  @OneToMany(() => PetEntity, pet => pet.owner)
  @Field(type => [PetEntity], {nullable: true})
  pets: PetEntity[];
}
