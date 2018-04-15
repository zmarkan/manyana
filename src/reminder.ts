import { APIGatewayEvent, Callback, Context, Handler } from 'aws-lambda';
import { send } from './emailer/emailer';

export const morning: Handler = (event: APIGatewayEvent, context: Context, cb: Callback) => {

    send("zan", "sub", "body");
  
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!',
        input: event,
      }),
    };
  
    cb(null, response);
  }