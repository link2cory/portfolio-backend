import type { Serverless } from "serverless/aws";

const serverlessConfiguration: Serverless = {
  frameworkVersion: "2.1.0",
  service: "apollo-lambda",
  provider: {
    name: "aws",
    runtime: "nodejs12.x",
    region: "us-west-2",
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
  plugins: ["serverless-offline", "serverless-plugin-typescript"],
};

module.exports = serverlessConfiguration;
