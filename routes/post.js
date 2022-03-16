const express = require("express");
const router = express.Router();
const NewsApi = require("newsapi");

const newsApi = new NewsApi(process.env.news_api_key);

router.get("/popular", async (req, res) => {
    try {
        const result = await newsApi.v2.everything({
            q: "bitcoin",
            sortBy: "popularity",
            pageSize: 8,
        });

        res.send(result);
    } catch (error) {
        res.send(error);
    }
});

router.get("/recent/:id", async (req, res) => {
    try {
        let hr = new Date(Date.now() - 3600 * 1000).toISOString();
        let now = new Date().toISOString();

        const response = await newsApi.v2.everything({
            q: "everything",
            from: hr,
            to: now,
            sortBy: "publishedAt",
            pageSize: 8,
            page: req.params.id,
        });

        res.send(response);
    } catch (error) {
        res.send(error);
    }
});

router.get("/country/:name", async (req, res) => {
    try {
        const response = await newsApi.v2.topHeadlines({
            country: req.params.name,
        });

        res.send(response);
    } catch (error) {
        res.send(error);
    }
});

router.get("/category/:name", async (req, res) => {
    try {
        const response = await newsApi.v2.topHeadlines({
            category: req.params.name,
        });

        res.send(response);
    } catch (error) {
        res.send(error);
    }
});

router.get("/search/:name", async (req, res) => {
    try {
        const response = await newsApi.v2.everything({
            q: req.params.name,
        });

        res.send(response);
    } catch (error) {
        res.send(error);
    }
});

module.exports = router;
