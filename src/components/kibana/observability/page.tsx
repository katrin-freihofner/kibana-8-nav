import React, { FunctionComponent, ReactNode } from 'react';
import { EuiBreadcrumb, EuiHeaderLinks, EuiButton } from '@elastic/eui';
import { KibanaPage, KibanaPageProps } from '../page/page';
import { ObservabilityNav } from './nav';
import { navigate } from 'gatsby';

export type ObservabilityPage = KibanaPageProps & {
  navItem?: string;
};

export const ObservabilityPage: FunctionComponent<ObservabilityPage> = ({
  breadcrumbs,
  headerLinks,
  navItem,
  children,
  ...rest
}) => {
  const baseBreadcrumb: EuiBreadcrumb[] = [
    {
      text: 'Observability',
      onClick: breadcrumbs?.length
        ? () => navigate('/observability/overview')
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
      <EuiButton iconType="plusInCircle" minWidth={0} size="s">
        Add data
      </EuiButton>
    </EuiHeaderLinks>
  );

  return (
    <KibanaPage
      breadcrumbs={theBreadcrumbs}
      headerLinks={theHeaderLinks}
      solutionNav={<ObservabilityNav navItem={navItem} />}
      {...rest}>
      {children}
    </KibanaPage>
  );
};
