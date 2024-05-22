import { getFirestore, collection, getDocs } from "firebase/firestore";

// Function to retrieve all products from Firestore
const getAllProducts = async () => {
  const db = getFirestore();
  const products = [];

  try {
    const querySnapshot = await getDocs(collection(db, "products"));
    querySnapshot.forEach((doc) => {
      products.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    console.log("Products retrieved successfully: ", products);
  } catch (error) {
    console.error("Error retrieving products: ", error);
  }

  return products;
};

export default getAllProducts;
