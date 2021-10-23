import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
  response,
} from '@loopback/rest';
import {Places} from '../models';
import {PlacesRepository} from '../repositories';

export class PlacesController {
  constructor(
    @repository(PlacesRepository)
    public placesRepository : PlacesRepository,
  ) {}

  @get('/places/count')
  @response(200, {
    description: 'Places model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Places) where?: Where<Places>,
  ): Promise<Count> {
    return this.placesRepository.count(where);
  }

  @get('/places')
  @response(200, {
    description: 'Array of Places model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Places, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Places) filter?: Filter<Places>,
  ): Promise<Places[]> {
    return this.placesRepository.find(filter);
  }


  @get('/places/{id}')
  @response(200, {
    description: 'Places model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Places, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Places, {exclude: 'where'}) filter?: FilterExcludingWhere<Places>
  ): Promise<Places> {
    return this.placesRepository.findById(id, filter);
  }

}
