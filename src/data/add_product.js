import {
  getFirestore,
  collection,
  addDoc,
  setDoc,
  doc,
} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

// Function to upload images to Firebase Storage and return their URLs
const uploadImages = async (imageFiles, productId) => {
  const storage = getStorage();
  const imageUrls = [];
  const imagesNo = 0;

  for (const file of imageFiles) {
    imagesNo++;
    const storageRef = ref(
      storage,
      `products_images/${productId}/${file.name}`
    );
    await uploadBytes(storageRef, file);
    const imageUrl = await getDownloadURL(storageRef);
    imageUrls.push(imageUrl);
  }

  return imageUrls;
};

// Function to add product data to Firebase Firestore
const addProductToFirestore = async (formData, imageFiles) => {
  const db = getFirestore();

  try {
    // First, add the product data to Firestore to get the product ID
    const docRef = await addDoc(collection(db, "products"), formData);
    const productId = docRef.id;
    console.log("Product added with ID: ", productId);

    // Now upload the images using the product ID
    const imageUrls = await uploadImages(imageFiles, productId);

    // Update the Firestore document with the image URLs
    await setDoc(
      doc(db, "products", productId),
      { productImages: imageUrls },
      { merge: true }
    );

    console.log("Product images updated successfully");
  } catch (error) {
    console.error("Error adding product: ", error);
  }
};

export default addProductToFirestore;
