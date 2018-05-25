# Algolia technical test - Inferno - Backend

## Assignement

Build a **straightforward** MVC framework able to route an HTTP query and send the response.

The framework **does not** need to handle more than what is required for the app.

The REST API needs to implement the following endpoints:
  - `POST /api/1/apps` => Add an app (as a JSON object) to the Algolia `apps` index and return its `id`
  - `DELETE /api/1/apps/:id` => Delete an app from the Algolia index

You can use any technology for this.

There's no need for a UI on top of the REST API. If you still feel like doing it for your own tests that's ok 👌.

## Project

### Requirements

To get started, you'll need the [Serverless Framework](https://serverless.com/framework/docs/providers/aws/guide/quick-start/) installed.

You'll also need your environment configured with [AWS credentials](https://serverless.com/framework/docs/providers/aws/guide/credentials/).

Finally grab an [Algolia](https://www.algolia.com/users/sign_up) account, add an index loaded with data (./sample-data/z_data.json) and set your API credentials (./environment/config.ts - check the .sample example)to access the index.

You'll also need typescript.
````
npm install -g typescript
````

### Configure environment variable

Copy `environment/config.ts.sample` and put your Algolia credentials in a new `environment/config.ts` file.

### Install packages

````
npm install
````

### Build

Build
````
npm run build
````

Or launch a watcher to build your change live
````
npm run start
````

### Run local development

````
npm run dev
````

### Deploy to remote

````
npm run deploy
````

### ⚠️ Tests 

⚠️ Some tests are directly hitting the algolia index, the index will be mocked later.

If you want to test without hitting the index, only run the appValidator.test.ts
````
npx mocha -g 'appValidator' --recursive     
````

You can also run all the tests. However I strongly recommand using a throwaway algolia index.
````
npm run test
````

### Live version
https://nln236v80d.execute-api.eu-west-3.amazonaws.com/dev

You can use [Postman](https://www.getpostman.com/) to interact with the API.

### TODO

- Add Update
- Should we prevent posting duplicated app name / link or image