import { loadEnv } from 'vite';

const { APP_URL, APP_ENV } = loadEnv(process.env.NODE_ENV!, process.cwd(), '');

export const appUrl = APP_URL;
export const appEnv = APP_ENV;
