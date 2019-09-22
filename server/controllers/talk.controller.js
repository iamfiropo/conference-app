import AttendeeModel from '../models/attendee.model';
import Response from '../utils/helpers/response';
import { TALKS } from '../utils/data/talk';

class TalkController {

  static async create(req, res) {
    try {
      const talk = req.body;
      console.log('****************', talk);
      talk.id = TALKS.length + 1; 
      talk.created_on = new Date();
      const newTalk = new AttendeeModel({ ...talk });
      newTalk.create();
      return Response.handleSuccess(201, 'Successfully Created', newTalk.result, res);
    } catch (error) {
      return Response.handleError(500, error.toString(), res);
    }
  }
  
}

export default TalkController;