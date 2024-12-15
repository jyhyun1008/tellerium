import { getSeries } from "@/src/actions/db"

export default async function handler(req, res) {
    var result = await getSeries()
  res.status(200).json({ rows: result })
}