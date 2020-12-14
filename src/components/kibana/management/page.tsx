import React, { FunctionComponent } from 'react';
import { EuiBreadcrumb } from '@elastic/eui';
import { KibanaPage, KibanaPageProps } from '../page/page';
import { KibanaManagementNav } from './nav';
import { navigate } from 'gatsby';

export type ManagementPage = KibanaPageProps & {
  sideNavItem?: string;
};

export const ManagementPage: FunctionComponent<ManagementPage> = ({
  breadcrumbs,
  sideNavItem,
  children,
  ...rest
}) => {
  const baseBreadcrumb: EuiBreadcrumb[] = [
    {
      text: 'Management',
      onClick: breadcrumbs?.length
        ? () => navigate('management/stack')
        : undefined,
    },
  ];

  let theBreadcrumbs = baseBreadcrumb;
  if (breadcrumbs?.length) {
    theBreadcrumbs = baseBreadcrumb.concat(breadcrumbs);
  }

  return (
    <KibanaPage
      breadcrumbs={theBreadcrumbs}
      solutionNav={<KibanaManagementNav currentItem={sideNavItem} />}
      {...rest}>
      {children}
    </KibanaPage>
  );
};
