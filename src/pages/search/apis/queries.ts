import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { getClassList, getDancerList } from '@/pages/search/apis/axios';
import { ClassListParams, ClassListResponse, DancerListResponse } from '@/pages/search/types/api';

export const useGetDancerList = (params: { keyword?: string }): UseQueryResult<DancerListResponse, Error> => {
  return useQuery<DancerListResponse, Error>({
    queryKey: ['dancerList', params],
    queryFn: async () => {
      return await getDancerList(params);
    },
  });
};

export const useGetClassList = (params: ClassListParams): UseQueryResult<ClassListResponse, Error> => {
  return useQuery<ClassListResponse, Error>({
    queryKey: ['classList', params],
    queryFn: async () => {
      return await getClassList(params);
    },
  });
};
