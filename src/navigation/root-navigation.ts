/* istanbul ignore file */

import {createRef} from 'react';

export const navigationRef = createRef<any>();

export const rootNavigate = (...props: any) => {
  return navigationRef.current?.navigate(...props);
};
