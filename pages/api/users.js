import { getUsers } from "@/src/actions/db"

export default async function handler(req, res) {
    var result = await getUsers()
  res.status(200).json({ rows: result })
}