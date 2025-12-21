const { DynamoDBClient, PutItemCommand } = require("@aws-sdk/client-dynamodb");
const { marshall } = require("@aws-sdk/util-dynamodb");

const client = new DynamoDBClient({ region: "eu-north-1" });
const TABLE_NAME = "Courses";

const courses = [
    {
        id: "robotics-101",
        title: "Robotics 101: Build Your First Bot",
        description: "A complete introduction to robotics using Arduino. Learn circuits, coding, and mechanical assembly.",
        thumbnail: "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?auto=format&fit=crop&q=80&w=1000",
        level: "Beginner",
        duration: "12 Hours",
        published: true,
        modules: [
            {
                id: "m1",
                title: "Module 1: Getting Started",
                videos: [
                    { id: "v1", title: "Introduction to Robotics", url: "https://www.youtube.com/embed/dummy1", duration: "10:00" },
                    { id: "v2", title: "Understanding Microcontrollers", url: "https://www.youtube.com/embed/dummy2", duration: "15:30" }
                ],
                resources: [
                    { title: "Arduino Setup Guide", url: "#", type: "pdf" }
                ]
            },
            {
                id: "m2",
                title: "Module 2: Sensors and Actuators",
                videos: [
                    { id: "v3", title: "Ultrasonic Sensors Explained", url: "https://www.youtube.com/embed/dummy3", duration: "12:45" }
                ]
            }
        ]
    },
    {
        id: "ai-python",
        title: "AI Programming with Python",
        description: "Master the basics of Artificial Intelligence using Python. Ideal for students starting their coding journey.",
        thumbnail: "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&q=80&w=1000",
        level: "Intermediate",
        duration: "20 Hours",
        published: true,
        modules: [
            {
                id: "m1",
                title: "Python Basics",
                videos: [
                    { id: "v1", title: "Installation and Setup", url: "", duration: "08:00" }
                ]
            }
        ]
    },
    {
        id: "iot-smart-home",
        title: "IoT: Building Smart Homes",
        description: "Connect potential to reality. Learn how to build smart home devices using ESP32.",
        thumbnail: "https://images.unsplash.com/photo-1558002038-1091a166be11?auto=format&fit=crop&q=80&w=1000",
        level: "Advanced",
        duration: "15 Hours",
        published: true,
        modules: []
    }
];

const seed = async () => {
    console.log("Seeding Courses into DynamoDB...");
    for (const course of courses) {
        try {
            const command = new PutItemCommand({
                TableName: TABLE_NAME,
                Item: marshall(course, { removeUndefinedValues: true })
            });
            await client.send(command);
            console.log(`Uploaded: ${course.title}`);
        } catch (err) {
            console.error(`Failed to upload ${course.title}:`, err);
        }
    }
    console.log("Done.");
};

seed();
