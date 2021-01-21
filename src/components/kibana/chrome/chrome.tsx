import React, { ReactNode } from 'react';
import { Helmet } from 'react-helmet';
import classNames from 'classnames';

import { CommonProps } from '@elastic/eui';
import { KibanaHeader, KibanaHeaderProps } from './header';

export interface KibanaChrome extends KibanaHeaderProps, CommonProps {
  pageTitle?: string;
  fullHeight?: boolean;
}

export type KibanaChromeProps = KibanaChrome & {
  children?: ReactNode;
};

export const KibanaChrome: React.FunctionComponent<KibanaChromeProps> = ({
  fullHeight,
  children,
  className,
  pageTitle,
  breadcrumbs,
  headerLinks,
}) => {
  const classes = classNames(
    'kbnChrome',
    {
      'kbnChrome--fullHeight': fullHeight,
    },
    className
  );

  return (
    <div className={classes}>
      <Helmet>
        <title>{pageTitle} | Kibana 8 Prototype</title>
      </Helmet>

      <KibanaHeader breadcrumbs={breadcrumbs} headerLinks={headerLinks} />

      {children}
    </div>
  );
};
