import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import dotenv from 'dotenv';
import {
  ENROLLMENTS_COLLECTION_NAME,
  LECTURELIST_COLLECTION_NAME,
  USERS_COLLECTION_NAME,
} from '../lib/firebase/table/ddl.js';

dotenv.config({ path: '../../.env' });

const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function clearCollection(colName) {
  const colRef = collection(db, colName);
  const snapshot = await getDocs(colRef);

  console.log(`🗑️ ${colName} 컬렉션 문서 ${snapshot.size}건 삭제 시작`);

  for (const d of snapshot.docs) {
    await deleteDoc(doc(db, colName, d.id));
  }

  console.log(`✅ ${colName} 삭제 완료`);
}

async function clearAll() {
  await clearCollection(USERS_COLLECTION_NAME);
  await clearCollection(LECTURELIST_COLLECTION_NAME);
  await clearCollection(ENROLLMENTS_COLLECTION_NAME);
}

clearAll().then(() => console.log('🔥 모든 데이터 삭제 완료'));
