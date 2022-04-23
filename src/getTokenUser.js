const AWS = require("aws-sdk");

const getTokenUser = async (event) => {
  try {
    const dynamodb = new AWS.DynamoDB.DocumentClient();

    const { userId } = event.pathParamethers;

    const result = await dynamodb
      .get({
        TableName: "TokensUser",
        Key: {
          userId,
        },
      })
      .promise();

    const userToken = result.Item;

    return {
      statusCode: 200,
      body: JSON.stringify(userToken)
    };
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getTokenUser,
};
