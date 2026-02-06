import { DefaultItemLayoutType } from './default-item-layout-type';
import { InitialSizeType } from './initial-size-type';
import { SizingSupportedModesType } from './sizing-supported-modes-type';

export interface LayoutRulesType {
  isViewsContainer?: boolean;
  initialSize?: InitialSizeType;
  isContainer?: boolean;
  initialPosition?: string | null;
  initialMargin?: string | null;
  initialPadding?: string | null;
  sizingSupportedModes?: SizingSupportedModesType;
  defaultItemLayout?: DefaultItemLayoutType;
  defaultLayout?: string | null;
}
