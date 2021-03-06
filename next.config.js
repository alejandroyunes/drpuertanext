module.exports = {
    env: {
        API_URL: process.env.API_URL,
        IMAGES_DOMAIN: process.env.IMAGES_DOMAIN
    },
    publicRuntimeConfig: {
        API_URL: process.env.API_URL,
        IMAGES_DOMAIN: process.env.IMAGES_DOMAIN
    },
    images: {
        deviceSizes: [512, 768, 1024, 1280, 1600],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        domains: [process.env.IMAGES_DOMAIN],
        path: '_next/image',
        loader: 'default'
    },
};