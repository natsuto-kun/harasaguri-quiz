import type { NextPage } from 'next';
import { css } from '@emotion/react';
import Link from 'next/link';

const SampleText = css`
  font-weight: bold;
  font-size: 28px;
`;

const DeleteLink = css`
  display: none;
`;

const Home: NextPage = () => {
  return (
    <div>
      <p css={SampleText}>サンプルだよ〜</p>
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
