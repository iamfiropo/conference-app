import AttendeeController from '../controllers/attendee.controller';
import TalkController from '../controllers/talk.controller';
import ConferenceController from '../controllers/conference.controller';

const Route = (logger, router) => {  
  
  router.post('/attendee', AttendeeController.create);
  router.post('/talk', TalkController.create);
  router.post('/conference', ConferenceController.create);
  
  return router;
}

export default Route;