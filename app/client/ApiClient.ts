import axios, { type AxiosInstance, type AxiosResponse } from "axios";
import type { Notice } from "~/@type/notice/notice";

const API_CLIENT_BASE_URL = "/api";
const API_CLIENT_TIMEOUT = 30000;

class ApiClient {
  private axios: AxiosInstance;

  constructor() {
    this.axios = axios.create({
      baseURL: API_CLIENT_BASE_URL,
      timeout: API_CLIENT_TIMEOUT,
    });
  }

  async getNotices(): Promise<AxiosResponse<Notice[]>> {
    return await this.axios.get<Notice[]>(`/notices`);
  }

  async getNoticeDetails(id: number): Promise<AxiosResponse<Notice>> {
    return await this.axios.get(`/notices/${id}`);
  }
}

export const apiClient = new ApiClient();
