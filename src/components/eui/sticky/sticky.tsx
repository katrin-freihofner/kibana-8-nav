import React, {
  ReactElement,
  ReactNode,
  HTMLAttributes,
  CSSProperties,
} from 'react';
import classNames from 'classnames';
import { CommonProps } from '@elastic/eui';

type Props = {
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
  zIndex?: number;
  children?: ReactNode;
} & CommonProps &
  HTMLAttributes<HTMLDivElement>;

export function EuiSticky({
  children,
  className,
  top = 0,
  right,
  bottom,
  left,
  zIndex = 1000,
  style,
  ...rest
}: Props): ReactElement {
  const classes = classNames('euiSticky', className);

  const computedStyle: CSSProperties = style ? style : {};
  computedStyle.top = top;
  computedStyle.right = right;
  computedStyle.bottom = bottom;
  computedStyle.left = left;
  computedStyle.zIndex = zIndex;

  return (
    <div className={classes} {...rest} style={computedStyle}>
      {children}
    </div>
  );
}
