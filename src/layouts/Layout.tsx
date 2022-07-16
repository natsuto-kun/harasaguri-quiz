import { ReactElement } from 'react';
import { css } from '@emotion/react';
import Head from 'next/head';

type LayoutProps = Required<{
  readonly children: ReactElement;
}>;

type Props = {
  children?: React.ReactNode;
  title?: string;
};

const container = css`
  width: 100vw;
  height: 100vh;
`;

const mainContent = css`
  padding: 40px;
  width: 100%;
  height: 100%;
  background: var(--ui-background-color);
`;

export const Layout: React.FC<LayoutProps> = ({ children, title }: Props) => {
  const pageTitle = title || 'harasaguriquiz';
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <div css={container}>
        <div css={mainContent}>{children}</div>
      </div>
    </>
  );
};
