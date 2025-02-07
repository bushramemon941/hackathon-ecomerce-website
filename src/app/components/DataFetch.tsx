import { client } from "@/sanity/lib/client";
import DatafetchClient from "./DataFetchClient";



const DataFetch = async () => {
  const query = await client.fetch(
    `*[_type == "product"]{
  _id,
    name,
    slug,
    price,
    quantity,
    tags,
    description,
    features,
    dimensions,
    "categoryName": category->name,
    "categorySlug": category->slug.current,
    image {
      asset -> {
        url
      }
    }
  }
`
  );

  return <DatafetchClient products={query} />;
};

export default DataFetch;