import React, { FunctionComponent, ReactNode } from 'react';
import {
  EuiPage,
  EuiPageBody,
  EuiPageBodyProps,
  EuiPageProps,
  EuiPageSideBarProps,
  EuiResizableContainer,
} from '@elastic/eui';
import { KibanaPageHeader, KibanaPageHeaderProps } from './page_header';
import classNames from 'classnames';

export type KibanaPageProps = {
  solutionNav?: ReactNode;
  pageHeader?: KibanaPageHeaderProps;
  pageProps?: EuiPageProps;
  pageBodyProps?: EuiPageBodyProps;
  pageSideBarProps?: EuiPageSideBarProps;
};

export const KibanaPage: FunctionComponent<KibanaPageProps> = ({
  solutionNav,
  children,
  pageHeader,
  pageProps,
  pageBodyProps,
  pageSideBarProps,
}) => {
  const optionalSideBar = solutionNav ? (
    <div {...pageSideBarProps}>{solutionNav}</div>
  ) : undefined;

  const optionalPageHeader = pageHeader && <KibanaPageHeader {...pageHeader} />;

  const pageClasses = classNames(
    'kbnPage',
    pageProps ? pageProps.className : ''
  );

  return optionalSideBar ? (
    <>
      <EuiResizableContainer>
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
              maxSize="300px"
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
