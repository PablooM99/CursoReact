import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestone';

const firebaseConfig = {

}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)