import { IProduct, IProductResponse } from "@/types";
import type { NextApiRequest, NextApiResponse } from "next";

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = process.env.DATABASE_URL;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export default async function run(
  req: NextApiRequest,
  res: NextApiResponse<IProductResponse>
) {
  try {
    await client.connect();
    console.log("Databse connected successfully!");

    const productsCollection = await client
      .db("pc-builder")
      .collection("products");

    const products = await productsCollection.find({}).toArray();

    res.status(200).json({
      success: true,
      message: "Products retrieved successfully!",
      data: products,
    });
  } catch {
    console.log("Databse connected failed!");
  } finally {
    // await client.close();
  }
}
