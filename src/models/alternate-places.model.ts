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
    name: 'isPreferredName'
  })
  isPreferredName?: string;

  @property({
    type: 'string',
    name: 'isShortName'
  })
  isShortName?: string;

  @property({
    type: 'string',
    name: 'isShortName'
  })
  isColloquial?: string;

  @property({
    type: 'boolean',
    name: 'isShortName'
  })
  isHistoric?: boolean;

  @property({
    type: 'string',
  })
  from?: string;

  @property({
    type: 'string',
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
