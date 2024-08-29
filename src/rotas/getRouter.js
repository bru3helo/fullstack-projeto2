import { Router } from "express";

const router = Router()

router.get("/:id", (req, res) => {
    const id = req.params.id

    res.json({messagem: `${id}`})
})

export default router