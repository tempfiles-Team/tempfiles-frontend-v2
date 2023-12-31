import { UploadOptions } from '@/api';

import {
  API_SUFFIX,
  DataResponse,
  CommonValue,
  GetItemOptions,
  instance,
  DataUploadResponse,
} from './api';

export interface UploadTextValues extends UploadOptions {
  textData: string;
}

export interface UploadTextResponse extends DataUploadResponse {
  data: string;
  numberOfText: number;
}

export interface GetTextResponse extends DataResponse {
  textData: string;
}

export type GetTextOptions = GetItemOptions;

export type DeleteTextValue = CommonValue;

export type DownloadTextValue = CommonValue;

export const upLoadText = async ({
  textData,
  password,
  downloadLimit,
  timeLimit,
}: UploadTextValues) => {
  const { data } = await instance.post(
    `${API_SUFFIX.TEXT}${API_SUFFIX.TEXT_UPLOAD}${password ? `?pw=${password}` : ''}`,
    textData,
    {
      headers: {
        'Content-Type': 'text/plain',
        'X-Download-Limit': downloadLimit,
        'X-Time-Limit': timeLimit,
      },
    },
  );
  return data;
};

export const getText = async ({ id, token, isEncrypted }: GetTextOptions) => {
  const { data } = await instance.get(
    `${API_SUFFIX.TEXT}/${id}${isEncrypted ? `?token=${token}` : ''}`,
  );
  return data;
};

export const deleteText = async ({ id }: DeleteTextValue) => {
  const { data } = await instance.delete(`${API_SUFFIX.TEXT}/${id}`);
  return data;
};

export const downloadText = async ({ id }: DownloadTextValue) => {
  const { data } = await instance.get(`${API_SUFFIX.TEXT}/${id}`);
  return data;
};
