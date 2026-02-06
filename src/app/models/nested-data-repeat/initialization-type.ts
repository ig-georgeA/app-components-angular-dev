import { DefaultPropValuesType } from './default-prop-values-type';

export interface InitializationType {
  name?: string | null;
  locked?: boolean;
  selector?: string;
  defaultLayout?: string | null;
  defaultPropValues?: DefaultPropValuesType[];
}
