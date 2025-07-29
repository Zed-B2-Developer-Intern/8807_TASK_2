import type { NextApiRequest, NextApiResponse } from "next";
import { User } from "@/types";

const allUsers: User[] = Array.from({ length: 50 }).map((_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  email: `user${i + 1}@example.com`,
}));

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const page = parseInt((req.query.page as string) || "1");
  const limit = 10;
  const start = (page - 1) * limit;
  const end = start + limit;

  const data = allUsers.slice(start, end);
  const totalPages = Math.ceil(allUsers.length / limit);

  res.status(200).json({ data, totalPages });
}
