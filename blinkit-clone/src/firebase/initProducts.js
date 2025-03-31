import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { app } from './config';

const db = getFirestore(app);

const categories = [
  { name: 'Fruits & Vegetables', icon: '🍎' },
  { name: 'Dairy & Eggs', icon: '🥛' },
  { name: 'Beverages', icon: '🧃' },
  { name: 'Snacks', icon: '🍪' },
  { name: 'Home Care', icon: '🏠' }
];

const products = [
  {
    name: 'Apples',
    price: 120,
    category: 'Fruits & Vegetables',
    image: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb',
    unit: 'kg',
    stock: 50
  },
  {
    name: 'Bananas',
    price: 50,
    category: 'Fruits & Vegetables',
    image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e',
    unit: 'dozen',
    stock: 30
  },
  {
    name: 'Milk',
    price: 60,
    category: 'Dairy & Eggs',
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150',
    unit: '1L',
    stock: 20
  },
  {
    name: 'Eggs',
    price: 90,
    category: 'Dairy & Eggs',
    image: 'https://images.unsplash.com/photo-1587486913049-53fc88980dfa',
    unit: 'dozen',
    stock: 15
  }
];

async function initializeData() {
  try {
    // Add categories
    const categoryPromises = categories.map(cat => 
      addDoc(collection(db, 'categories'), cat)
    );
    await Promise.all(categoryPromises);
    console.log('Categories added successfully');

    // Add products
    const productPromises = products.map(prod =>
      addDoc(collection(db, 'products'), prod)
    );
    await Promise.all(productPromises);
    console.log('Products added successfully');
  } catch (error) {
    console.error('Error initializing data:', error);
  }
}

// Uncomment to run initialization
// initializeData();