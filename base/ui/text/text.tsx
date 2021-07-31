import React, {FC} from 'react';
import {Text as NativeText, TextProps as NativeTextProps} from 'react-native';

export type TextProps = NativeTextProps;

export const Text: FC<TextProps> = ({children, ...props}) => {
  return <NativeText {...props}>{children}</NativeText>;
};
