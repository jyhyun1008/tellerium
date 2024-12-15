import { getWorks } from "@/src/actions/db"

export default async function handler(req, res) {
    var result = await getWorks()
  res.status(200).json({ rows: result })
}