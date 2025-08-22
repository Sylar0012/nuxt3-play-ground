import axios, {type AxiosError, type AxiosInstance, type AxiosResponse} from "axios";
import type { Notice } from "~/@type/notice/Notice";
import type {Member} from "~/@type/member/Member";
import type {MemberArgument} from "~/client/arguments";
import { navigateTo } from "#app";

const API_CLIENT_BASE_URL = "/api";
const API_CLIENT_TIMEOUT = 30000;

class ApiClient {
  private axios: AxiosInstance;

  constructor() {
    this.axios = axios.create({
      baseURL: API_CLIENT_BASE_URL,
      timeout: API_CLIENT_TIMEOUT,
    });

    this.axios.interceptors.request.use((config) => {
      const token = useLocalStorage<string | null>("accessToken", null)
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    this.axios.interceptors.response.use(
        (response) => response,
        (error: AxiosError) => {
          if (error.response?.status === 401) {
            navigateTo("/login");
          }
          return Promise.reject(error);
        }
    );
  }

  async login({username, password}:MemberArgument): Promise<AxiosResponse<Member>> {
    return await this.axios.post('/login', {username, password});
  }

  async getNotices(): Promise<AxiosResponse<Notice[]>> {
    return await this.axios.get<Notice[]>(`/notices`);
  }

  async getNoticeDetails(id: number): Promise<AxiosResponse<Notice>> {
    return await this.axios.get(`/notices/${id}`);
  }
}

export const apiClient = new ApiClient();
