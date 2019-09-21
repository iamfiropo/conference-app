import { TALKS } from '../utils/data/talk';
import Model from './model'; 
import Response from '../utils/helpers/response';

class TalkModel extends Model {

  async create() {
    try {
      const talk = this.payload;
      await this.save(TALKS, talk);
    } catch(error) {
      return Response.handleError(500, error.toString());
    }
  }
}

export default TalkModel;