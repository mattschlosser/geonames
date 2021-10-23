import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Places,
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

  @post('/places/{id}/alternate-places', {
    responses: {
      '200': {
        description: 'Places model instance',
        content: {'application/json': {schema: getModelSchemaRef(AlternatePlaces)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Places.prototype.geonameid,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AlternatePlaces, {
            title: 'NewAlternatePlacesInPlaces',
            exclude: ['alternateNameId'],
            optional: ['geonameid']
          }),
        },
      },
    }) alternatePlaces: Omit<AlternatePlaces, 'alternateNameId'>,
  ): Promise<AlternatePlaces> {
    return this.placesRepository.alternatePlaces(id).create(alternatePlaces);
  }

  @patch('/places/{id}/alternate-places', {
    responses: {
      '200': {
        description: 'Places.AlternatePlaces PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AlternatePlaces, {partial: true}),
        },
      },
    })
    alternatePlaces: Partial<AlternatePlaces>,
    @param.query.object('where', getWhereSchemaFor(AlternatePlaces)) where?: Where<AlternatePlaces>,
  ): Promise<Count> {
    return this.placesRepository.alternatePlaces(id).patch(alternatePlaces, where);
  }

  @del('/places/{id}/alternate-places', {
    responses: {
      '200': {
        description: 'Places.AlternatePlaces DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(AlternatePlaces)) where?: Where<AlternatePlaces>,
  ): Promise<Count> {
    return this.placesRepository.alternatePlaces(id).delete(where);
  }
}
