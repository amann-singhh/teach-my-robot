/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	GEMINI_API_KEY
Amplify Params - DO NOT EDIT */

const axios = require('axios');

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
  try {
    const body = JSON.parse(event.body);
    const userMessage = body.userMessage;
    const apiKey = process.env.GEMINI_API_KEY;
    const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';

    const response = await axios.post(
      `${GEMINI_API_URL}?key=${apiKey}`,
      {
        contents: [
          {
            role: 'user',
            parts: [{ text: userMessage }]
          }
        ]
      }
    );

    return {
      statusCode: 200,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({ reply: response.data.candidates?.[0]?.content?.parts?.[0]?.text }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({ error: 'Error calling Gemini API', details: err.message }),
    };
  }
};
