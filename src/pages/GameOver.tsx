/* eslint-disable new-cap */
import Script from 'next/script';
import React from 'react';

const ResultPage = () => {
  const twitterText = 'もうちょっと人の気持ちを理解しましょう...';

  return (
    <div>
      <h2>GameOver...</h2>
      <div>
        <a
          href='https://twitter.com/share?ref_src=twsrc%5Etfw'
          className='twitter-share-button'
          data-text={twitterText}
          data-show-count='false'
        ></a>
        <Script async src='https://platform.twitter.com/widgets.js' charSet='utf-8'></Script>
      </div>
    </div>
  );
};

export default ResultPage;
