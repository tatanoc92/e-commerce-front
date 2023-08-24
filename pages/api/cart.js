import { mongooseConnect } from "../../lib/mongoose";
import { Product } from "../../models/Product";

export default async function (req, res) {
  // await mongooseConnect();
  // const ids = req.body.ids;
  // res.json(await Product.find({ _id: ids }));
  res.status(200).json({ name: "hello world" });
}
