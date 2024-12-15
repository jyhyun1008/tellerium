import { getWorksBySeriesUrl } from "@/src/actions/db"

export default async function handler(req, res) {
    if (req.method === 'POST') {
        let params = req.body
        let result = await getWorksBySeriesUrl(params.url)
        res.status(200).json({ rows: result })
    }
}