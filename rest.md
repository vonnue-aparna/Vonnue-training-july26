<1> GET/getEvents |200| Returns all the records from the database without filter

<2>  POST/events/42/delete |400| POST method is not used for delete DELETE is used with the status code 204 (so its a bad request-400)

<3> GET/events/42/cancel |200| User called the events 42 and cancelled which is a success state

<4> POST/events|201| Successfully creates a new Event

<5> POST/events|400| Created without title returns bad Request 

<6>GET/events/9999|404| Get event 9999 should return 404 error 

<7>PUT/events/42 |200|Updates the event with the {"title":"New title"}

<8> GET/events/city/Paris| 200 | Returns Events of Paris ,Does not filter the events only held in paris "/events/city="Paris"/"

<9> POST/users|402| Posting with the already registered email returns authentication problem

<10> GET/reports |401|Getting reports with no Authorization header returns Authentication issue(401- Error)