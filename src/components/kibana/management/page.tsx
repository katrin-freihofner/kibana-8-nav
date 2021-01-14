import React, { FunctionComponent, useContext, useEffect } from 'react';
import { EuiBreadcrumb } from '@elastic/eui';
import { KibanaPage } from '../page/page';
import { KibanaManagementNav } from './nav';
import { navigate } from 'gatsby';
import { KibanaChromeContext } from '../layout';
import { KibanaHeaderProps } from '../chrome/header';

export type ManagementPage = KibanaHeaderProps & {
  sideNavItem?: string;
  pageTitle?: string;
};

export const ManagementPage: FunctionComponent<ManagementPage> = ({
  breadcrumbs,
  sideNavItem,
  pageTitle,
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

  const setKibanaContext = useContext(KibanaChromeContext);

  useEffect(() => {
    setKibanaContext.setChrome({
      breadcrumbs: theBreadcrumbs,
      pageTitle: pageTitle || 'Management',
    });
  }, [breadcrumbs]);

  return (
    <KibanaPage
      solutionNav={<KibanaManagementNav currentItem={sideNavItem} />}
      {...rest}>
      {children}
    </KibanaPage>
  );
};
