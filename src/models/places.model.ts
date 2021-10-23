import {Entity, model, property, hasMany} from '@loopback/repository';
import {AlternatePlaces} from './alternate-places.model';

@model()
export class Places extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
    required: true,
    description: "integer id of record in geonames database"
  })
  geonameid: number;

  @property({
    type: 'string',
    description: "name of geographical point (utf8)"
  })
  name?: string;

  @property({
    type: 'string',
    description: "name of geographical point in plain ascii characters"
  })
  asciiname?: string;

  @property({
    type: 'string',
    description: "alternatenames, comma separated, ascii names automatically transliterated, convenience attribute from alternatename table"
  })
  alternatenames?: string;

  @property({
    type: 'string',
    description: "latitude in decimal degrees (wgs84)"
  })
  latitude?: string;

  @property({
    type: 'string',
    description: "longitude in decimal degrees (wgs84)"
  })
  longitude?: string;

  @property({
    type: 'string',
    name: 'feature class',
    description: "see http://www.geonames.org/export/codes.html"
  })
  featureClass?: string;

  @property({
    type: 'string',
    name: 'feature code',
    description: "see http://www.geonames.org/export/codes.html"
  })
  featureCode?: string;

  @property({
    type: 'string',
    name: 'country code',
    description: "ISO-3166 2-letter country code"
  })
  countryCode?: string;

  @property({
    type: 'string',
    description: "alternate country codes, comma separated, ISO-3166 2-letter country code"
  })
  cc2?: string;


  @property({
    type: 'string',
    name: 'admin1 code',
    description: "fipscode (subject to change to iso code), see exceptions below, see file admin1Codes.txt for display names of this code;"
  })
  admin1Code?: string;

  @property({
    type: 'string',
    name: 'admin2 code',
    description: "code for the second administrative division, a county in the US, see file admin2Codes.txt;"
  })
  admin2Code?: string;

  @property({
    type: 'string',
    name: 'admin3 code',
    description: "code for third level administrative division"
  })
  admin3Code?: string;

  @property({
    type: 'string',
    name: 'admin4 code',
    description: "code for fourth level administrative division"
  })
  admin4Code?: string;

  @property({
    type: 'string',
  })
  population?: number;


  @property({
    type: 'string',
    description: "in meters"
  })
  elevation?: string;

  @property({
    type: 'string',
    description: "digital elevation model, srtm3 or gtopo30, average elevation of 3''x3'' (ca 90mx90m) or 30''x30'' (ca 900mx900m) area in meters, integer. srtm processed by cgiar/ciat."
  })
  dem?: string;

  @property({
    type: 'string',
    description: "the iana timezone id (see file timeZone.txt)"
  })
  timezone?: string;

  @property({
    type: 'string',
    name: 'modification date',
    description: "date of last modification in yyyy-MM-dd format"
  })
  modificationDate?: string;

  @hasMany(() => AlternatePlaces, {keyTo: 'geonameid'})
  alternatePlaces: AlternatePlaces[];

  constructor(data?: Partial<Places>) {
    super(data);
  }
}

export interface PlacesRelations {
  // describe navigational properties here
}

export type PlacesWithRelations = Places & PlacesRelations;
