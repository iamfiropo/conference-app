import AttendeeModel from '../models/attendee.model';
import Response from '../utils/helpers/response';
import { ATTENDEES } from '../utils/data/attendee';

class AttendeeController {

  static async create(req, res) {
    try {
      const attendee = req.body;
      attendee.id = ATTENDEES.length + 1; 
      attendee.created_on = new Date();
      const newAttendee = new AttendeeModel({ ...attendee });
      newAttendee.create();
      return Response.handleSuccess(201, 'Successfully Created', newAttendee.result, res);
    } catch (error) {
      return Response.handleError(500, error.toString(), res);
    }
  }
  
}

export default AttendeeController;