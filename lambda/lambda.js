exports.lambdaHandler = async (event, context) => {
  return 'Hello from the lambda handler';
};

/**
 * sam command to spin up the lambda :
 * sam local invoke -e ./lambda/lambda_event.json LambdaDemoFunction
 * invokes the lambda with an event (e)
 * it gives a path to the event
 * and then we give the name of the lambda called ApiGatewayFunction
 */
