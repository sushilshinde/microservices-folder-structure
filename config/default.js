require('dotenv').config()

module.exports = {
  READONLY: process.env.READONLY === 'true' || false,
  LOG_LEVEL: process.env.LOG_LEVEL || 'debug',
  PORT: process.env.PORT || 3000,
  // used to properly set the header response to api calls for services behind a load balancer
  API_BASE_URL: process.env.API_BASE_URL || `http://localhost:3000`,
  API_VERSION: process.env.API_VERSION || 'v5',
  AUTH_SECRET: process.env.AUTH_SECRET || 'mysecret',
  VALID_ISSUERS: process.env.VALID_ISSUERS || '["https://api.xyz-dev.com", "https://api.xyz1-dev.com"]',

  AMAZON: {
    AWS_REGION: process.env.AWS_REGION || 'ap-northeast-1',
    IS_LOCAL_DB: process.env.IS_LOCAL_DB || true,
  },

  EMAIL_FROM: process.env.EMAIL_FROM || 'no-reply@somedomain.com',
}