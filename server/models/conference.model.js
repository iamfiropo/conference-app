import { CONFERENCE } from '../utils/data/conference';
import Model from './model'; 
import Response from '../utils/helpers/response';

class ConferenceModel extends Model {

  async create() {
    try {
      const conference = this.payload;
      await this.save(CONFERENCE, conference);
    } catch(error) {
      return Response.handleError(500, error.toString());
    }
  }
}

export default ConferenceModel;