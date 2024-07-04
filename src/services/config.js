import axios from "axios";

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    headers: {
        Accept: "*/*",
        Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2MmRjMTgwMy0wMTE2LTRkNmMtYmZiMC03NGZlNWIwM2RiOGEiLCJVc2VySWQiOiIxIiwiRGlzcGxheU5hbWUiOiLYp9iz2YXbjCDZhdit2LPZhiIsIlVzZXJOYW1lIjoiTW9uZW0iLCJFbWFpbCI6Im1vc3RhZmEubW9uZW1Ab3V0bG9vay5jb20iLCJleHAiOjE3MjAxOTQzNzYsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6NTAwMCIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6NDIwMCJ9.w0z4vNIs6W0siMxOQvRTaDMhyEVAd8vqatBnOYaxF8Q",
        "Content-Type": "application/json",
    },
});

export { api };
