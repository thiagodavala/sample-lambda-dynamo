let AWS = require('aws-sdk');

exports.handler = async (event) => {
    var dynamoDb = new AWS.DynamoDB.DocumentClient();
    if (event.queryStringParameters && event.queryStringParameters.refund && event.queryStringParameters.game) {
        var params = {  
            TableName: 'unicorns',  
            Item: {
                "game": event.queryStringParameters.game,
                "refundId": event.queryStringParameters.refund
            } 
        }
        var result = await dynamoDb.put(params).promise();
    }
    const response = {
        statusCode: 200,
        body: "OK!",
    };
    return response;
};
