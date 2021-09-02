exports.lambdaHandler = async (event, context) => {
  // capture the data from the queryStringParameter and log it out
  console.log(event.queryStringParameters.foo);
  return 'hello from api gateway';
};

/**
 * sam command to spin up the api gateway :
 * sam local invoke -e ./apigateway/apigateway_event.json ApiGatewayFunction
 * sam local start-api
 * it gives a path to the event
 * and then we give the name of the lambda called ApiGatewayFunction
 */
