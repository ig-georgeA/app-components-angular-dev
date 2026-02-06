import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'transformData',
})
export class TransformDataPipe implements PipeTransform {

  transform(data: any[]): any[] {
    if (!data) {
      return [];
    }

    return (Array.isArray(data[0]) ? data : [data]).map((series: any) => {
      return series.map((item: any) => {
        const dateTimeKey = Object.keys(item).find((key: any) => this.isValidDateISO(item[key]));
        return {
          ...item,
          ...dateTimeKey ? { [dateTimeKey]: this.dateStringToLocalDate(item[dateTimeKey]) } : {},
        }
      });
    });
  }

  private isValidDateISO(value: unknown) {
    return typeof value === 'string' &&  /^\d{4}-\d{2}-\d{2}($|T)/.test(value) && Number.isFinite(Date.parse(value));
  }

  private dateStringToLocalDate(value: string): Date {
    if (value.length === 10 && /^\d{4}-\d{2}-\d{2}$/.test(value)) {
      // It's a full-date string (date-only), add time with no timezone to be parsed as local Date
      return new Date(value + 'T00:00');
    }
    // It's likely date-time, use the default parser as is
    return new Date(value);
  }
}
