import AttendeeController from '../controllers/attendee.controller';

const Route = (logger, router) => {  
  router.post('/attendee', AttendeeController.create);
  
  return router;
}

export default Route;