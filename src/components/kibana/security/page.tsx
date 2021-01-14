import React, { FunctionComponent, ReactNode } from 'react';
import { EuiBreadcrumb, EuiHeaderLink, EuiHeaderLinks } from '@elastic/eui';
import { KibanaPage, KibanaPageProps } from '../page/page';
import { SecurityNav } from './nav';
import { navigate } from 'gatsby';

export type SecurityPage = KibanaPageProps & {
  navItem?: string;
};

export const SecurityPage: FunctionComponent<SecurityPage> = ({
  breadcrumbs = [],
  headerLinks,
  navItem,
  children,
  ...rest
}) => {
  const baseBreadcrumb: EuiBreadcrumb[] = [
    {
      text: 'Security',
      onClick: breadcrumbs?.length
        ? () => navigate('/security/overview')
        : undefined,
    },
  ];

  let theBreadcrumbs = baseBreadcrumb;
  if (breadcrumbs?.length) {
    theBreadcrumbs = baseBreadcrumb.concat(breadcrumbs);
  }

  const theHeaderLinks: ReactNode = (
    <EuiHeaderLinks>
      {headerLinks}
      <EuiHeaderLink>Settings</EuiHeaderLink>
    </EuiHeaderLinks>
  );

  return (
    <KibanaPage
      breadcrumbs={theBreadcrumbs}
      headerLinks={theHeaderLinks}
      solutionNav={<SecurityNav navItem={navItem} />}
      {...rest}>
      {children}
    </KibanaPage>
  );
};
