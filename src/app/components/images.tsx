// DataFetch.js
import { client } from "@/sanity/lib/client";

const Data = async () => {
  try {
    const query = await client.fetch(`
            *[_type == "product"]{
                _id,
                name,
                slug,
                "imageUrl": image.asset->url,
                price,
                quantity,
                tags,
                description,
                features,
                dimensions
            }
        `);

    return query; // Pass the fetched data to the page
  } catch (error) {
    console.error("Error fetching data from Sanity:", error);
    return [];
  }
};

export default Data;