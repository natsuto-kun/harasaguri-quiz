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
  min-height: 100vh;
  min-width: 100vw;
  width: 100vw;
  height: 100vh;
  background: var(--ui-background-color);
`;

export const Layout: React.FC<LayoutProps> = ({ children, title }: Props) => {
  const pageTitle = title || 'harasaguriquiz';
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <div css={container}>{children}</div>
    </>
  );
};
