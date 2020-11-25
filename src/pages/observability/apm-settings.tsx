import React from 'react';

import { EuiPageContent, EuiEmptyPrompt, EuiButton } from '@elastic/eui';

import { ObservabilityPage } from '../../components/observability/page';

export default () => (
  <>
    <ObservabilityPage pageTitle="APM Settings" navItem="Agent configuration">
      <EuiPageContent verticalPosition="center" horizontalPosition="center">
        <EuiEmptyPrompt
          iconType="minusInCircle"
          title={<h1>No configurations found</h1>}
          body={
            <p>
              {"Let's"} change that! You can fine-tune agent configuration
              directly from Kibana without having to redeploy. Get started by
              creating your first configuration.
            </p>
          }
          actions={<EuiButton fill>Create configuration</EuiButton>}
        />
      </EuiPageContent>
    </ObservabilityPage>
  </>
);
