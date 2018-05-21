# Algolia technical test - Inferno - Backend

## Assignement

Build a straightforward MVC framework able to route an HTTP query and send the response.

The framework does not need to handle more than what is required for the app.

The REST API needs to implement the following endpoints:

POST /api/1/apps => Add an app (as a JSON object) to the Algolia apps index and return its id
DELETE /api/1/apps/:id => Delete an app from the Algolia index
You can use any technology for this.

There's no need for a UI on top of the REST API. If you still feel like doing it for your own tests that's ok 👌.

## Project

### Requirements

To get started, you'll need the [Serverless Framework](https://serverless.com/framework/docs/providers/aws/guide/quick-start/) installed.
You'll also need your environment configured with [AWS credentials](https://serverless.com/framework/docs/providers/aws/guide/credentials/).

You'll also need typescript.

````
npm install -g typescript
````

### Install

````
npm install
````

### Build

Build
````
tsc -p tsconfig.json
````

Or watch
````
tsc -w -p tsconfig.json
````

### Local development

````
sls offline start
````

### Deploy

````
sls deploy
````

### Tests

Coming soon

### Live version
https://nln236v80d.execute-api.eu-west-3.amazonaws.com/dev
