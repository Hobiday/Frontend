import axios from "axios";

<<<<<<< HEAD
export const API_BASE_URL = process.env.NEXT_PUBLIC_LOCAL_URL || process.env.NEXT_PUBLIC_SERVER_URL;
=======
export const API_BASE_URL = process.env.NEXT_PUBLIC_LOCAL_URL;
>>>>>>> 885b823 (✨ Feat: 공연 조회 api 연결 및 performance api adapter 추가 (#34))

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

apiClient.interceptors.response.use(
  (response) => response,
<<<<<<< HEAD
  async (error) => {
    const currentRequest = error.config;

    // 401 에러 발생 시 Refresh Token으로 Access Token 갱신
    if (error.response?.status === 401 && !currentRequest._retry) {
      currentRequest._retry = true;

      try {
        const { data } = await axios.post(
          `${API_BASE_URL}/api/token`,
          {},
          {
            withCredentials: true,
          },
        );

        localStorage.setItem("accessToken", data.accessToken);

        // 원래 요청 재시도
        currentRequest.headers.Authorization = `Bearer ${data.accessToken}`;
        return apiClient(currentRequest);
      } catch (refreshError) {
        console.error("Refresh Token expired or invalid", refreshError);
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
=======
  (error) => {
    if (error.response?.status === 401) {
      return Promise.reject(error);
    }
>>>>>>> 885b823 (✨ Feat: 공연 조회 api 연결 및 performance api adapter 추가 (#34))
  },
);
