import {useState, useRef, useEffect} from 'react';
import {useDropzone} from 'react-dropzone';
import {useEvent} from 'react-use';
import {useDebouncedCallback} from 'use-debounce';
import {UploadIcon} from '../svg_components/UploadIcon/UploadIcon';
import * as S from './styledDropzone';

type Props = {
  onDrop: (acceptedFiles: File[]) => void;
  imageUrl?: string;
  previewBorder?: boolean;
  className?: string;
  isLogo?: boolean;
}

export const Dropzone = ({onDrop, imageUrl, previewBorder = false, className, isLogo}: Props) => {
  const container = useRef<HTMLDivElement | null>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [preview, setPreview] = useState<string | null>(null);

  const measureContainer = useDebouncedCallback((e) => setContainerWidth(container.current?.offsetWidth || 0), 500);

  useEvent('resize', measureContainer);

  useEffect(() => {
    setContainerWidth(container.current?.offsetWidth || 0);
  }, [container]);

  const handleDrop = (acceptedFiles: File[]) => {
    setPreview(URL.createObjectURL(acceptedFiles[0]));
    onDrop(acceptedFiles);
  }

  const {getRootProps, getInputProps, open} = useDropzone({
    onDrop: handleDrop,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg']
    },
    noClick: true,
    noKeyboard: true,
    maxFiles: 1,
  });

  return (
    <div ref={container} className={className}>
      <S.Wrapper {...getRootProps()} containerWidth={containerWidth}>
        <input {...getInputProps()} />
        {preview || imageUrl ?
          <S.Preview containerWidth={containerWidth} imageUrl={preview || imageUrl || ''}
                     bordered={previewBorder}/>
          : <S.PreviewPlaceholder containerWidth={containerWidth} bordered={previewBorder}/>
        }
        <S.WrappedButton containerWidth={containerWidth} type='button' onClick={open} noPadding>
          {isLogo ? 'Загрузите лого' : 'Загрузите фото'}
          <UploadIcon/>
        </S.WrappedButton>
        <S.Instruction hideOnMobile>Или перетащите
          сюда {isLogo ? 'новое лого' : 'новую фотографию'}</S.Instruction>
        <S.Instruction>.png,.jpg, до 5 мб.</S.Instruction>
      </S.Wrapper>
    </div>
  );
} 
