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
import {AlternatePlaces} from '../models';
import {AlternatePlacesRepository} from '../repositories';

export class AlternatePlacesController {
  constructor(
    @repository(AlternatePlacesRepository)
    public alternatePlacesRepository : AlternatePlacesRepository,
  ) {}

  @post('/alternate-places')
  @response(200, {
    description: 'AlternatePlaces model instance',
    content: {'application/json': {schema: getModelSchemaRef(AlternatePlaces)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AlternatePlaces, {
            title: 'NewAlternatePlaces',
            
          }),
        },
      },
    })
    alternatePlaces: AlternatePlaces,
  ): Promise<AlternatePlaces> {
    return this.alternatePlacesRepository.create(alternatePlaces);
  }

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

  @patch('/alternate-places')
  @response(200, {
    description: 'AlternatePlaces PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AlternatePlaces, {partial: true}),
        },
      },
    })
    alternatePlaces: AlternatePlaces,
    @param.where(AlternatePlaces) where?: Where<AlternatePlaces>,
  ): Promise<Count> {
    return this.alternatePlacesRepository.updateAll(alternatePlaces, where);
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

  @patch('/alternate-places/{id}')
  @response(204, {
    description: 'AlternatePlaces PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AlternatePlaces, {partial: true}),
        },
      },
    })
    alternatePlaces: AlternatePlaces,
  ): Promise<void> {
    await this.alternatePlacesRepository.updateById(id, alternatePlaces);
  }

  @put('/alternate-places/{id}')
  @response(204, {
    description: 'AlternatePlaces PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() alternatePlaces: AlternatePlaces,
  ): Promise<void> {
    await this.alternatePlacesRepository.replaceById(id, alternatePlaces);
  }

  @del('/alternate-places/{id}')
  @response(204, {
    description: 'AlternatePlaces DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.alternatePlacesRepository.deleteById(id);
  }
}
