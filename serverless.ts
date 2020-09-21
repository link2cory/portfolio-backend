import type { Serverless } from "serverless/aws";

const serverlessConfiguration: Serverless = {
  frameworkVersion: "2.1.1",
  service: "apollo-lambda",
  provider: {
    name: "aws",
    runtime: "nodejs12.x",
    region: "us-west-2",
    environment: {
      NODE_ENV: "production",
    },
  },
  functions: {
    graphql: {
      handler: "src/index.handler",
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
  plugins: ["serverless-offline"],
};

module.exports = serverlessConfiguration;
