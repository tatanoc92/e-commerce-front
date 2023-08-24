import Featured from "../components/Featured";
import Features from "../components/NewProducts";
import Header from "../components/Header";
import { mongooseConnect } from "../lib/mongoose";
import { Product } from "../models/Product";
import NewProducts from "../components/NewProducts";

export default function HomePage({ featuredProduct, newProducts }) {
  return (
    <div>
      <Header />
      <Featured product={featuredProduct} />
      <NewProducts products={newProducts} />
    </div>
  );
}

// export async function getServerSideProps() {
//   const featuredProdutId = "64b67bd6b00474e00bd2a7a0";
//   await mongooseConnect();
//   const featuredProduct = await Product.findById(featuredProdutId);
//   const newProducts = await Product.find({}, null, {
//     sort: { _id: -1 },
//     limit: 10,
//   });
//   return {
//     props: {
//       featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
//       newProducts: JSON.parse(JSON.stringify(newProducts)), // Include newProducts in props
//     },
//   };
// }
