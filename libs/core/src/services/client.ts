import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig } from 'axios';

const API_BASE_URL = 'https://api.example.com';
const API_TIMEOUT = 10000;
const KEYS = { TOKEN: 'auth_token' };

type RequestError = {
  status: number;
  statusText: string;
};

class ApiClient {
  private client: AxiosInstance;

  constructor(config?: AxiosRequestConfig) {
    this.client = axios.create({
      baseURL: API_BASE_URL,
      timeout: API_TIMEOUT,
      headers: {
        'Content-Type': 'application/json',
      },
      ...config,
    });

    this.setupInterceptors();
  }

  private setupInterceptors() {
    this.interceptorRequest();

    this.interceptorResponse();
  }

  private interceptorRequest() {
    this.client.interceptors.request.use(
      (config) => {
        const token = window.localStorage.getItem(KEYS.TOKEN);

        if (token) {
          config.headers.setAuthorization(`Bearer ${token}`);
        }

        return config;
      },
      (error) => Promise.reject(error),
    );
  }

  private interceptorResponse() {
    this.client.interceptors.response.use(
      (response) => response,
      (error) => {
        const canThrowAnError =
          error.request.status === 0 || error.request.status === 500;

        if (canThrowAnError) {
          throw new Error(error.message);
        }

        return error;
      },
    );
  }

  public async get<T>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<{ data: T; errors: RequestError | null }> {
    const response = await this.client.get<T>(url, config);

    let errors: RequestError | null = null;

    if (!response.data) {
      errors = {
        status: response.request.status,
        statusText: response.request.statusText,
      };
    }

    return { data: response.data, errors };
  }

  public async post<T>(
    url: string,
    data: unknown,
    config?: AxiosRequestConfig,
  ): Promise<{ data: T; errors: RequestError | null }> {
    const response = await this.client.post<T>(url, data, config);

    let errors: RequestError | null = null;

    if (!response.data) {
      errors = {
        status: response.request.status,
        statusText: response.request.statusText,
      };
    }

    return { data: response.data, errors };
  }

  public async put<T>(
    url: string,
    data: unknown,
    config?: AxiosRequestConfig,
  ): Promise<{ data: T; errors: RequestError | null }> {
    const response = await this.client.put<T>(url, data, config);

    let errors: RequestError | null = null;

    if (!response.data) {
      errors = {
        status: response.request.status,
        statusText: response.request.statusText,
      };
    }

    return { data: response.data, errors };
  }

  public async patch<T>(
    url: string,
    data: unknown,
    config?: AxiosRequestConfig,
  ): Promise<{ data: T; errors: RequestError | null }> {
    const response = await this.client.patch<T>(url, data, config);

    let errors: RequestError | null = null;

    if (!response.data) {
      errors = {
        status: response.request.status,
        statusText: response.request.statusText,
      };
    }

    return { data: response.data, errors };
  }

  public async delete<T>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<{ data: T; errors: RequestError | null }> {
    const response = await this.client.delete<T>(url, config);

    let errors: RequestError | null = null;

    if (!response.data) {
      errors = {
        status: response.request.status,
        statusText: response.request.statusText,
      };
    }

    return { data: response.data, errors };
  }
}

export const apiClient = new ApiClient();
