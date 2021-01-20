import React, { FunctionComponent, ReactNode } from 'react';
import classNames from 'classnames';

import {
  EuiPageSideBarProps,
  EuiResizableContainer,
  EuiPageContent,
  EuiPageContentProps,
  EuiPageSideBar,
} from '@elastic/eui';
import { EuiPage, EuiPageProps } from '../../../eui/page/page_shim';
import {
  EuiPageBody,
  EuiPageBodyProps,
} from '../../../eui/page/page_body_shim';
import {
  EuiPageContentBody,
  EuiPageContentBodyProps,
} from '../../../eui/page/page_body_content_shim';

import ThemeContext from '../../../../themes/ThemeContext';

import { KibanaPageHeader, KibanaPageHeaderProps } from './page_header';
import { KibanaPageK8 } from './page_k8';
import { KibanaGlobals } from '../globals';

export type KibanaPageProps = EuiPageProps & {
  solutionNav?: ReactNode;
  pageHeader?: KibanaPageHeaderProps;
  pageBodyProps?: EuiPageBodyProps;
  pageContentProps?: EuiPageContentProps;
  pageContentBodyProps?: EuiPageContentBodyProps;
  pageSideBarProps?: EuiPageSideBarProps;
  restrictWidth?: boolean;
  resizableSidebar?: boolean;
  centered?: boolean;
  panelled?: boolean;
  globals?: boolean;
};

export const KibanaPage: FunctionComponent<KibanaPageProps> = ({
  solutionNav,
  children,
  pageHeader,
  pageBodyProps,
  pageContentProps,
  pageContentBodyProps,
  pageSideBarProps,
  restrictWidth = true,
  resizableSidebar = false,
  centered = false,
  panelled,
  globals = false,
  className,
  ...rest
}) => {
  const context = React.useContext(ThemeContext);

  if (context.theme.includes('light')) {
    return (
      <KibanaPageK8
        solutionNav={solutionNav}
        children={children}
        pageHeader={pageHeader}
        pageBodyProps={pageBodyProps}
        pageContentProps={pageContentProps}
        pageContentBodyProps={pageContentBodyProps}
        pageSideBarProps={pageSideBarProps}
        restrictWidth={restrictWidth}
        resizableSidebar={resizableSidebar}
        centered={centered}
        panelled={panelled}
        globals={globals}
        {...rest}
      />
    );
  }

  const optionalSideBar = solutionNav ? (
    <EuiPageSideBar {...pageSideBarProps}>{solutionNav}</EuiPageSideBar>
  ) : undefined;

  const optionalPageHeader = pageHeader && <KibanaPageHeader {...pageHeader} />;

  const optionalGlobals = globals && <KibanaGlobals />;

  const pageClasses = classNames('kbnPage', className);

  const pageBody = (
    <EuiPageBody {...pageBodyProps} restrictWidth={restrictWidth}>
      {Boolean(optionalSideBar) && optionalGlobals}
      {optionalPageHeader}
      {/* TODO: Allow EuiPageContent to restrictWidth */}
      <EuiPageContent
        verticalPosition={centered ? 'center' : undefined}
        horizontalPosition={centered ? 'center' : undefined}
        {...pageContentProps}>
        <EuiPageContentBody {...pageContentBodyProps}>
          {children}
        </EuiPageContentBody>
      </EuiPageContent>
    </EuiPageBody>
  );

  return resizableSidebar ? (
    <>
      <EuiResizableContainer style={{ flexGrow: 1 }}>
        {(EuiResizablePanel, EuiResizableButton) => (
          <EuiPage
            paddingSize={context.theme.includes('dark') ? undefined : 'none'}
            {...rest}
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

            <EuiResizableButton className="kbnPage__resizer" />

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
      {Boolean(!optionalSideBar) && optionalGlobals}
      <EuiPage
        grow={true}
        restrictWidth={!solutionNav && restrictWidth}
        {...rest}
        className={pageClasses}>
        {optionalSideBar}
        {pageBody}
      </EuiPage>
    </>
  );
};
