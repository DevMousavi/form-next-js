import axios from "axios";

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    headers: {
        Accept: "*/*",
        Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJlNzE3MjZlNi0yMzZkLTQ0ZGEtOTZmMC1iZDFlMzVlZjFiMGEiLCJVc2VySWQiOiIxIiwiRGlzcGxheU5hbWUiOiLYp9iz2YXbjCDZhdit2LPZhiIsIlVzZXJOYW1lIjoiTW9uZW0iLCJFbWFpbCI6Im1vc3RhZmEubW9uZW1Ab3V0bG9vay5jb20iLCJleHAiOjE3MjAyNDk2NzcsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6NTAwMCIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6NDIwMCJ9.bChjd1okYp5SskGfgw5-3unhcDgS_0ruaQnUaZk6FPs",
        "Content-Type": "application/json",
    },
});

export { api };
