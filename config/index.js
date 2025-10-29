import 'dotenv/config';

export const config = {
  app: {
    port: process.env.PORT || 4000,
  },
  db: {
    url: process.env.DB_URL || 'mongodb://localhost:27017/water_logistics',
  },
  jwt: {
    accessSecret: process.env.JWT_ACCESS_SECRET || 'access_secret_key',
    refreshSecret: process.env.JWT_REFRESH_SECRET || 'refresh_secret_key',
  },
};
