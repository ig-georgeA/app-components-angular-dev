import { EditorInfoType } from './editor-info-type';
import { EnumTypeType } from './enum-type-type';

export interface PropertiesType {
  id?: string;
  basePropertyId?: string | null;
  name?: string;
  valueType?: string;
  defaultValue?: string;
  enumType?: EnumTypeType;
  propertyType?: string;
  mapping?: string | null;
  editorInfo?: EditorInfoType;
}
