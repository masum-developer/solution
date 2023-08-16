// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { ApiKey, AppId, AuthDomain, MessagingSenderId, ProjectId, StorageBucket } from "../env";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: ApiKey,
  authDomain: AuthDomain,
  projectId: ProjectId,
  storageBucket: StorageBucket,
  messagingSenderId: MessagingSenderId,
  appId: AppId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app