# dscku-data-api
DSCKU data api

#### members endpoints
| Action| Endpoint | Functionality | 
|----------|----------|---------------|
| GET | `/api/public/members`  | Get all members|
<!-- | POST | `/api/v1/posts`  | add a post|
| GET | `/api/v1/posts/<int:post_id>`  | Get a single post|
| PUT | `/api/v1/posts/<int:post_id>`  | EDIT a post|
| DELETE | `/api/v1/posts/<int:post_id>`  | Delete a post| -->

#### original (private) schema: 🔒
```json
"members": [
        {
            "username": "Chris Brown",
            "phone": "0700XXXXXX",
            "email": "chrisweezy@atlanticrecords.us",
            "course": "Computer Science",
            "year": "3",
            "interests": [
                "WEB",
                "MACHINE_LEARNING"
            ]
        }
    ]
```
## NOTICE ⚠️
- Due to privacy concern, each member is assigned a unique `membership_id` to replace confidential details:  `username`, `phone` and `email`
#### public available schema: 🆓
```json
  {
    "membership_id": "memb75876",
    "course": "Computer Science",
    "year": "3",
    "interests": [
        "WEB",
        "MACHINE_LEARNING"
        ]
  }
```

### Prerequisites
- Node 8 or greater version
- Git

### Set up:
Setting up the app locally.
- Clone the repo
`git clone https://github.com/DSCKenyattaUniversity/dscku-data-api.git`
- install the dependencies.
`npm install`
- Run app locally by starting the server
`nodemon server.js`