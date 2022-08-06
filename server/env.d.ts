declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MONGODB_URI: string;
      PORT: string;
      APP_URI: string;
      NODE_ENV: string;
      EMAIL_HOST_SERVICE_PROVIDER: string;
      EMAIL_HOST: string;
      EMAIL_HOST_SECURE: string;
      EMAIL_HOST_PORT: string;
      EMAIL_AUTH_USERNAME: string;
      EMAIL_AUTH_PASSWORD: string;
      REDIS_URL: string;
      SESSION_SECRET: string;
    }
  }
}

export {}
