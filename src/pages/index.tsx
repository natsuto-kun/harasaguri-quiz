import type { NextPage } from 'next';
import { css } from '@emotion/react';
import Link from 'next/link';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

const SampleText = css`
  font-weight: bold;
  font-size: 28px;
`;

const DeleteLink = css`
  display: none;
`;

const ImageContainer = css`
  padding: 40px;
`;

const container = css`
  margin-bottom: 40px;
`;

const start = css`
  margin-top: 40px;
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
    { id: 1, title: 'はらさぐりにようこそ', img: '/images/welcome.png' },
    { id: 2, title: '相手は回りくどい言葉を使ってくるよ', img: '/images/welcome2.png' },
    { id: 3, title: '相手の本心を当てよう！', img: '/images/welcome3.png' },
    { id: 4, title: '相手を怒らせないように気をつけよう', img: '/images/welcome4.png' },
    { id: 5, title: '間違えすぎると...', img: '/favicon.ico' },
  ];
  return (
    <div css={container}>
      <p css={SampleText}>サンプルだよ〜</p>
      <div>
        <Slider {...settings}>
          {items.map((item) => {
            return (
              <div css={ImageContainer} key={item.id}>
                <p>{item.title}</p>
                <Image width={400} height={400} src={item.img} />
              </div>
            );
          })}
        </Slider>
      </div>
      <div css={start}>
        <Link href='/Quiz' passHref>
          <a>Quiz Page</a>
        </Link>
        <Link href='/Result' passHref>
          <a css={DeleteLink}>Result Page</a>
        </Link>
      </div>
    </div>
  );
};

export default Home;
