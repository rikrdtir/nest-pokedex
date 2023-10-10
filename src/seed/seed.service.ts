import { Injectable } from '@nestjs/common';
import { PokeResponce } from './interfaces/poke-response.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { AxiosAdapter } from 'src/common/adapters/axios.adapter';

@Injectable()
export class SeedService {

  constructor(
    @InjectModel(Pokemon.name)
    private readonly PokemonModel: Model<Pokemon>,
    private readonly http: AxiosAdapter,
  ) { }


  async executeSeed() {
    await this.PokemonModel.deleteMany({});

    const data = await this.http.get<PokeResponce>('https://pokeapi.co/api/v2/pokemon?limit=650');
    // const insertPromisesArray = [];
    const pokemonToInsert: { name: string, no: number }[] = [];

    data.results.forEach(({ name, url }) => {

      const segments = url.split('/');
      const no: number = +segments[segments.length - 2];

      // insertPromisesArray.push(this.PokemonModel.create({ name, no }));
      pokemonToInsert.push({ name, no });
    });
    // await Promise.all(insertPromisesArray);
    this.PokemonModel.insertMany(pokemonToInsert);

    return 'seed executed';


  }
}
