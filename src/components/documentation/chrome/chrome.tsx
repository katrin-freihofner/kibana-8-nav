import React, { ReactNode } from 'react';
import { Helmet } from 'react-helmet';
import classNames from 'classnames';

import { CommonProps } from '@elastic/eui';
import { DocsHeader, DocsHeaderProps } from './header';

export interface DocsChrome extends DocsHeaderProps, CommonProps {
  pageTitle?: string;
  fullHeight?: boolean;
}

export type DocsChromeProps = DocsChrome & {
  children?: ReactNode;
};

export const DocsChrome: React.FunctionComponent<DocsChromeProps> = ({
  children,
  className,
  pageTitle,
  breadcrumbs,
}) => {
  const classes = classNames('docsChrome', className);

  return (
    <div className={classes}>
      <Helmet>
        <title>{pageTitle} | Docs Prototype</title>
      </Helmet>

      <DocsHeader breadcrumbs={breadcrumbs} />

      {children}
    </div>
  );
};
