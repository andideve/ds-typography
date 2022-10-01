import React from 'react';
import {
  TypographyProps as TypographyStyleProps,
  SpaceProps as SpaceStyleProps,
  ColorProps as ColorStyleProps,
} from '@andideve/styled-system';
import { Theme } from '@andideve/ds-core';

export type SystemProps = TypographyStyleProps & SpaceStyleProps & ColorStyleProps;

export interface ExtendProps extends SystemProps {
  color?: string;
}

export type TypographySizes = keyof Theme['fontSizes'];
export interface TypographyOptions {
  size?: TypographySizes;
}
export interface BaseTypographyProps extends ExtendProps, TypographyOptions {
  ref?: React.Ref<any>;
  as?: React.ElementType;
  theme?: Theme;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export type TypographyProps = BaseTypographyProps & React.HTMLAttributes<HTMLParagraphElement>;
