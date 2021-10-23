import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {OkDataSource} from '../datasources';
import {AlternatePlaces, AlternatePlacesRelations} from '../models';

export class AlternatePlacesRepository extends DefaultCrudRepository<
  AlternatePlaces,
  typeof AlternatePlaces.prototype.alternateNameId,
  AlternatePlacesRelations
> {
  constructor(
    @inject('datasources.ok') dataSource: OkDataSource,
  ) {
    super(AlternatePlaces, dataSource);
  }
}
