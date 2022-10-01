import React, { forwardRef } from 'react';

import defaults from './typography.defaults';
import Styled from './typography.styled';
import { BaseTypographyProps } from './typography.types';

export function createTypography<
  T = HTMLParagraphElement,
  P = React.HTMLAttributes<HTMLParagraphElement>,
>(tag: keyof JSX.IntrinsicElements = 'p') {
  const Component = Styled.withComponent(tag);
  return forwardRef<T, P & BaseTypographyProps>(
    ({ children, size = defaults.size, ...rest }, ref) => (
      <Component ref={ref} size={size} {...rest}>
        {children}
      </Component>
    ),
  );
}

export const Typography = createTypography();

export default Typography;
