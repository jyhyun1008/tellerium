import { getWorksByUrl, getSeriesById, getUsersById } from "@/src/actions/db"

export default async function handler(req, res) {
    if (req.method === 'POST') {
        let params = req.body
        let result = await getWorksByUrl(params.url)

        let series = await getSeriesById(result[0].series)
        result.series = series[0]
        let owner = await getUsersById(result[0].series.owner)
        result.series.owner = owner[0]

        res.status(200).json({ rows: result })
    }
}