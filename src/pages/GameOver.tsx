/* eslint-disable new-cap */
import Script from 'next/script';
import React from 'react';
import Image from 'next/image';
import { mq } from '../layouts/mq';
import { css } from '@emotion/react';

const ResultText = css`
  font-size: 48px;
  margin-top: 0;
  margin-bottom: 20px;
`;

const TopContainer = css`
  ${mq[2]}{
    padding:0% 30%
  }}
`;

const TweetButton = css`
  potition: absolute;
  bottom: 50px;
  left: 50%;
  width: 100px;
`;

const GameOver = () => {
  const twitterText = 'もうちょっと人の気持ちを理解しましょう...';

  return (
    <div css={TopContainer}>
      <div>
        <Image width={400} height={400} src='/images/gameover.png'></Image>
        <h2 css={ResultText}>GameOver...</h2>
        <div css={TweetButton}>
          <a
            href='https://twitter.com/share?ref_src=twsrc%5Etfw'
            className='twitter-share-button'
            data-text={twitterText}
            data-show-count='false'
          ></a>
          <Script async src='https://platform.twitter.com/widgets.js' charSet='utf-8'></Script>
        </div>
      </div>
    </div>
  );
};

export default GameOver;
