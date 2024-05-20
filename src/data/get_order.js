import {
  collection,
  query,
  where,
  getDocs,
  addDoc,
  serverTimestamp,
  getFirestore,
  doc,
  setDoc,
} from "firebase/firestore";
const db = getFirestore();

const getOrdersForUser = async (userId) => {
  try {
    // Reference the 'orders' collection
    const ordersRef = collection(db, "orders");

    // Create a query against the collection to get orders for a specific user
    const q = query(ordersRef, where("userId", "==", userId));

    // Execute the query
    const querySnapshot = await getDocs(q);

    // Process the query results
    const orders = [];
    querySnapshot.forEach((doc) => {
      orders.push({ id: doc.id, ...doc.data() });
    });

    return orders;
  } catch (error) {
    console.error("Error getting orders: ", error);
    throw error;
  }
};

export default getOrdersForUser;
