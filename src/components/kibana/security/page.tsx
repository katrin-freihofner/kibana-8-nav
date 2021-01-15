import React, {
  FunctionComponent,
  ReactNode,
  useContext,
  useEffect,
} from 'react';
import { EuiBreadcrumb, EuiHeaderLinks, EuiHeaderLink } from '@elastic/eui';
import { KibanaPage, KibanaPageProps } from '../page/page';
import { SecurityNav } from './nav';
import { navigate } from 'gatsby';
import { KibanaChromeContext } from '../layout';
import { KibanaHeaderProps } from '../chrome/header';

export type SecurityPage = KibanaPageProps &
  KibanaHeaderProps & {
    navItem?: string;
    pageTitle?: string;
  };

export const SecurityPage: FunctionComponent<SecurityPage> = ({
  breadcrumbs,
  headerLinks,
  navItem,
  children,
  pageTitle,
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

  const setKibanaContext = useContext(KibanaChromeContext);

  useEffect(() => {
    setKibanaContext.setChrome({
      breadcrumbs: theBreadcrumbs,
      headerLinks: theHeaderLinks,
      pageTitle: pageTitle || 'Security',
    });
  }, [breadcrumbs, headerLinks]);

  return (
    <KibanaPage solutionNav={<SecurityNav navItem={navItem} />} {...rest}>
      {children}
    </KibanaPage>
  );
};
