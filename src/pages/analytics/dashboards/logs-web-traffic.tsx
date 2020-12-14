import React, { ReactNode } from 'react';
import { navigate } from 'gatsby';

import {
  EuiBreadcrumb,
  EuiPageHeader,
  EuiButton,
  EuiHeaderLink,
  EuiHeaderLinks,
} from '@elastic/eui';
// @ts-ignore
import logsDashboardImg from '../../../images/[Logs] Web Traffic.png';
import { KibanaGlobals } from '../../../components/kibana/chrome/globals';
import { KibanaPage } from '../../../components/kibana/page/page';

const breadcrumbs: EuiBreadcrumb[] = [
  {
    text: 'Analytics',
    onClick: () => {
      navigate('analytics/overview');
    },
  },
  {
    text: 'Dashboards',
    onClick: () => {
      navigate('analytics/dashboards');
    },
  },
  {
    text: '[Logs] Web Traffic',
  },
];

const headerLinks: ReactNode = (
  <EuiHeaderLinks>
    <EuiHeaderLink>Full screen</EuiHeaderLink>

    <EuiHeaderLink>Share</EuiHeaderLink>

    <EuiHeaderLink>Clone</EuiHeaderLink>

    <EuiButton
      iconType="pencil"
      style={{ minWidth: 80 }}
      size="s"
      color="secondary">
      Edit
    </EuiButton>
  </EuiHeaderLinks>
);

export default () => (
  <KibanaPage
    pageTitle="[Logs] Web Traffic | Dashboards"
    breadcrumbs={breadcrumbs}
    headerLinks={headerLinks}>
    <EuiPageHeader style={{ padding: 16 }}>
      <KibanaGlobals />
    </EuiPageHeader>
    <div className="pageScreenshot__TBD">
      <img
        className="pageScreenshot pageScreenshot--fullWidth"
        alt="[Logs] Web Traffic dashboard"
        width={1175}
        src={logsDashboardImg}
      />
    </div>
  </KibanaPage>
);
