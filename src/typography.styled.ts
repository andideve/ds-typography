import styled, { CSSObject, FunctionInterpolation } from '@emotion/styled';
import { compose, createSfp, typography, space, color } from '@andideve/styled-system';
import { createMediaQuery } from '@andideve/sx-core';

import defaults from './typography.defaults';
import { SystemProps, TypographySizes, TypographyProps } from './typography.types';

const systemProps = compose<SystemProps>(typography, space, color);
const shouldForwardProp = createSfp(systemProps.propNames);

function size(sizes: Record<TypographySizes, CSSObject>) {
  return ({ size = defaults.size }: TypographyProps = {}) => sizes[size];
}

const styles: (CSSObject | FunctionInterpolation<TypographyProps>)[] = [
  size({
    xs: {
      fontSize: 'var(--ds-fontSizes-xs)',
      lineHeight: 'var(--ds-lineHeights-4)',
    },
    sm: {
      fontSize: 'var(--ds-fontSizes-sm)',
      lineHeight: 'var(--ds-lineHeights-5)',
    },
    base: {
      fontSize: 'var(--ds-fontSizes-base)',
      lineHeight: 'var(--ds-lineHeights-6)',
    },
    lg: {
      fontSize: 'var(--ds-fontSizes-base)',
      lineHeight: 'var(--ds-lineHeights-6)',
      [createMediaQuery(1024)]: {
        fontSize: 'var(--ds-fontSizes-lg)',
        lineHeight: 'var(--ds-lineHeights-7)',
      },
    },
    xl: {
      fontSize: 'var(--ds-fontSizes-lg)',
      lineHeight: 'var(--ds-lineHeights-7)',
      [createMediaQuery(1024)]: {
        fontSize: 'var(--ds-fontSizes-xl)',
        lineHeight: 'var(--ds-lineHeights-7)',
      },
    },
    '2xl': {
      fontSize: 'var(--ds-fontSizes-xl)',
      lineHeight: 'var(--ds-lineHeights-7)',
      [createMediaQuery(1024)]: {
        fontSize: 'var(--ds-fontSizes-2xl)',
        lineHeight: 'var(--ds-lineHeights-8)',
      },
    },
    '3xl': {
      fontSize: 'var(--ds-fontSizes-2xl)',
      lineHeight: 'var(--ds-lineHeights-8)',
      [createMediaQuery(1024)]: {
        fontSize: 'var(--ds-fontSizes-3xl)',
        lineHeight: 'var(--ds-lineHeights-9)',
      },
    },
    '4xl': {
      fontSize: 'var(--ds-fontSizes-3xl)',
      lineHeight: 'var(--ds-lineHeights-9)',
      [createMediaQuery(1024)]: {
        fontSize: 'var(--ds-fontSizes-4xl)',
        lineHeight: 'var(--ds-lineHeights-10)',
      },
    },
    '5xl': {
      fontSize: 'var(--ds-fontSizes-4xl)',
      lineHeight: 'var(--ds-lineHeights-10)',
      [createMediaQuery(1024)]: {
        fontSize: 'var(--ds-fontSizes-5xl)',
        lineHeight: 'var(--ds-lineHeights-none)',
      },
    },
    '6xl': {
      fontSize: 'var(--ds-fontSizes-5xl)',
      lineHeight: 'var(--ds-lineHeights-none)',
      [createMediaQuery(1024)]: {
        fontSize: 'var(--ds-fontSizes-6xl)',
        lineHeight: 'var(--ds-lineHeights-none)',
      },
    },
    '7xl': {
      fontSize: 'var(--ds-fontSizes-6xl)',
      lineHeight: 'var(--ds-lineHeights-none)',
      [createMediaQuery(1024)]: {
        fontSize: 'var(--ds-fontSizes-7xl)',
        lineHeight: 'var(--ds-lineHeights-none)',
      },
    },
    '8xl': {
      fontSize: 'var(--ds-fontSizes-7xl)',
      lineHeight: 'var(--ds-lineHeights-none)',
      [createMediaQuery(1024)]: {
        fontSize: 'var(--ds-fontSizes-8xl)',
        lineHeight: 'var(--ds-lineHeights-none)',
      },
    },
    '9xl': {
      fontSize: 'var(--ds-fontSizes-8xl)',
      lineHeight: 'var(--ds-lineHeights-none)',
      [createMediaQuery(1024)]: {
        fontSize: 'var(--ds-fontSizes-9xl)',
        lineHeight: 'var(--ds-lineHeights-none)',
      },
    },
  }),
  systemProps,
];

export const Styled = styled('p', { shouldForwardProp })(...styles);

export default Styled;
