import { mongooseConnect } from "../../lib/mongoose";
import { Product } from "../../models/Product";
import { Order } from "../../models/Order";
const stripe = require("stripe")(process.env.STRIPE_SK);

export default async function handler(req, res) {
  res.status(200).json({ name: "hello world" });
  // if (req.method !== "POST") {
  //   res.json("should be a POST request");
  //   return;
  // }

  // const { name, email, address, city, postalCode, country, cartProducts } =
  //   req.body;
  // await mongooseConnect();

  // const productsIds = cartProducts;
  // const uniqueIds = [...new Set(productsIds)];
  // const productInfos = await Product.find({ _id: uniqueIds });

  // let line_items = [];

  // for (const productId of uniqueIds) {
  //   const productInfo = productInfos.find(
  //     (p) => p._id.toString() === productId
  //   );

  //   const quantity = productsIds.filter((id) => id === productId)?.length || 0;
  //   if (quantity > 0 && productInfo) {
  //     line_items.push({
  //       price_data: {
  //         currency: "USD",
  //         product_data: { name: productInfo.title },
  //         unit_amount: quantity * productInfo.price * 100,
  //       },
  //       quantity,
  //     });
  //   }
  // }
  // const OrderDoc = await Order.create({
  //   line_items,
  //   name,
  //   email,
  //   address,
  //   city,
  //   postalCode,
  //   country,
  //   paid: false,
  // });

  // const session = await stripe.checkout.sessions.create({
  //   line_items,
  //   mode: "payment",
  //   customer_email: email,
  //   success_url: process.env.PUBLIC_URL + "/cart?success=1",
  //   cancel_url: process.env.PUBLIC_URL + "/cart?cancelled=1",
  //   metadata: { orderId: OrderDoc._id.toString(), test: "ok" },
  // });

  // res.json({
  //   url: session.url,
  // });
}
