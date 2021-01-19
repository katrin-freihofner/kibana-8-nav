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
import ThemeContext from '../../../themes/ThemeContext';

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
  const context = React.useContext(ThemeContext);

  const optionalSideBar = solutionNav ? (
    <div {...pageSideBarProps}>{solutionNav}</div>
  ) : undefined;

  const optionalPageHeader = pageHeader && <KibanaPageHeader {...pageHeader} />;

  const pageClasses = classNames(
    'kbnPage',
    pageProps ? pageProps.className : ''
  );

  const pageBodyClasses = classNames(
    {
      'kbnPageBody--hasSideNav': solutionNav,
    },
    pageBodyProps ? pageBodyProps.className : ''
  );

  const pageBody = (
    <EuiPageBody {...pageBodyProps} className={pageBodyClasses}>
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
          <EuiPage
            paddingSize={context.theme.includes('dark') ? undefined : 'none'}
            {...pageProps}
            className={pageClasses}>
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
      <EuiPage
        paddingSize={context.theme.includes('dark') ? undefined : 'none'}
        restrictWidth={context.theme.includes('dark') ? restrictWidth : false}
        {...pageProps}
        className={pageClasses}>
        {pageBody}
      </EuiPage>
    </>
  );
};
