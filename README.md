# Q Hiring Hapi
Clone the project and run the following

`$ npm install sequelize-cli -g`

`$ npm install`

#### Note: Node version should be >= 8.9.0

## For database configure your postgres username & password in '.config/config.json' file.

`$ sequelize db:create`

`$ sequelize db:migrate`

Fire up application using

start application - `$npm start`

To run the seed data - `$ sequelize db:seed all`

## To configure Test db, run 

`$ sequelize db:create --env=test`
 
`$ sequelize db:migrate --env=test`

## To run test cases 

`$ npm run test-watch`

## Authentication

 Done using https://github.com/dwyl/hapi-auth-jwt2
 
 Redis https://github.com/NodeRedis/node_redis

## API Documentation

### Registration

  `http://localhost:3001/register`

  #### Request: POST

  ```
  {
    "firstname":"venkat",
    "lastname":"v",
    "email":"venkat@qwinix.io",
    "college":"vvce",
    "branch":"IS",
    "yearofpassing":"2013",
    "batch":"B1",
    "city":"Mysuru",
    "phone":"9999112345",
    "password":"Password@1",
    "passwordconfirmation":"Password@1"
  }
  ```

### Login

  `http://localhost:3001/login`

  #### Request: POST

  ```
  {
    "email":"pmenon@qwinix.io",
    "password":"Password@1"
  }
  ```

### INSTRUCTIONS

  `http://localhost:3001/instruction`

  Request 
  ### GET
  
  Send Authorization and Email in headers

### SUBMIT SECTION RESULTS

  `http://localhost:3001/results`

  #### Request: GET
  
  Send Authorization and Email in headers

  ```
  {
    "exam":{"section":"logical",
    "section_number":1,
    "user_email":"pmenon@qwinix.io",
    "user_id":"1",
    "answers":[
      {
        "id":380,
        "title":"Pick the odd one out",
        "options":["Mars", "Jupiter", "Sun", "Earth"],
        "user_answer":"Mars"
      },
      {
        "id":202,
        "title":"Based on the following statements, which is the correct conclusion drawn. \n\nOnly gentlemen can become members of the club. Many of the members of the club are officers. Some of the officers have been invited for dinner. ",
        "options":["All the members of the club have been invited for dinner\n", "All gentlemen are members of the club", "Some of the officers are not gentlemen\n", "Only gentlemen have been invited for dinner\n"],
        "user_answer":"All the members of the club have been invited for dinner\n"
      },
      {
        "id":385,
        "title":"Pick the odd one out",
        "options":["Banana", "Orange", "Malta", "Pineapple"],
        "user_answer":"Malta"
      },
      {
        "id":308,
        "title":"It's been the first day of the school when a young girl was found raped and murdered. Police suspect four male teachers as on the killer and ask them what they were doing in the morning in time 8:00 am.\n\nWayne: I was reading the newspaper.\nTerry: I was checking chemistry papers\nBridge: I had locked myself in my room as my wife left me.\nCole: I dropped my wife to her office.\n\nWho is the killer?",
      "options":["Wayne", "Terry", "Bridge", "Cole"],
      "user_answer":"Wayne"},
      {
        "id":302,
        "title":"The town of Paranda is located on Gree lake. The town of Akram is West of Paranda. Tokhada is East of Akram but West of Paranda. Kokran is East of Bopri but West of Tokhada and Akram. If they are all in the same district, which town is the farthest West?",
        "options":["Paranda","Kokran", "Bopri", "Tokhada"],
        "user_answer":"Kokran"
      }]
    }
  }
  ```

### SUBMIT FEEDBACK

  `http://localhost:4200/assets/feedback`

  #### Request: POST

  Send Authorization and Email in headers

  ```
  {
    "feedback":[
      {
        "id":"1",
        "title":"Overall Experience",
        "label":"overall",
        "options":["Excllent", "Good", "Poor"],
        "user_answer":"Excllent"
      },
      {
        "id":"2",
        "title":"Verbal Section",
        "label":"verbal",
        "options":["Easy", "Medium", "Hard"],
        "user_answer":"Easy"
      },
      {
        "id":"3",
        "title":"Logical Section",
        "label":"logical",
        "options":["Easy", "Medium", "Hard"],
        "user_answer":"Easy"
      },
      {
        "id":"4",
        "title":"Quantitative Section",
        "label":"quantitative",
        "options":["Easy", "Medium", "Hard"],
        "user_answer":"Medium"
      }
    ],
    "email":"pmenon@qwinix.io",
    "description":"THE EXAM WAS EASY",
    "user_id":"1"
  }
  ```

### LOGOUT

  `http://localhost:3001/logout/{user_id}`

  #### Request: DELETE
  
  Send Authorization and Email in headers

### GET USER DETAILS FOR ADMIN

  `http://localhost:3001/users`

  #### Request: GET
  
  Send Authorization and Email in headers

### SWAGGER

 `http://localhost:3001/documentation`

 Reference: 

  `https://www.npmjs.com/package/hapi-swagger`



  testing 1

  testing 2