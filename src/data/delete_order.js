
import { getFirestore, doc, setDoc, deleteDoc } from "firebase/firestore";
const db = getFirestore();


const deleteOrder = async (orderId) => {
  try {
    // Reference the specific order document by its ID
    const orderRef = doc(db, "orders", orderId);

    // Delete the order document
    await deleteDoc(orderRef);

    console.log(`Order ${orderId} deleted successfully`);
  } catch (error) {
    console.error("Error deleting order: ", error);
    throw error;
  }
};

export default deleteOrder;
