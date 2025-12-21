const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { DynamoDBDocumentClient, ScanCommand, GetCommand } = require("@aws-sdk/lib-dynamodb");

const client = new DynamoDBClient({ region: "eu-north-1" });
const docClient = DynamoDBDocumentClient.from(client);

const TABLE_NAME = 'Courses';

exports.handler = async (event) => {
    // Enable CORS
    const headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*"
    };

    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 200,
            headers,
            body: ''
        };
    }

    try {
        if (event.httpMethod === 'GET') {
            const queryParams = event.queryStringParameters || {};
            const courseId = queryParams.id;

            if (courseId) {
                // Fetch specific course
                const command = new GetCommand({
                    TableName: TABLE_NAME,
                    Key: { id: courseId }
                });
                const response = await docClient.send(command);

                if (!response.Item) {
                    return { statusCode: 404, headers, body: JSON.stringify({ error: 'Course not found' }) };
                }

                return { statusCode: 200, headers, body: JSON.stringify(response.Item) };
            } else {
                // List all courses
                const command = new ScanCommand({
                    TableName: TABLE_NAME
                });
                const response = await docClient.send(command);
                return { statusCode: 200, headers, body: JSON.stringify(response.Items) };
            }
        }

        return { statusCode: 404, headers, body: JSON.stringify({ error: 'Not Found' }) };

    } catch (error) {
        console.error("Course Error:", error);
        return { statusCode: 500, headers, body: JSON.stringify({ error: 'Internal Server Error', details: error.message }) };
    }
};
