import ConferenceModel from '../models/conference.model';
import Response from '../utils/helpers/response';
import { CONFERENCE } from '../utils/data/conference';

class ConferenceController {

  static async create(req, res) {
    try {
      const conference = req.body;
      conference.id = CONFERENCE.length + 1; 
      conference.created_on = new Date();
      const newConference = new ConferenceModel({ ...conference });
      newConference.create();
      return Response.handleSuccess(201, 'Successfully Created', newConference.result, res);
    } catch (error) {
      return Response.handleError(500, error.toString(), res);
    }
  }
  
}

export default ConferenceController;