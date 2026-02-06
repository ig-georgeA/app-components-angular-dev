import { ContentType } from './content-type';

export interface PropertiesPanelType {
  type?: string;
  name?: string;
  flex?: string | null;
  title?: string;
  content?: ContentType[];
  info?: string;
}
