# everyone_eats

## API EndPoints

| Description       | Method | Route              |
| ----------------- | ------ | ------------------ |
| Get all users     | GET    | /api/users         |
| Get user by id    | GET    | /api/user/:id      |
| Create user       | POST   | /api/users         |
| Edit user         | PUT    | /api/users/:id     |
| Delete user       | DELETE | /api/users/:id     |
| Get all donations | GET    | /api/donations     |
| Get donation by   | GET    | /api/donations/:id |
| Create donation   | POST   | /api/donations     |
| Edit donation     | PUT    | /api/donations/:id |
| Delete donation   | DELETE | /api/donations/:id |

## **Get all users**

_Retrieves all users, only users of a particular type if it is specified in the query string._

- **URL**

  /api/users

- **Method:**

  `GET`

- **URL Params**

  None

* **Request Body**

  None

- **Query Strings**

  optional:

  limit: Number,
  offset: Number,
  type: String ('donor', 'charity')

* **Sample Call:**

  axios.get('/api/users/?type=donor&offset=0&limit=25')

## **Get user**

_Retrieves a user by id._

- **URL**

  /api/users/:id

- **Method:**

  `GET`

- **URL Params**

  users id

  - **Request Body**

  None

* **URL Query Strings**

  None

- **Sample Call:**

  axios.get('/api/users/5e48c66020f1e5257ba9cf8f')

## **Create User**

_Creates a new user_

- **URL**

  /api/users/

- **Method:**

  `POST`

- **URL Params**

  None

  - **Request Body**

  {
  type: String (required),
  companyName: String (required),
  description: String (required),
  address: String (required),
  position: {lat: Number, long: Number} (required),
  pointOfContact: {name: String, email: String, phoneNumber: String} (required),
  score: Number
  }

* **URL Query Strings**

  None

- **Sample Call:**

  axios.post('/api/users/5e48c66020f1e5257ba9cf8f', {type: 'donor', companyName: 'Test Co', description: 'We sell things', address: '1234 Market Street, San Francisco, CA, 94117', position: {lat: 45, long: 34}, pointOfContact: {name: 'Jane Doe', email: 'jdoe@generic.com, phoneNumber: '4154221234'}, score: 0})

## **Update User**

_Update a new user_

- **URL**

  /api/users/:id

- **Method:**

  `PUT`

- **URL Params**

  user id

  - **Request Body**

  {
  type: String,
  companyName: String,
  description: String,
  address: String,
  position: {lat: Number, long: Number},
  pointOfContact: {name: String, email: String, phoneNumber: String},
  score: Number
  }

* **URL Query Strings**

  None

- **Sample Call:**

  axios.put('/api/users/5e48c66020f1e5257ba9cf8f', {score: 30})

## **Delete User**

_Delete a new user_

- **URL**

  /api/users/:id

- **Method:**

  `DELETE`

- **URL Params**

  User Id

  - **Request Body**

  None

* **URL Query Strings**

  None

- **Sample Call:**

  axios.delete('/api/users/5e48c66020f1e5257ba9cf8f')

## **Get all donations**

_Retrieves all donations._

- **URL**

  /api/donations

- **Method:**

  `GET`

- **URL Params**

  None

* **Request Body**

  None

- **Query Strings**

  All query strings optional

  offset: Number,
  limit: Number

* **Sample Call:**

  axios.get('/api/donations/?limit=15&offset=0')

## **Get Donation**

_Retrieves a user by id._

- **URL**

  /api/donation/:id

- **Method:**

  `GET`

- **URL Params**

  users id

  - **Request Body**

  None

* **URL Query Strings**

  None

- **Sample Call:**

  axios.get('/api/users/5e48c66020f1e5257ba9cf8f')
