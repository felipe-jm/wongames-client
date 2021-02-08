import { useEffect, useRef, useState } from 'react';
import SlickSlider from 'react-slick';

import { Close } from '@styled-icons/material-outlined';
import { ArrowBackIos as ArrowLeft } from '@styled-icons/material-outlined/ArrowBackIos';
import { ArrowForwardIos as ArrowRight } from '@styled-icons/material-outlined/ArrowForwardIos';

import Slider, { SliderSettings } from 'components/Slider';

import * as S from './styles';

const commomSettings: SliderSettings = {
  infinite: false,
  lazyLoad: 'ondemand',
  arrows: true,
  nextArrow: <ArrowRight aria-label="next images" />,
  prevArrow: <ArrowLeft aria-label="previous images" />
};

const settings: SliderSettings = {
  ...commomSettings,
  slidesToShow: 4,
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 3.2,
        draggable: true
      }
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
        draggable: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
        draggable: true
      }
    }
  ]
};

const modalSettings: SliderSettings = {
  ...commomSettings,
  slidesToShow: 1
};

export type GalleryImageProps = {
  src: string;
  label: string;
};

export type GalleryProps = {
  items: GalleryImageProps[];
};

const Gallery: React.FC<GalleryProps> = ({ items }) => {
  const slider = useRef<SlickSlider>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyUp = ({ key }: KeyboardEvent) => {
      key === 'Escape' && setIsOpen(false);
    };

    window.addEventListener('keyup', handleKeyUp);

    return () => window.removeEventListener('keyup', handleKeyUp);
  }, []);

  return (
    <S.Wrapper>
      <Slider ref={slider} settings={settings}>
        {items.map((item, index) => (
          <img
            key={item.src}
            role="button"
            src={item.src}
            alt={`Thumb - ${item.label}`}
            onClick={() => {
              setIsOpen(true);
              slider.current?.slickGoTo(index, true);
            }}
          />
        ))}
      </Slider>

      <S.Modal isOpen={isOpen} aria-label="modal" aria-hidden={!isOpen}>
        <S.Close
          role="button"
          aria-label="close modal"
          onClick={() => setIsOpen(false)}
        >
          <Close size={40} />
        </S.Close>

        <S.Content>
          <Slider ref={slider} settings={modalSettings}>
            {items.map((item) => (
              <img key={item.src} src={item.src} alt={item.label} />
            ))}
          </Slider>
        </S.Content>
      </S.Modal>
    </S.Wrapper>
  );
};

export default Gallery;
