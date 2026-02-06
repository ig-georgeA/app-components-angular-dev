import { InitializationType } from './initialization-type';

export interface ZonesType {
  zoneTag?: string;
  dropArea?: string;
  allSelectorsAllowed?: boolean;
  ignoreChildrenMargin?: boolean;
  initialization?: InitializationType[];
  allowEmpty?: string | null;
}
