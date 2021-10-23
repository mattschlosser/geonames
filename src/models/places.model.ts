import {Entity, model, property} from '@loopback/repository';

@model()
export class Places extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
    required: true,
  })
  geonameid: number;

  @property({
    type: 'string',
  })
  name?: string;

  @property({
    type: 'string',
  })
  asciiname?: string;

  @property({
    type: 'string',
  })
  alternatenames?: string;

  @property({
    type: 'string',
  })
  latitude?: string;

  @property({
    type: 'string',
  })
  longitude?: string;

  @property({
    type: 'string',
  })
  featureClass?: string;

  @property({
    type: 'string',
  })
  featureCode?: string;

  @property({
    type: 'string',
  })
  countryCode?: string;

  @property({
    type: 'string',
  })
  cc2?: string;


  constructor(data?: Partial<Places>) {
    super(data);
  }
}

export interface PlacesRelations {
  // describe navigational properties here
}

export type PlacesWithRelations = Places & PlacesRelations;
