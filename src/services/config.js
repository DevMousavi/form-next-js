import axios from "axios";

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    headers: {
        Accept: "*/*",
        Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI0Y2YwZjAzOS0wODQxLTQzMjAtOGU3Yi1hOGMwYTMzZDVkOTkiLCJVc2VySWQiOiIxIiwiRGlzcGxheU5hbWUiOiLYp9iz2YXbjCDZhdit2LPZhiIsIlVzZXJOYW1lIjoiTW9uZW0iLCJFbWFpbCI6Im1vc3RhZmEubW9uZW1Ab3V0bG9vay5jb20iLCJleHAiOjE3MjAxNTQ2NTQsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6NTAwMCIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6NDIwMCJ9.UATNAdpUjJI0onro5_ZmZZQ7rZOYzMJmEtMqTpFY87g",
        "Content-Type": "application/json",
    },
});

export { api };
