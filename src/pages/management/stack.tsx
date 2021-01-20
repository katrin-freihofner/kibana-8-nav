import React from 'react';

import { EuiEmptyPrompt, EuiHorizontalRule } from '@elastic/eui';

import { ManagementPage } from '../../components/kibana/management/page';

export default () => (
  <>
    <ManagementPage
      pageTitle="Management Overview"
      sideNavItem="Overview"
      centered={true}
      panelled={true}>
      <EuiEmptyPrompt
        iconType="managementApp"
        // TODO: Allow changing icon color to inherit
        // @ts-ignore
        iconColor={null}
        title={
          <h1>
            Welcome to <br />
            Stack Management 7.9.1
          </h1>
        }
        body={
          <>
            <p>
              Manage your indices, index patterns, saved objects, Kibana
              settings, and more.
            </p>
            <EuiHorizontalRule size="quarter" />
            <p>A complete list of apps is in the menu on the left.</p>
          </>
        }
      />
    </ManagementPage>
  </>
);
