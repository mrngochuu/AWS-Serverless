// import { APIGatewayProxyHandler, APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import 'source-map-support/register'
import * as express from 'express';
import * as awsServerlessExpress from "aws-serverless-express";
import { getAllGroups } from "../../businessLogic/groups";

const app = express()

app.get('/groups',async (req, res) => {
  console.log('Request param', req)
  const groups = await getAllGroups()

  res.json({
    items: groups
  })
})

const server = awsServerlessExpress.createServer(app)
exports.handler = (event, context) => {
  awsServerlessExpress.proxy(server, event, context)
}

// export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
//   console.log('Processing event: ', event)

//   const groups = await getAllGroups()

//   return {
//     statusCode: 200,
//     headers: {
//       'Access-Control-Allow-Origin': '*'
//     },
//     body: JSON.stringify({
//       items: groups
//     })
//   }
// }
