import React, { ReactNode } from 'react';
import { Helmet } from 'react-helmet';

import { CommonProps } from '@elastic/eui';
import { DocsHeader, DocsHeaderProps } from './header';
import { EuiPageLayout } from '../../eui/page/page_layout';

export interface DocsChrome extends DocsHeaderProps, CommonProps {
  pageTitle?: string;
  fullHeight?: boolean;
}

export type DocsChromeProps = DocsChrome & {
  children?: ReactNode;
};

export const DocsChrome: React.FunctionComponent<DocsChromeProps> = ({
  children,
  pageTitle,
  breadcrumbs,
}) => {
  return (
    <EuiPageLayout numberOfFixedHeaders={2}>
      <Helmet>
        <title>{pageTitle} | Docs Prototype</title>
      </Helmet>

      <DocsHeader breadcrumbs={breadcrumbs} />

      {children}
    </EuiPageLayout>
  );
};
