import { Content1Type } from './content-1-type';

export interface ContentType {
  type?: string;
  name?: string;
  flex?: string;
  title?: string;
  content?: Content1Type[];
}
