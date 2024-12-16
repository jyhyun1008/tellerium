import { getSeries, getUsersById } from "@/src/actions/db"

export default async function handler(req, res) {
  var results = await getSeries()
  for await (let result of results) {
    let owner = await getUsersById(result.owner)
    result.owner = owner[0]
  }
  res.status(200).json({ rows: results })
}