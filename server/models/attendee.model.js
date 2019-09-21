import { ATTENDEES } from '../utils/data/attendee';
import Model from './model'; 
import Response from '../utils/helpers/response';

class AttendeeModel extends Model {

  async create() {
    try {
      const attendee = this.payload;
      await this.save(ATTENDEES, attendee);
    } catch(error) {
      return Response.handleError(500, error.toString());
    }
  }
}

export default AttendeeModel;