// @flow

import Light from './styledLight';
import HOC from '../../containers/HOC';
import type { Components } from '../../../types';

const lightObj: Components = {
  LightIn: HOC('LightIn', Light.lightIn),
  LightOut: HOC('LightOut', Light.lightOut),
};

export default lightObj;
