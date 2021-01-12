import React, {
  FunctionComponent,
  ReactNode,
  useContext,
  useEffect,
} from 'react';
import {
  EuiBreadcrumb,
  EuiPage,
  EuiPageBody,
  EuiPageBodyProps,
  EuiPageProps,
  EuiPageSideBarProps,
  EuiResizableContainer,
} from '@elastic/eui';
import { KibanaPageHeader, KibanaPageHeaderProps } from './page_header';
import { KibanaChromeContext } from '../../layout';
import Helmet from 'react-helmet';
import classNames from 'classnames';

export type KibanaPageProps = {
  breadcrumbs?: EuiBreadcrumb[];
  headerLinks?: ReactNode;
  pageTitle: string;
  solutionNav?: ReactNode;
  pageHeader?: KibanaPageHeaderProps;
  pageProps?: EuiPageProps;
  pageBodyProps?: EuiPageBodyProps;
  pageSideBarProps?: EuiPageSideBarProps;
  /**
   * Only allows the page to be the full height of the window.
   * Pages then must control their own internal scroll.
   */
  fullHeight?: boolean;
};

export const KibanaPage: FunctionComponent<KibanaPageProps> = ({
  breadcrumbs,
  headerLinks,
  solutionNav,
  children,
  pageTitle,
  pageHeader,
  pageProps,
  pageBodyProps,
  pageSideBarProps,
  fullHeight,
}) => {
  const setHeaderItems = useContext(KibanaChromeContext);

  useEffect(() => {
    setHeaderItems.setChrome({
      breadcrumbs,
      headerLinks,
    });
  }, [breadcrumbs, headerLinks]);

  const optionalSideBar = solutionNav ? (
    <div {...pageSideBarProps}>{solutionNav}</div>
  ) : undefined;

  const optionalPageHeader = pageHeader && <KibanaPageHeader {...pageHeader} />;

  const pageClasses = classNames(
    'kbnPage',
    {
      'kbnPage--fullHeight': fullHeight,
    },
    pageProps ? pageProps.className : ''
  );

  return optionalSideBar ? (
    <>
      <Helmet>
        <title>{pageTitle} | Kibana 8 Prototype</title>
      </Helmet>

      <EuiResizableContainer>
        {(EuiResizablePanel, EuiResizableButton) => (
          <EuiPage {...pageProps} paddingSize="none" className={pageClasses}>
            <EuiResizablePanel
              mode="collapsible"
              initialSize={15}
              // TODO: Fix: miSize isn't respected on page load
              minSize={'220px'}
              // @ts-ignore TODO: Allow for maxSize
              // Also TODO: Allow all Size follows take a percentage or string value
              maxSize="300px"
              paddingSize="none"
              className="euiPageSideBar">
              {optionalSideBar}
            </EuiResizablePanel>

            <EuiResizableButton style={{}} />

            <EuiResizablePanel
              mode="main"
              initialSize={85}
              minSize="300px"
              paddingSize="none">
              <EuiPageBody {...pageBodyProps}>
                {optionalPageHeader}
                {children}
              </EuiPageBody>
            </EuiResizablePanel>
          </EuiPage>
        )}
      </EuiResizableContainer>
    </>
  ) : (
    <>
      <Helmet>
        <title>{pageTitle} | Kibana 8 Prototype</title>
      </Helmet>
      <EuiPage {...pageProps} paddingSize="none" className={pageClasses}>
        {optionalSideBar}
        <EuiPageBody {...pageBodyProps}>
          {optionalPageHeader}
          {children}
        </EuiPageBody>
      </EuiPage>
    </>
  );
};
