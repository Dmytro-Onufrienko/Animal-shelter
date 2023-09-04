import { InputType, Int, Field } from '@nestjs/graphql';
import { IsAlpha } from 'class-validator';

@InputType()
export class CreateOwnerDto {
  @IsAlpha()
  @Field()
  name: string;
}
