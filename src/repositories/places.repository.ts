import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {OkDataSource} from '../datasources';
import {Places, PlacesRelations, AlternatePlaces} from '../models';
import {AlternatePlacesRepository} from './alternate-places.repository';

export class PlacesRepository extends DefaultCrudRepository<
  Places,
  typeof Places.prototype.geonameid,
  PlacesRelations
> {

  public readonly alternatePlaces: HasManyRepositoryFactory<AlternatePlaces, typeof Places.prototype.geonameid>;

  constructor(
    @inject('datasources.ok') dataSource: OkDataSource, @repository.getter('AlternatePlacesRepository') protected alternatePlacesRepositoryGetter: Getter<AlternatePlacesRepository>,
  ) {
    super(Places, dataSource);
    this.alternatePlaces = this.createHasManyRepositoryFactoryFor('alternatePlaces', alternatePlacesRepositoryGetter,);
    this.registerInclusionResolver('alternatePlaces', this.alternatePlaces.inclusionResolver);
  }
}
