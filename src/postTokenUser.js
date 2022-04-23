const AWS = require("aws-sdk");

const postTokenUser = async (event) => {
  try {
    const dynamodb = new AWS.DynamoDB.DocumentClient();

    const { userId, token } = event.body;

    const newToken = {
      userId,
      token,
    };

    await dynamodb
      .put({
        TableName: "TokensUser",
        Item: newToken,
      })
      .promise();

    return {
      statusCode: 200,
      body: JSON.stringify(newToken),
    };
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  postTokenUser,
};
