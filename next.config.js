/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        disableStaticImages: true,
        remotePatterns: [
            {
                protocol: "https", 
                hostname: "hphsptczqhoobtztuwvx.supabase.co" 
            },
            {
                protocol: "https", 
                hostname: "i.pinimg.com" 
            }
        ]
    }
}

module.exports = nextConfig
