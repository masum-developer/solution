import { initializeApp } from "firebase/app";
// Import the functions you need from the SDKs you need
import {
  ApiKey,
  AppId,
  AuthDomain,
  MessagingSenderId,
  ProjectId,
  StorageBucket,
} from "../env";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
console.log(process.env);
const firebaseConfig = {
  apiKey: ApiKey,
  authDomain: AuthDomain,
  projectId: ProjectId,
  storageBucket: StorageBucket,
  messagingSenderId: MessagingSenderId,
  appId: AppId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// loadEnvConfig(app)

export default app;