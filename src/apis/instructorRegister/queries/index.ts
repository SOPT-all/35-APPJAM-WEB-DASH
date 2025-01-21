import { useMutation } from '@tanstack/react-query';
import { postInstructorRegisterInfo } from '../axios';

interface InstructorRegisterInfoTypes {
  imageUrls: string[];
  instagram: string;
  youtube: string;
  educations: string[];
  experiences: string[];
  detail: string;
  videoUrls: string[];
}

export const useInstructorMutation = () => {
  return useMutation({
    mutationFn: (infoData: InstructorRegisterInfoTypes) => postInstructorRegisterInfo(infoData),
  });
};
