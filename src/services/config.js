import axios from "axios";

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    headers: {
        Accept: "*/*",
        Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4ZTUwZGY4Mi1iZGU3LTRiYmMtYTQwZS1lMzAyN2FiZjQ0MzEiLCJVc2VySWQiOiIxIiwiRGlzcGxheU5hbWUiOiLYp9iz2YXbjCDZhdit2LPZhiIsIlVzZXJOYW1lIjoiTW9uZW0iLCJFbWFpbCI6Im1vc3RhZmEubW9uZW1Ab3V0bG9vay5jb20iLCJleHAiOjE3MjAwNzI0NDQsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6NTAwMCIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6NDIwMCJ9.GN0k1bkv4DPSFpnUnYfdC26vxbWHMiqqCQjjFcRndu8",
        "Content-Type": "application/json",
    },
});

// api.interceptors.response.use(
//     (response) => {
//         return response;
//     },
//     async (error) => {
//         const originalRequest = error.config;

//         if (
//             error.response &&
//             error.response.status === 409 &&
//             !originalRequest._retry
//         ) {
//             originalRequest._retry = true;

//             // Check if the "refreshToken" exists
//             const refreshToken = getCookies("token");
//             // Retrieve a new access token if the "refreshToken" exists
//             if (refreshToken) {
//                 try {
//                     const response = await axios.post(
//                         `${import.meta.env.VITE_BASE_URL}/auth/refresh-token`,
//                         { refreshToken: refreshToken }
//                     );
//                     // Set the "accessToken" in the cookies for subsequent requests
//                     if (response.status === 200 || response.status === 201) {
//                         const newAccessToken = response.data.newAccessToken;
//                         setCookies("accessToken", newAccessToken);
//                     }
//                     // Resend the user's request
//                     return api(originalRequest);
//                 } catch (error) {
//                     console.log(error);
//                     return error;
//                 }
//             }
//         }

//         return Promise.reject(error);
//     }
// );

export { api };
