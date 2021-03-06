export default () => ({
    port: parseInt(process.env.PORT, 10) || 3000,
    env: process.env.NODE_ENV || 'development',
    jwtSecret: process.env.JWT_SECRET,
    jwtExpiration: process.env.JWT_EXPIRATION,
});
