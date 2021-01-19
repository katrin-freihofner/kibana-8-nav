import React, { FunctionComponent, ReactNode } from 'react';
import {
  EuiPage,
  EuiPageBody,
  EuiPageBodyProps,
  EuiPageProps,
  EuiPageSideBarProps,
  EuiResizableContainer,
  EuiPageContent,
  EuiPageContentBody,
  EuiPageContentBodyProps,
  EuiPageContentProps,
} from '@elastic/eui';
import classNames from 'classnames';
import { KibanaPageHeader, KibanaPageHeaderProps } from './page_header';

export type KibanaPageProps = {
  solutionNav?: ReactNode;
  pageHeader?: KibanaPageHeaderProps;
  pageProps?: EuiPageProps;
  pageBodyProps?: EuiPageBodyProps;
  pageContentProps?: EuiPageContentProps;
  pageContentBodyProps?: EuiPageContentBodyProps;
  pageSideBarProps?: EuiPageSideBarProps;
  restrictWidth?: boolean;
};

export const KibanaPage: FunctionComponent<KibanaPageProps> = ({
  solutionNav,
  children,
  pageHeader,
  pageProps,
  pageBodyProps,
  pageContentProps,
  pageContentBodyProps,
  pageSideBarProps,
  restrictWidth = true,
}) => {
  const optionalSideBar = solutionNav ? (
    <div {...pageSideBarProps}>{solutionNav}</div>
  ) : undefined;

  const optionalPageHeader = pageHeader && <KibanaPageHeader {...pageHeader} />;

  const pageClasses = classNames(
    'kbnPage',
    pageProps ? pageProps.className : ''
  );

  const pageBody = (
    <EuiPageBody {...pageBodyProps}>
      {optionalPageHeader}
      {/* TODO: Allow EuiPageContent to restrictWidth */}
      <EuiPageContent
        {...pageContentProps}
        className={restrictWidth ? 'euiPageContent--restrictWidth' : ''}>
        <EuiPageContentBody {...pageContentBodyProps}>
          {children}
        </EuiPageContentBody>
      </EuiPageContent>
    </EuiPageBody>
  );

  return optionalSideBar ? (
    <>
      <EuiResizableContainer style={{ flexGrow: 1 }}>
        {(EuiResizablePanel, EuiResizableButton) => (
          <EuiPage {...pageProps} paddingSize="none" className={pageClasses}>
            <EuiResizablePanel
              mode={[
                'collapsible',
                {
                  position: 'top',
                },
              ]}
              initialSize={17}
              // TODO: Fix: miSize isn't respected on page load
              minSize={'60px'}
              // @ts-ignore TODO: Allow for maxSize
              // Also TODO: Allow all Size follows take a percentage or string value
              // maxSize="300px"
              paddingSize="none"
              className="euiPageSideBar">
              {optionalSideBar}
            </EuiResizablePanel>

            <EuiResizableButton className="kbnPage__resizer" style={{}} />

            <EuiResizablePanel
              mode="main"
              initialSize={83}
              minSize="600px"
              paddingSize="none">
              {pageBody}
            </EuiResizablePanel>
          </EuiPage>
        )}
      </EuiResizableContainer>
    </>
  ) : (
    <>
      <EuiPage {...pageProps} paddingSize="none" className={pageClasses}>
        {pageBody}
      </EuiPage>
    </>
  );
};
