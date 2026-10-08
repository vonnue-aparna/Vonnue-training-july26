# REST & HTTP Desgin Review

| `<n>. <METHOD> <path>`         |    `<status code>` | `<one-sentence-reason>` |
| -------------------------------| ----------------- | -------------------------|
| 1. GET      `/getevents`          |       200         |      URL paths does not support capital letters (atleast not a proper convention), so use `getevents` Instead of getEvents |
| 2. `DELETE`   /events/42   |       `204`       |       For Successful deletetion the correct status code is `204` and it must be a `DELETE` Method of the path `/events/:id`. |
| 3. PATCH    `/events/42`   |       200         |       To `modify` the data in a Relation (*Like status*) , you should rely on a `PATCH` Method and send data over a body instead of passign through `URL`. | 
| 4. POST     /events             |       `201`       |       For a succesfull POST method, the status code must be `201` |
| 5. POST     /events             |       `400`       |       Since the title field is missing, The status code must be `400`,indicating the `client-side-error` of sending invalid body. |
| 6. GET      /events/9999        |       `404`       |       Since the id 9999 is invalid, This can be considered as a `client-side-error`  and instead of a null object, a json body `{error : "Invalid id"}` can be returned with a status code of `404`. | 
| 7. PUT      /events/42          |       200         |       Both PUT and `PATCH` can be used to modify records,But in this scenario since `the entire record is not replaced`, you should use a `PATCH` method instead of `PUT`. | 
| 8. GET `/events?city=Paris`      |       `200`       |       This is a proper usage of a GET Method, but a status code of `200` must be returned if events are fetched (If no events are fetched a empty Array can be returned) and if `Paris` is a invalid city return a `404` Error with data passed as a url parameter instead of `/:id`. |
| 9. POST /users                  |       `409`       |       Since the email already exists, registration must fail with a `409` status code. |
| 10. GET /reports                |       `401`       |       Since the authorization header itself is absent, Return a `401` status code instead `403` which stand for **forbidden-access** and not invalid header |

