import dotenv from "dotenv";

dotenv.config();

export const SCREEN_STREAM_API = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.SCREEN_STREAM_API}`
  }
};

export const IMG_CDN = "https://image.tmdb.org/t/p/w500";
