"use strict";

module.exports.getLambda = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Lambda is running",
        input: event,
      },
      null,
      2
    ),
  };
};
