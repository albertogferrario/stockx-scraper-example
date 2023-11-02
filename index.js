const StockXScraper = require("@albertogferrario/stockx-scraper");
const config = require("./config.js");

getProduct = async () => {
    const stockxScraper = new StockXScraper(
        config.stockx.region,
        config.stockx.locale,
        config.stockx.currency,
        {
            host: config.proxy.host,
            port: config.proxy.port,
            username: config.proxy.username,
            password: config.proxy.password,
        },
    )

    const data = await stockxScraper.products.get(config.stockx.productSlug);

    console.log(data);
};

getProduct();
