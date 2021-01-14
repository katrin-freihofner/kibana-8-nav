import React, { ReactNode } from 'react';
import classNames from 'classnames';

import { CommonProps } from '@elastic/eui';

export type KibanaChromeProps = CommonProps & {
  fullHeight?: boolean;
  children?: ReactNode;
};

export const KibanaChrome: React.FunctionComponent<KibanaChromeProps> = ({
  fullHeight,
  children,
  className,
}) => {
  const classes = classNames(
    'kbnChrome',
    {
      'kbnChrome--fullHeight': fullHeight,
    },
    className
  );

  return <div className={classes}>{children}</div>;
};
