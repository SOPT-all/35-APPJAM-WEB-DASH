import { useRef, useState } from 'react';
import { useImageMutation } from '@/apis/common/queries';

const useImageUploader = (onSuccess: (url: string) => void, handleDeleteUrl: () => void) => {
  const [previewImg, setPreviewImg] = useState<string>('');
  const [imgFile, setImgFile] = useState<File | undefined>();
  const imgRef = useRef<HTMLInputElement | null>(null);
  const { mutate: uploadImage } = useImageMutation();

  const handleUploaderClick = () => {
    if (imgRef.current) {
      imgRef.current.click();
    }
  };

  const uploadImgFile = () => {
    if (!imgRef.current || !imgRef.current.files) return;

    const file = imgRef.current.files[0];
    const formData = new FormData();
    formData.append('image', file);

    uploadImage(formData, {
      onSuccess: (data) => {
        // 이미지 업로드 api res는 imageUrl (string)
        if (data?.imageUrl) {
          onSuccess(data.imageUrl);
        }
      },
    });

    const reader = new FileReader();
    setImgFile(file);

    reader.readAsDataURL(file);
    reader.onloadend = () => {
      if (typeof reader.result === 'string') {
        setPreviewImg(reader.result);
      }
    };
  };

  const deleteImgFile = (e: React.MouseEvent) => {
    e.stopPropagation();

    setImgFile(undefined);
    setPreviewImg('');

    handleDeleteUrl();

    if (imgRef.current) {
      imgRef.current.value = '';
    }
  };

  return {
    imgFile,
    previewImg,
    imgRef,
    handleUploaderClick,
    uploadImgFile,
    deleteImgFile,
  };
};

export default useImageUploader;
