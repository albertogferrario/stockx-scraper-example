require('dotenv').config();

const stockx = {
    region: process.env.STOCKX_REGION || 'it',
    locale: process.env.STOCKX_LOCALE || 'en',
    currency: process.env.STOCKX_CURRENCY || 'eur',
    productSlug: process.env.STOCKX_PRODUCT_SLUG || 'air-jordan-1-zoom-cmft-2-orewood-brown-bright-citrus-sail',
};

const proxy = {
    enabled: process.env.PROXY_ENABLED,
    host: process.env.PROXY_HOST,
    port: process.env.PROXY_PORT,
    username: process.env.PROXY_USERNAME,
    password: process.env.PROXY_PASSWORD,
};

module.exports = { stockx, proxy };
