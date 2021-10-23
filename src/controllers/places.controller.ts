import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Places} from '../models';
import {PlacesRepository} from '../repositories';

export class PlacesController {
  constructor(
    @repository(PlacesRepository)
    public placesRepository : PlacesRepository,
  ) {}

  @post('/places')
  @response(200, {
    description: 'Places model instance',
    content: {'application/json': {schema: getModelSchemaRef(Places)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Places, {
            title: 'NewPlaces',
            
          }),
        },
      },
    })
    places: Places,
  ): Promise<Places> {
    return this.placesRepository.create(places);
  }

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

  @patch('/places')
  @response(200, {
    description: 'Places PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Places, {partial: true}),
        },
      },
    })
    places: Places,
    @param.where(Places) where?: Where<Places>,
  ): Promise<Count> {
    return this.placesRepository.updateAll(places, where);
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

  @patch('/places/{id}')
  @response(204, {
    description: 'Places PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Places, {partial: true}),
        },
      },
    })
    places: Places,
  ): Promise<void> {
    await this.placesRepository.updateById(id, places);
  }

  @put('/places/{id}')
  @response(204, {
    description: 'Places PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() places: Places,
  ): Promise<void> {
    await this.placesRepository.replaceById(id, places);
  }

  @del('/places/{id}')
  @response(204, {
    description: 'Places DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.placesRepository.deleteById(id);
  }
}