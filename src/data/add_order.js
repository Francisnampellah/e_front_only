// add_order.js or your component file
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { getFirestore, doc, setDoc } from "firebase/firestore";
const db = getFirestore();

const Add_order = async (order) => {
  const user = JSON.parse(localStorage.getItem("user"));

  console.log(order);
  
  if (!user) {
    throw new Error("User not logged in");
  }

  if (!order) {
    throw new Error("No order data provided");
  }

  try {
    // Add order to the 'orders' collection
    const orderRef = await addDoc(collection(db, "orders"), {
      ...order,
      userId: user.uid,
      createdAt: serverTimestamp(),
    });

    console.log(`Order ${orderRef.id} added for user ${user.uid}`);
  } catch (error) {
    console.error("Error adding order: ", error);
  }
};

export default Add_order;
