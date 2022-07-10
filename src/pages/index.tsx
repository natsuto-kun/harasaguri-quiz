import type {NextPage} from 'next';
import {css} from '@emotion/react';

const SampleText =css`
  font-weight: bold;
  font-size: 28px;
`;

const Home: NextPage = () => {
  return (
    <div>
      <p css={SampleText}>サンプルだよ〜</p>
    </div>
  );
};

export default Home;
