import { getSeriesByUrl, getUsersById } from "@/src/actions/db"

export default async function handler(req, res) {
    if (req.method === 'POST') {
        let params = req.body
        let result = await getSeriesByUrl(params.url)
        if (result.length > 0) {
            let owner = await getUsersById(result[0].owner)
            result[0].owner = owner[0]
        }

        res.status(200).json({ rows: result })
    }
}