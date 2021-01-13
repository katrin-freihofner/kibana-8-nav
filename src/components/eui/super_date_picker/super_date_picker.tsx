import React, { ReactElement, HTMLAttributes, useState } from 'react';
import classNames from 'classnames';
import {
  CommonProps,
  EuiButton,
  EuiFlexGroup,
  EuiFlexItem,
  EuiPopover,
  EuiText,
} from '@elastic/eui';

type Props = CommonProps & HTMLAttributes<HTMLDivElement>;

export function EuiSuperDatePicker({
  className,
  ...rest
}: Props): ReactElement {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const classes = classNames('euiSuperDatePicker_shim', className);

  return (
    <EuiFlexGroup
      gutterSize="s"
      responsive={false}
      className={classes}
      {...rest}>
      <EuiFlexItem grow={false}>
        <EuiPopover
          // TODO: Now all popover z-indexes can be lowered to below the header
          zIndex={1}
          buffer={108}
          anchorPosition="leftCenter"
          button={
            <EuiButton
              onClick={() => setIsPopoverOpen((isOpen) => !isOpen)}
              size="s"
              iconType="calendar">
              Last 15 min
            </EuiButton>
          }
          isOpen={isPopoverOpen}
          closePopover={() => setIsPopoverOpen(false)}>
          <div style={{ width: 200 }}>
            <EuiText>
              <p>
                Example of a popover near the header with a buffer affording for
                the double fixed headers.
              </p>
            </EuiText>
          </div>
        </EuiPopover>
      </EuiFlexItem>
      <EuiFlexItem grow={false}>
        <EuiButton size="s" iconType="refresh" minWidth={0} />
      </EuiFlexItem>
    </EuiFlexGroup>
  );
}
