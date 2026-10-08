# Part 1 — REST & HTTP Design Review

<!-- FORMAT -->
<!-- <n>. <METHOD> <path> | <status code> | <one-sentence reason> -->
<!-- For example: 0. PUT /venues/3 | 200 | Replaces the whole venue record.  -->

1. GET /getEvents | 200 | Returns all the events in the record.

2. DELETE /events/42/delete | 204 | Deletes event 42 and returns status code 204 with an empty body.

3. PUT /events/42/cancel | 200 | Cancels event 42 by setting its status to "cancelled" and returns 200.

4. POST /events | 201 | Create an event and returns 201 on successful creation of new event.

5. POST /events | 400 | Returns 400 (bad request) on creating an event without title filed missing.

6. GET /events/9999 | 404 | Returns 404 with unknown path error.

7. PUT /events/42 | 200 | Updates all the fields and returns 200.

8. GET /events/city/Paris | 200 | Returns only the events in the city of Paris.

9. POST /users | 400 | Returns 400 (bad request) with a message that this email is already registered.

10. GET /reports | 500 | Returns 500 with NULL body.
