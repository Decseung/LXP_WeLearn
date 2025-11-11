import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import {
  ENROLLMENTS_COLLECTION_NAME,
  LECTURELIST_COLLECTION_NAME,
  USERS_COLLECTION_NAME,
} from '../lib/firebase/table/ddl.js';
import chalk from 'chalk';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '../../.env') });

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

  let count = 0;
  for (const d of snapshot.docs) {
    await deleteDoc(doc(db, colName, d.id));
    count++;
    console.log(`   🧹 ${count}/${snapshot.size} - ${colName}/${d.id} 삭제됨`);
  }

  console.log(`✅ ${colName} 삭제 완료`);
}

async function clearAll() {
  await clearCollection(USERS_COLLECTION_NAME);
  await clearCollection(LECTURELIST_COLLECTION_NAME);
  await clearCollection(ENROLLMENTS_COLLECTION_NAME);
}

clearAll()
  .then(() => console.log('모든 데이터 삭제 완료'))
  .then(() => {
    process.exit(0); // ✅ 성공 시 정상 종료
  })
  .catch((error) => {
    console.error(chalk.red('❌ 오류 발생:'), error);
    process.exit(1); // ❌ 실패 시 에러 코드로 종료
  });
