import React, {
  FunctionComponent,
  ReactNode,
  useContext,
  useEffect,
} from 'react';
import {
  CommonProps,
  EuiBreadcrumb,
  EuiPage,
  EuiPageBody,
  EuiPageBodyProps,
  EuiPageProps,
  EuiPageSideBar,
  EuiPageSideBarProps,
} from '@elastic/eui';
import { CloudChromeContext } from '../layout';
import Helmet from 'react-helmet';
import {
  KibanaPageHeader,
  KibanaPageHeaderProps,
} from '../../kibana/page/page_header';

export type CloudPageProps = CommonProps & {
  breadcrumbs?: EuiBreadcrumb[];
  pageTitle: string;
  solutionNav?: ReactNode;
  pageHeader?: KibanaPageHeaderProps;
  pageProps?: EuiPageProps;
  pageBodyProps?: EuiPageBodyProps;
  pageSideBarProps?: EuiPageSideBarProps;
};

export const CloudPage: FunctionComponent<CloudPageProps> = ({
  breadcrumbs,
  solutionNav,
  children,
  pageTitle,
  pageHeader,
  pageProps,
  pageBodyProps,
  pageSideBarProps,
  className,
}) => {
  const setHeaderItems = useContext(CloudChromeContext);

  useEffect(() => {
    setHeaderItems.setChrome({
      breadcrumbs,
    });
  }, [breadcrumbs]);

  const optionalSideBar = solutionNav ? (
    <EuiPageSideBar {...pageSideBarProps}>{solutionNav}</EuiPageSideBar>
  ) : undefined;

  const optionalPageHeader = pageHeader && <KibanaPageHeader {...pageHeader} />;

  return (
    <>
      <Helmet>
        <title>{pageTitle} | Cloud 8 Prototype</title>
      </Helmet>
      <EuiPage {...pageProps} paddingSize="none" className={className}>
        {optionalSideBar}
        <EuiPageBody {...pageBodyProps}>
          {optionalPageHeader}
          {children}
        </EuiPageBody>
      </EuiPage>
    </>
  );
};
