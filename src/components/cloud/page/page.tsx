import React, {
  FunctionComponent,
  ReactNode,
  useContext,
  useEffect,
} from 'react';

import {
  CommonProps,
  EuiBreadcrumb,
  EuiPageContent,
  EuiPageContentProps,
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
import {
  EuiPageContentBody,
  EuiPageContentBodyProps,
} from '../../eui/page/page_body_content_shim';
import { EuiSticky } from '../../eui';

export type CloudPageProps = CommonProps & {
  breadcrumbs?: EuiBreadcrumb[];
  pageTitle: string;
  solutionNav?: ReactNode;
  pageHeader?: EuiPageHeaderProps;
  pageProps?: EuiPageProps;
  pageBodyProps?: EuiPageBodyProps;
  pageContentProps?: EuiPageContentProps;
  pageContentBodyProps?: EuiPageContentBodyProps;
  pageSideBarProps?: EuiPageSideBarProps;
  bottomBar?: ReactNode;
  restrictWidth?: boolean;
  dashboardStyle?: boolean;
};

export const CloudPage: FunctionComponent<CloudPageProps> = ({
  breadcrumbs,
  solutionNav,
  children,
  pageTitle,
  pageHeader,
  pageProps,
  pageBodyProps,
  pageContentProps,
  pageContentBodyProps,
  pageSideBarProps,
  bottomBar,
  restrictWidth = true,
  dashboardStyle = false,
  className,
}) => {
  const setHeaderItems = useContext(CloudChromeContext);

  useEffect(() => {
    setHeaderItems.setChrome({
      breadcrumbs,
      pageTitle,
    });
  }, [breadcrumbs]);

  const optionalSideBar = solutionNav ? (
    <EuiPageSideBar {...pageSideBarProps}>{solutionNav}</EuiPageSideBar>
  ) : undefined;

  const optionalPageHeader = pageHeader && (
    <EuiPageHeader restrictWidth={restrictWidth} {...pageHeader} />
  );

  const optionalBottomBar = bottomBar && (
    <EuiSticky
      bottom={0}
      left={optionalSideBar ? 192 : 0}
      zIndex={999}
      className="euiBottomBar euiBottomBar--paddingSmall">
      {bottomBar}
    </EuiSticky>
  );

  return dashboardStyle ? (
    <>
      <EuiPage restrictWidth={false} paddingSize="none">
        <EuiPageBody panelled={false}>
          <EuiPageContentBody restrictWidth={false} {...pageContentBodyProps}>
            {children}
          </EuiPageContentBody>
        </EuiPageBody>
      </EuiPage>
      {optionalBottomBar}
    </>
  ) : (
    <>
      <EuiPage
        grow={true}
        {...pageProps}
        paddingSize="none"
        className={className}>
        {optionalSideBar}
        <EuiPageBody panelled={Boolean(optionalSideBar)} {...pageBodyProps}>
          {optionalPageHeader}
          <EuiPageContent
            borderRadius={'none'}
            hasShadow={false}
            {...pageContentProps}>
            <EuiPageContentBody
              restrictWidth={restrictWidth}
              {...pageContentBodyProps}>
              {children}
            </EuiPageContentBody>
          </EuiPageContent>
        </EuiPageBody>
      </EuiPage>
      {optionalBottomBar}
    </>
  );
};
