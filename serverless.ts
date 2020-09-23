import type { Serverless } from "serverless/aws";

const serverlessConfiguration: Serverless = {
  frameworkVersion: "2.2.0",
  configValidationMode: "error",
  service: "apollo-lambda",
  provider: {
    name: "aws",
    runtime: "nodejs12.x",
    region: "us-west-2",
    environment: {
      SECRET_KEY: process.env.SECRET_KEY,
    },
  },
  functions: {
    graphql: {
      handler: "dist/index.handler",
      events: [
        {
          http: {
            path: "graphql",
            method: "post",
            cors: true,
          },
        },
        {
          http: {
            path: "graphql",
            method: "get",
          },
        },
      ],
    },
  },
  plugins: ["serverless-dotenv-plugin", "serverless-offline"],
  custom: {
    // this is required because the way that serverless-offline
    // instantiates and uses lambdas using multiple threads
    // is incompatible with graphql's schema verification logic
    // see https://github.com/graphql/graphql-js/issues/2801
    "serverless-offline": {
      useChildProcesses: true,
    },
    dotenv: {
      basePath: "./.env/",
    },
  },
};

module.exports = serverlessConfiguration;
