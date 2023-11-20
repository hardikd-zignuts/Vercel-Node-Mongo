import type { VercelRequest, VercelResponse } from "@vercel/node";
import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema({
  address: {
    type: {
      borough: {
        type: String,
        required: true,
      },
      cuisine: {
        type: String,
        required: true,
      },
    },
    required: true,
  },
  grades: [
    {
      name: {
        type: String,
        required: true,
      },
      restaurant_id: {
        type: String,
        required: true,
      },
    },
  ],
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const list = await Restaurant.find();
  if (list) {
    res.status(200).json({ restaurant: list });
  } else {
    res.status(400).json({ message: "Failed To Retrieve Blogs" });
  }
}
