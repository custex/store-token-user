const AWS = require("aws-sdk");

const getTokenUsers = async (event) => {
  try {
    const dynamodb = new AWS.DynamoDB.DocumentClient();

    const result = await dynamodb
      .scan({
        TableName: "TokensUser",
      })
      .promise();

    const userTokens = result.Items;

    return {
      statusCode: 200,
      body: JSON.stringify(userTokens),
    };
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getTokenUsers,
};
