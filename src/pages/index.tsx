<<<<<<< HEAD
import type { NextPage } from 'next'
import { css } from '@emotion/react'
import Link from 'next/link'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
=======
import type { NextPage } from 'next';
import { css } from '@emotion/react';
import Link from 'next/link';
>>>>>>> origin/develop

const SampleText = css`
  font-weight: bold;
  font-size: 28px;
`;

const DeleteLink = css`
  display: none;
`;

const Home: NextPage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow: true,
    autoplay: false,
  }
  const items = [
    { id: 1, title: 'title1', img: './favicon.ico' },
    { id: 2, title: 'title2', img: './favicon.ico' },
    { id: 3, title: 'title3', img: './favicon.ico' },
    { id: 4, title: 'title4', img: './favicon.ico' },
    { id: 5, title: 'title5', img: './favicon.ico' },
    { id: 6, title: 'title6', img: './favicon.ico' },
  ]
  return (
    <div>
      <p css={SampleText}>サンプルだよ〜</p>
      <div>
        <p>yahharo-</p>
      </div>
      <div>
        <Slider {...settings}>
          {items.map((item) => {
            return (
              <div key={item.id}>
                <p>{item.title}</p>
                <img src={item.img} />
              </div>
            )
          })}
        </Slider>
      </div>
      <Link href='/Quiz' passHref>
        <a>Quiz Page</a>
      </Link>
      <Link href='/Result' passHref>
        <a css={DeleteLink}>Result Page</a>
      </Link>
    </div>
  );
};

export default Home;
