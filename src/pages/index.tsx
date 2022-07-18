import type { NextPage } from 'next';
import { css } from '@emotion/react';
import Link from 'next/link';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import { mq } from '../layouts/mq';

const SampleText = css`
  font-weight: bold;
  font-size: 24px;
`;

const DeleteLink = css`
  display: none;
`;

const ImageContainer = css`
  padding: 40px;
  opacity: 0.75;
`;

const TopContainer = css`
  ${mq[2]}{
    padding:0% 30%
  }}
`;

const StartButton = css`
  width: 100%;
  height: 100%;
  color: #18978f;
  padding: 10px;
  font-size: 20px;
`;

const start = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 50px;
  position: relative;
  background: #F7ECDE;
  border: none;
  border-radius: 30px;
  box-sizing: border-box;
  padding: 0 45px 0 25px;
  color: #E9DAC1;
  font-size: 16px;
  letter-spacing: 0.1em;
  line-height: 1.3;
  text-align: center;
  text-decoration: none;
  transition-duration: 0.3s;
  margin: auto;
  padding: 15px: 60px;
  box-shadow: 0px 8px 10px -7px;
  &:before{
    content: '';
    width: 8px;
    height: 8px;
    border: 0;
    border-top: 2px solid #54BAB9;
    border-right: 2px solid #54BAB9;
    transform: rotate(45deg);
    position: absolute;
    top: 50%;
    right: 25px;
    margin-top: -6px;
  }
  &:hover{
    background: #F7ECDE;
    color: #54BAB9;
    box-shadow: 0px 8px 10px -7px;
  }
  &:hover::before{
      content: '';
      width: 8px;
      height: 8px;
      border: 0;
      border-top: 2px solid #54BAB9;
      border-right: 2px solid #54BAB9;
      transform: rotate(45deg);
      position: absolute;
      top: 50%;
      right: 25px;
      margin-top: -6px;
  }
`;

const sliderWrapper = css`
  background: #f7ecde;
  border: none;
  border-radius: 15px;
  margin-bottom: 40px;
  box-shadow: 0px 8px 10px -7px;
`;

const Home: NextPage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow: true,
    autoplay: true,
  };
  const items = [
    { id: 1, title: 'はらさぐりんへようこそ', img: '/images/welcome.png' },
    { id: 2, title: '相手は回りくどい言葉を使ってくるよ', img: '/images/welcome2.png' },
    { id: 3, title: '相手の本心を当てよう！', img: '/images/welcome3.png' },
    { id: 4, title: '相手を怒らせないように気をつけよう', img: '/images/welcome4.png' },
    { id: 5, title: '間違えすぎると...', img: '/images/welcome5.png' },
  ];
  return (
    <div css={TopContainer}>
      <div>
        <Slider css={sliderWrapper} {...settings}>
          {items.map((item) => {
            return (
              <div css={ImageContainer} key={item.id}>
                <p css={SampleText}>{item.title}</p>
                <Image width={400} height={400} src={item.img} />
              </div>
            );
          })}
        </Slider>
      </div>
      <div css={start}>
        <Link href='/Quiz' passHref>
          <a css={StartButton}>Start!</a>
        </Link>
        <Link href='/Result' passHref>
          <a css={DeleteLink}>Result Page</a>
        </Link>
        <Link href='/GameOver' passHref>
          <a css={DeleteLink}>Game Over Page</a>
        </Link>
      </div>
    </div>
  );
};

export default Home;
