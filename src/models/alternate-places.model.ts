import {Entity, model, property} from '@loopback/repository';

@model()
export class AlternatePlaces extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
    required: true,
    name: 'alternateNameId'
  })
  alternateNameId?: number;

  @property({
    type: 'number',
    required: true,
  })
  geonameid: number;

  @property({
    type: 'string',
    name: 'isoLanguage'
  })
  isoLanguage?: string;

  @property({
    name: 'alternate name',
    type: 'string',
  })
  alternateName?: string;

  @property({
    type: 'string',
    name: 'isPreferredName',
    nullable: true
  })
  isPreferredName?: boolean;

  @property({
    type: 'string',
    name: 'isShortName',
    nullable: true
  })
  isShortName?: boolean;

  @property({
    type: 'string',
    name: 'isColloquial',
    nullable: true
  })
  isColloquial?: boolean;

  @property({
    type: 'boolean',
    name: 'isShortName',
    nullable: true
  })
  isHistoric?: boolean;

  @property({
    type: 'string',
    nullable: true
  })
  from?: string;

  @property({
    type: 'string',
    nullable: true
  })
  to?: string;


  constructor(data?: Partial<AlternatePlaces>) {
    super(data);
  }
}

export interface AlternatePlacesRelations {
  // describe navigational properties here
}

export type AlternatePlacesWithRelations = AlternatePlaces & AlternatePlacesRelations;
