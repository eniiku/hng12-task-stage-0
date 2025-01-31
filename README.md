# HNG12 STAGE 0 TASK

This project very simply retrieves basic info (e.g, registered HNG email, current datetime, and the github URL of this project) as a response froma public API.

## HOW TO RUN THIS PROJECT LOCALLY

1. Clone this project, and navigate to the project's directory.

```
git clone https://github.com/eniiku/hng12-task-stage-0.git
cd hng12-task-stage-0
```

2. Install the required dependencies, and start the project.

```
pnpm i && pnpm run start
```

This project should now be available locally at `localhost:3000/`

## API Docs

All API routes are prepended with the prefix - `/api/v1`

<details>
  <summary><code>GET</code> <code><b>/details</b></code> <code>(gets basic information)</code></summary>

##### Parameters

> None

##### Responses

> | http code | content-type       | response                                                                                                                     |
> | --------- | ------------------ | ---------------------------------------------------------------------------------------------------------------------------- |
> | `200`     | `application/json` | `{"email":"email@domain.com","current_datetime":"2025-01-31T21:21:47.867Z","github_url":"https://github.com/username/repo"}` |

##### Example cURL

> ```javascript
>  curl -X GET -H "Content-Type: application/json" http://localhost:3000/api/v1/details
> ```

</details>

[Nodejs developer]("https://hng.tech/hire/nodejs-developers")
