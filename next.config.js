/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        disableStaticImages: false,
        remotePatterns: [
            {
                protocol: "https", 
                hostname: "hphsptczqhoobtztuwvx.supabase.co" 
            },
            {
                protocol: "https", 
                hostname: "i.pinimg.com" 
            },
            {
                protocol: "https",
                hostname: "e1.pxfuel.com"
            },
            {
                protocol: "https",
                hostname: "www.datocms-assets.com"
            },
            {
                protocol: "https",
                hostname: "upload.wikimedia.org"
            }
        ]
    }
}

module.exports = nextConfig
