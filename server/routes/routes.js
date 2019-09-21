import AttendeeController from '../controllers/attendee.controller';
import TalkController from '../controllers/talk.controller';

const Route = (logger, router) => {  
  router.post('/attendee', AttendeeController.create);
  router.post('/talk', TalkController.create);
  
  return router;
}

export default Route;