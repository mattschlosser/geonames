import {
  Filter,
  repository,
} from '@loopback/repository';
import {
  get,
  getModelSchemaRef,
  param,
} from '@loopback/rest';
import {
  AlternatePlaces,
} from '../models';
import {PlacesRepository} from '../repositories';

export class PlacesAlternatePlacesController {
  constructor(
    @repository(PlacesRepository) protected placesRepository: PlacesRepository,
  ) { }

  @get('/places/{id}/alternate-places', {
    responses: {
      '200': {
        description: 'Array of Places has many AlternatePlaces',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(AlternatePlaces)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<AlternatePlaces>,
  ): Promise<AlternatePlaces[]> {
    return this.placesRepository.alternatePlaces(id).find(filter);
  }

}
