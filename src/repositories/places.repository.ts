import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {OkDataSource} from '../datasources';
import {Places, PlacesRelations} from '../models';

export class PlacesRepository extends DefaultCrudRepository<
  Places,
  typeof Places.prototype.geonameid,
  PlacesRelations
> {
  constructor(
    @inject('datasources.ok') dataSource: OkDataSource,
  ) {
    super(Places, dataSource);
  }
}
