import express from "express";
import { PrismaClient } from "@prisma/client";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json()); // To handle JSON requests

// ✅ GET all actors
app.get("/actors", async (req, res) => {
    try {
        const actors = await prisma.actor.findMany();
        res.json(actors);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch actors" });
    }
});

app.get("/films", async (req, res) => {
    try {
        const films = await prisma.film.findMany();
        res.json(films);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch films" });
    }
});

// ✅ GET an actor by ID
app.get("/actors/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const actor = await prisma.actor.findUnique({
            where: { actor_id: parseInt(id) },
        });
        if (!actor) return res.status(404).json({ error: "Actor not found" });
        res.json(actor);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch actor" });
    }
});

// ✅ POST - Create an actor
app.post("/actors", async (req, res) => {
    const { first_name, last_name } = req.body;
    try {
        const newActor = await prisma.actor.create({
            data: { first_name, last_name },
        });
        res.json(newActor);
    } catch (error) {
        res.status(500).json({ error: "Failed to create actor" });
    }
});

// ✅ DELETE an actor
app.delete("/actors/:id", async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.actor.delete({ where: { actor_id: parseInt(id) } });
        res.json({ message: "Actor deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Failed to delete actor" });
    }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
