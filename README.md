# Discuss

Discuss is an app that allows you to see campaigns and you choose to join conversations that matters to you.

Basically,

  - View Campaigns
  - Join Campaign Conversations

### Note

The server side code lives in the `discuss` folder and the client side code is in `discuss/frontend`

To begin installation, clone this repository.

### Server Side Installation

```sh
$ cd discuss
$ // Copy `.env.sample` to `.env` and supply the values
$ npm install
$ npm test //To run API tests
$ npm run dev // To start API server
```

This runs on port 3000

### Client Side Installation
```sh
$ cd discuss/frontend
$ npm install
$ npm start // To start client server
$ npm test //To run client tests
```

### Todos
- Add component tests

### Continuous Deployment

CircleCI is deployed for continuous integration and deployment

### Heroku
Live deployment running on https://discause.herokuapp.com