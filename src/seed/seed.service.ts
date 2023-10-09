import { Injectable } from '@nestjs/common';
// import {AxiosInstance} from '/'
import axios, { AxiosInstance } from 'axios';
import { PokeResponce } from './interfaces/poke-response.interface';

@Injectable()
export class SeedService {
  private readonly axios: AxiosInstance = axios;


  async executeSeed() {
    const { data } = await this.axios.get<PokeResponce>('https://pokeapi.co/api/v2/pokemon?limit=2');
    data.results.forEach(({ name, url }) => {
      const segments = url.split('/');
      const no: number = + segments[segments.length - 2];
      console.log(name, no);
    });

    return data.results;


  }
}
