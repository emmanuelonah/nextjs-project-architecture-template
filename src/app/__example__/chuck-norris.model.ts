import { throwError } from 'utils';
import { publicHttpServices } from 'services';
import { ChuckNorrisJokeResponse } from 'ChuckNorrisTypes';

export class ChuckNorrisModel {
  public static async getRandomJoke() {
    try {
      const response = await publicHttpServices.httpGetRequest<ChuckNorrisJokeResponse>('jokes/random');
      return response.data;
    } catch (_error) {
      // error json response are not sent from the server(https://api.chucknorris.io/), rather
      //they send a html document file. So we have to throw a custom error here.
      throwError('GET_RANDOM_JOKE_ERROR', 'Failed to get random joke', ChuckNorrisModel.getRandomJoke);
    }
  }
}
