import { createClient } from "@sanity/client";
import fetch from "node-fetch";
import slugify from "slugify";

// Sanity Client Setup
const client = createClient({
  projectId: "6nxxi8ll",  // Sanity project ID
  dataset: "production",  // Dataset for Sanity
  useCdn: true,  // Disable CDN for fresh data
  apiVersion: "2025-01-15", // Current date for API version
  token: "skuo25cZiZnAYIraeCwQPANWkyls0z50TFLxWscfaebj5ka9NhIGNoebgh1T57qIawEsd7C2FnEnxCb31ymUvjVARQf5BbfbSuokix54BPkF0T1qgNcI3dRvqqyEVXDhFwFUgCNgJpMPEHe0cmn7r09KsOAwRmNBLeaDGTzHDcTg62ynfQVA", // Sanity token
});

// Function to upload image to Sanity
async function uploadImageToSanity(imageUrl) {
  try {
    const imageResponse = await fetch(imageUrl);
    const imageBuffer = await imageResponse.buffer();

    const imageAsset = await client.assets.upload('image', imageBuffer, {
      filename: `product-image-${Date.now()}.jpg`,
    });

    return imageAsset._id;  // Return image asset reference
  } catch (error) {
    console.error('Error uploading image:', error);
    return null;
  }
}

// Import Products Function
const importData = async () => {
  try {
    const apiFetch = await fetch('https://api-for-templete-2.vercel.app/api/products/');
    const products = await apiFetch.json();

    for (const product of products) {
      // Ensure category exists and create it if not
      const categoryRef = await client.createIfNotExists({
        _id: `category-${slugify(product.category.toLowerCase())}`,
        _type: 'category',
        name: product.category, // Only category name
      });

      // Upload the image and get the asset reference
      const imageRef = await uploadImageToSanity(product.images);

      if (imageRef) {
        const document = {
          _id: `product-${product.id}`,  // Unique product _id
          _type: 'product',
          id: product.id, // Add API id field to Sanity
          name: product.name,
          description: product.productDescription,
          category: {
            _type: 'reference',
            _ref: categoryRef._id,  // Correct reference to the category document
          },
          price: parseFloat(product.price), // Ensure it's a number
          originalPrice: parseFloat(product.originalPrice), // Ensure it's a number
          stock: parseInt(product.stock), // Ensure it's an integer
          image: {
            _type: 'image',
            asset: {
              _ref: imageRef, // Image reference
              _type: 'reference',
            },
          },
          rating: {
            rate: parseFloat(product.rating.rate), // Ensure it's a number
            count: parseInt(product.rating.count), // Ensure it's an integer
          },
          tags: product.tags,
          dimensions: {
            height: parseFloat(product.dimensions.height),
            width: parseFloat(product.dimensions.width),
            depth: parseFloat(product.dimensions.depth),
          },
          discount: parseFloat(product.discount), // Ensure it's a number
          slug: {
            _type: 'slug',
            current: slugify(product.name), // Generate slug from name
          },
        };

        // Log the product being processed
        console.log(`Processing product: ${product.name}`);

        // Create or update the product document in Sanity
        await client.createOrReplace(document);
        console.log(`Product "${product.name}" successfully imported.`);
      } else {
        console.error(`Failed to upload image for product: ${product.name}`);
      }
    }

    console.log('All products successfully imported!');
  } catch (error) {
    console.error('Error importing data:', error);
  }
};

// Call the import function
importData();