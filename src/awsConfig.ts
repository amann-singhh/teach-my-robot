import { Amplify } from "aws-amplify";

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: "ap-south-1_JcWvJMRVQ",
      userPoolClientId: "537uc6ucuks1iqhp9fjrhoaiht",
      loginWith: {
        email: true,
      },
    },
  },
});
