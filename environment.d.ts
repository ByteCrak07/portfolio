declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_GA_MEASUREMENT_ID: string;
    NEXT_PUBLIC_HOTJAR_SITE_ID: number;
    NODEMAILER_EMAIL: string;
    NODEMAILER_PASSWORD: string;
    MY_EMAIL: string;
    SPOTIFY_CLIENT_ID: string;
    SPOTIFY_CLIENT_SECRET: string;
    SPOTIFY_REFRESH_TOKEN: string;
  }
}
