import React, {
  FunctionComponent,
  ReactNode,
  useContext,
  useEffect,
} from 'react';
import Helmet from 'react-helmet';

import {
  CommonProps,
  EuiBreadcrumb,
  EuiPageSideBar,
  EuiPageSideBarProps,
} from '@elastic/eui';
import {
  EuiPageHeaderProps,
  EuiPageHeader,
} from '../../eui/page/page_header_shim';

import { CloudChromeContext } from '../layout';
import { EuiPage, EuiPageProps } from '../../eui/page/page_shim';
import { EuiPageBody, EuiPageBodyProps } from '../../eui/page/page_body_shim';

export type CloudPageProps = CommonProps & {
  breadcrumbs?: EuiBreadcrumb[];
  pageTitle: string;
  solutionNav?: ReactNode;
  pageHeader?: EuiPageHeaderProps;
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

  const optionalPageHeader = pageHeader && <EuiPageHeader {...pageHeader} />;

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
