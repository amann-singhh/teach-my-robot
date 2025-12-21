const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { DynamoDBDocumentClient, GetCommand } = require("@aws-sdk/lib-dynamodb");

const client = new DynamoDBClient({ region: "eu-north-1" });
const docClient = DynamoDBDocumentClient.from(client);

const TABLE_NAME = 'Users';

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
        const body = JSON.parse(event.body || '{}');
        const path = event.path; // e.g., /auth/login

        if (path.endsWith('/login') && event.httpMethod === 'POST') {
            const { email, password } = body;
            
            if (!email || !password) {
                 return { statusCode: 400, headers, body: JSON.stringify({ error: 'Missing email or password' }) };
            }

            const command = new GetCommand({
                TableName: TABLE_NAME,
                Key: { email }
            });
            
            const response = await docClient.send(command);
            const user = response.Item;

            // Simple plain-text check as requested
            if (!user || user.password !== password) {
                return { statusCode: 401, headers, body: JSON.stringify({ error: 'Invalid credentials' }) };
            }

            // Return user info (excluding password)
            const { password: _, ...userInfo } = user;
            return { statusCode: 200, headers, body: JSON.stringify({ success: true, user: userInfo }) };
        }

        return { statusCode: 404, headers, body: JSON.stringify({ error: 'Not Found', path }) };

    } catch (error) {
        console.error("Auth Error:", error);
        return { statusCode: 500, headers, body: JSON.stringify({ error: 'Internal Server Error', details: error.message }) };
    }
};
