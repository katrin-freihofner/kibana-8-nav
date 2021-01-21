import React, { ReactNode } from 'react';
import { Helmet } from 'react-helmet';
import classNames from 'classnames';

import { CommonProps } from '@elastic/eui';
import { CloudHeader, CloudHeaderProps } from './header';

export interface CloudChrome extends CloudHeaderProps, CommonProps {
  pageTitle?: string;
  fullHeight?: boolean;
}

export type CloudChromeProps = CloudChrome & {
  children?: ReactNode;
};

export const CloudChrome: React.FunctionComponent<CloudChromeProps> = ({
  children,
  className,
  pageTitle,
  breadcrumbs,
}) => {
  const classes = classNames('cloudChrome', className);

  return (
    <div className={classes}>
      <Helmet>
        <title>{pageTitle} | Cloud 8 Prototype</title>
      </Helmet>

      <CloudHeader breadcrumbs={breadcrumbs} />

      {children}
    </div>
  );
};
