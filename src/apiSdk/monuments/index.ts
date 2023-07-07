import axios from 'axios';
import queryString from 'query-string';
import { MonumentInterface, MonumentGetQueryInterface } from 'interfaces/monument';
import { GetQueryInterface } from '../../interfaces';

export const getMonuments = async (query?: MonumentGetQueryInterface) => {
  const response = await axios.get(`/api/monuments${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createMonument = async (monument: MonumentInterface) => {
  const response = await axios.post('/api/monuments', monument);
  return response.data;
};

export const updateMonumentById = async (id: string, monument: MonumentInterface) => {
  const response = await axios.put(`/api/monuments/${id}`, monument);
  return response.data;
};

export const getMonumentById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/monuments/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteMonumentById = async (id: string) => {
  const response = await axios.delete(`/api/monuments/${id}`);
  return response.data;
};
