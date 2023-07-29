import { IProductResponse } from "@/types";
import { ObjectId } from "mongodb";
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

    // get single products
    const id = req.query?.id;
    if (req.method === "GET" && id) {
      const objectId = new ObjectId(id as string);
      const product = await productsCollection.findOne({ _id: objectId });

      res.status(200).json({
        success: true,
        message: "Product retrieved successfully!",
        data: product,
      });
    }

    // get all products
    if (req.method === "GET" && !id) {
      const products = await productsCollection.find({}).toArray();

      res.status(200).json({
        success: true,
        message: "Products retrieved successfully!",
        data: products,
      });
    }
  } catch (e: any) {
    res.status(400).json({
      success: false,
      message: "Databse connected failed!",
      error: e.message,
    });
  } finally {
    // await client.close();
  }
}
