import { getWorks, getSeriesById, getUsersById } from "@/src/actions/db"

export default async function handler(req, res) {
  var results = await getWorks()
  for await (let result of results) {
    let series = await getSeriesById(result.series)
    result.series = series[0]
    let owner = await getUsersById(result.series.owner)
    result.series.owner = owner[0]
  }
  res.status(200).json({ rows: results })
}