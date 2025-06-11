import { db } from "../services/firebase";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";

export const addTransaction = async (uid, transactionData) => {
  try {
    const docRef = await addDoc(collection(db, "transactions"), {
      ...transactionData,
      uid,
      createdAt: new Date().toISOString(),
    });
    return docRef.id;
  } catch (error) {
    console.error("Error adding transaction:", error);
    throw error;
  }
};


export const getTransactions = async (uid) => {
  try {
    const q = query(collection(db, "transactions"), where("uid", "==", uid));
    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error("Error fetching transactions:", error);
    throw error;
  }
};
