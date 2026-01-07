import { Amplify } from "aws-amplify";

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: "ap-south-1_sR1cnllwN",
      userPoolClientId: "4ojd8hh7q13fa67gs3iniu1jkj",
      loginWith: {
        username: true,
      },
    },
  },
});
