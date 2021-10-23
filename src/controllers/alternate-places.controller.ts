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
import {AlternatePlaces} from '../models';
import {AlternatePlacesRepository} from '../repositories';

export class AlternatePlacesController {
  constructor(
    @repository(AlternatePlacesRepository)
    public alternatePlacesRepository : AlternatePlacesRepository,
  ) {}


  @get('/alternate-places/count')
  @response(200, {
    description: 'AlternatePlaces model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(AlternatePlaces) where?: Where<AlternatePlaces>,
  ): Promise<Count> {
    return this.alternatePlacesRepository.count(where);
  }

  @get('/alternate-places')
  @response(200, {
    description: 'Array of AlternatePlaces model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(AlternatePlaces, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(AlternatePlaces) filter?: Filter<AlternatePlaces>,
  ): Promise<AlternatePlaces[]> {
    return this.alternatePlacesRepository.find(filter);
  }


  @get('/alternate-places/{id}')
  @response(200, {
    description: 'AlternatePlaces model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(AlternatePlaces, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(AlternatePlaces, {exclude: 'where'}) filter?: FilterExcludingWhere<AlternatePlaces>
  ): Promise<AlternatePlaces> {
    return this.alternatePlacesRepository.findById(id, filter);
  }

}
