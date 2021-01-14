import React from 'react';
import { EuiButtonProps, EuiButton } from '@elastic/eui';
import ThemeContext from '../../../themes/ThemeContext';

export const ConsoleThemeButton: React.FunctionComponent<EuiButtonProps> = ({
  ...props
}) => {
  return (
    <ThemeContext.Consumer>
      {(context) => (
        <EuiButton
          size="s"
          iconType={context.theme === 'dark' ? 'faceSad' : 'faceHappy'}
          onClick={context.toggleDark}
          isLoading={context.themeIsLoading}
          {...props}>
          Switch theme
        </EuiButton>
      )}
    </ThemeContext.Consumer>
  );
};
