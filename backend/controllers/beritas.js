import Berita from "../models/beritaModel.js"

export const getAllBeritas = async (req, res) => {
    try {
        const beritas = await Berita.findAll();
        res.json(beritas)
    } catch (error) {
        res.json({ message: error.message })
    }
  
}