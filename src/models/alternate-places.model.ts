import {Entity, model, property} from '@loopback/repository';

@model()
export class AlternatePlaces extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  alternateNameId?: number;

  @property({
    type: 'number',
    required: true,
  })
  geonameid: number;

  @property({
    type: 'string',
  })
  isoLanguage?: string;

  @property({
    name: 'alternate name',
    type: 'string',
  })
  alternateName?: string;

  @property({
    type: 'string',
  })
  isPreferredName?: string;

  @property({
    type: 'string',
  })
  isShortName?: string;

  @property({
    type: 'string',
  })
  isColloquial?: string;

  @property({
    type: 'boolean',
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
