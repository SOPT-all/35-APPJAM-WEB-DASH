import { useMutation, useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/apis/constants/queryKey';
import { getLocationList, postClassRegisterInfo } from '../axios';

// TODO: keyword 필수인지 질문
export const useGetLocationList = (query: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.LOCATIONS, query],
    queryFn: async () => {
      return await getLocationList(query);
    },
    enabled: query.trim().length > 0,
  });
};

interface ClassTimeTypes {
  startTime: string;
  endTime: string;
}

interface ClassRegisterInfoTypes {
  imageUrls: string[];
  name: string;
  detail: string;
  videoUrls: string[];
  maxReservationCount: number;
  genre: string;
  level: string;
  recommendation: string;
  price: number;
  location: string | null;
  streetAddress: string | null;
  oldStreetAddress: string | null;
  detailedAddress: string | null;
  times: ClassTimeTypes[];
}

export const usePostClassRegisterInfo = () => {
  return useMutation({
    mutationFn: (infoData: ClassRegisterInfoTypes) => postClassRegisterInfo(infoData),
  });
};
