import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexLegend, ApexMarkers, ApexStroke, ApexTheme, ApexTitleSubtitle, ChartComponent } from 'ng-apexcharts';
import { Subject, takeUntil } from 'rxjs';
import { BoxOfficeRevenueType } from '../models/financial/box-office-revenue-type';
import { GlobalElectricityDemandType } from '../models/financial/global-electricity-demand-type';
import { FinancialService } from '../services/financial.service';

@Component({
  selector: 'app-apex-charts',
  imports: [ChartComponent],
  templateUrl: './apex-charts.component.html',
  styleUrls: ['./apex-charts.component.scss']
})
export class ApexChartsComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();

  private _box_Office_Revenue: BoxOfficeRevenueType[] = [];
  public get box_Office_Revenue(): BoxOfficeRevenueType[] {
    return this._box_Office_Revenue;
  }
  public set box_Office_Revenue(value: BoxOfficeRevenueType[]) {
    this._box_Office_Revenue = value;
    this.series = this.getSeries();
    this.series3 = this.getSeries3();
    this.series4 = this.getSeries4();
    this.series5 = this.getSeries5();
    this.series6 = this.getSeries6();
    this.series7 = this.getSeries7();
    this.series9 = this.getSeries9();
  }

  private _global_Electricity_Demand: GlobalElectricityDemandType[] = [];
  public get global_Electricity_Demand(): GlobalElectricityDemandType[] {
    return this._global_Electricity_Demand;
  }
  public set global_Electricity_Demand(value: GlobalElectricityDemandType[]) {
    this._global_Electricity_Demand = value;
    this.series1 = this.getSeries1();
    this.series2 = this.getSeries2();
    this.series8 = this.getSeries8();
    this.series10 = this.getSeries10();
    this.series11 = this.getSeries11();
    this.series12 = this.getSeries12();
  }
  public series: ApexAxisChartSeries = this.getSeries();
  public chart: ApexChart = {
    type: 'bar',
    background: 'theme:surface-500',
    zoom: {
      enabled: true
    },
    toolbar: {
      show: true
    },
    fontFamily: 'var(--ig-font-family)'
  };
  public title: ApexTitleSubtitle = {
    text: 'Column'
  };
  public theme: ApexTheme = {
    mode: 'light'
  };
  public legend: ApexLegend = {
    show: true
  };
  public markers: ApexMarkers = {
    size: 6
  };
  public dataLabels: ApexDataLabels = {
    enabled: false
  };
  public series1: ApexAxisChartSeries = this.getSeries1();
  public chart1: ApexChart = {
    type: 'area',
    background: 'theme:surface-500',
    zoom: {
      enabled: true
    },
    toolbar: {
      show: true
    },
    fontFamily: 'var(--ig-font-family)'
  };
  public stroke: ApexStroke = {
    curve: 'straight'
  };
  public title1: ApexTitleSubtitle = {
    text: 'Area'
  };
  public theme1: ApexTheme = {
    mode: 'light'
  };
  public legend1: ApexLegend = {
    show: true
  };
  public markers1: ApexMarkers = {
    size: 6
  };
  public dataLabels1: ApexDataLabels = {
    enabled: false
  };
  public series2: ApexAxisChartSeries = this.getSeries2();
  public chart2: ApexChart = {
    type: 'scatter',
    background: 'theme:surface-500',
    zoom: {
      enabled: true
    },
    toolbar: {
      show: true
    },
    fontFamily: 'var(--ig-font-family)'
  };
  public title2: ApexTitleSubtitle = {
    text: 'Scatter'
  };
  public theme2: ApexTheme = {
    mode: 'light'
  };
  public legend2: ApexLegend = {
    show: false
  };
  public markers2: ApexMarkers = {
    size: 6
  };
  public dataLabels2: ApexDataLabels = {
    enabled: false
  };
  public series3: ApexAxisChartSeries = this.getSeries3();
  public chart3: ApexChart = {
    type: 'line',
    background: 'theme:surface-500',
    zoom: {
      enabled: true
    },
    toolbar: {
      show: true
    },
    fontFamily: 'var(--ig-font-family)'
  };
  public stroke1: ApexStroke = {
    curve: 'straight'
  };
  public title3: ApexTitleSubtitle = {
    text: 'Line'
  };
  public theme3: ApexTheme = {
    mode: 'light'
  };
  public legend3: ApexLegend = {
    show: false
  };
  public markers3: ApexMarkers = {
    size: 6
  };
  public dataLabels3: ApexDataLabels = {
    enabled: false
  };
  public series4: ApexAxisChartSeries = this.getSeries4();
  public chart4: ApexChart = {
    type: 'line',
    background: 'theme:surface-500',
    zoom: {
      enabled: true
    },
    toolbar: {
      show: true
    },
    fontFamily: 'var(--ig-font-family)'
  };
  public stroke2: ApexStroke = {
    curve: 'monotoneCubic'
  };
  public title4: ApexTitleSubtitle = {
    text: 'Spline'
  };
  public theme4: ApexTheme = {
    mode: 'light'
  };
  public legend4: ApexLegend = {
    show: false
  };
  public markers4: ApexMarkers = {
    size: 6
  };
  public dataLabels4: ApexDataLabels = {
    enabled: false
  };
  public series5: ApexAxisChartSeries = this.getSeries5();
  public chart5: ApexChart = {
    type: 'area',
    stacked: true,
    stackType: 'normal',
    background: 'theme:surface-500',
    zoom: {
      enabled: true
    },
    toolbar: {
      show: true
    },
    fontFamily: 'var(--ig-font-family)'
  };
  public stroke3: ApexStroke = {
    curve: 'monotoneCubic'
  };
  public title5: ApexTitleSubtitle = {
    text: 'Spline Area'
  };
  public theme5: ApexTheme = {
    mode: 'light'
  };
  public legend5: ApexLegend = {
    show: false
  };
  public markers5: ApexMarkers = {
    size: 6
  };
  public dataLabels5: ApexDataLabels = {
    enabled: false
  };
  public series6: ApexAxisChartSeries = this.getSeries6();
  public chart6: ApexChart = {
    type: 'area',
    background: 'theme:surface-500',
    zoom: {
      enabled: true
    },
    toolbar: {
      show: true
    },
    fontFamily: 'var(--ig-font-family)'
  };
  public stroke4: ApexStroke = {
    curve: 'stepline'
  };
  public title6: ApexTitleSubtitle = {
    text: 'Step Area'
  };
  public theme6: ApexTheme = {
    mode: 'light'
  };
  public legend6: ApexLegend = {
    show: false
  };
  public markers6: ApexMarkers = {
    size: 6
  };
  public dataLabels6: ApexDataLabels = {
    enabled: false
  };
  public series7: ApexAxisChartSeries = this.getSeries7();
  public chart7: ApexChart = {
    type: 'line',
    background: 'theme:surface-500',
    zoom: {
      enabled: true
    },
    toolbar: {
      show: true
    },
    fontFamily: 'var(--ig-font-family)'
  };
  public stroke5: ApexStroke = {
    curve: 'stepline'
  };
  public title7: ApexTitleSubtitle = {
    text: 'Step Line'
  };
  public theme7: ApexTheme = {
    mode: 'light'
  };
  public legend7: ApexLegend = {
    show: false
  };
  public markers7: ApexMarkers = {
    size: 6
  };
  public dataLabels7: ApexDataLabels = {
    enabled: false
  };
  public series8: ApexAxisChartSeries = this.getSeries8();
  public chart8: ApexChart = {
    type: 'donut',
    background: 'theme:surface-500',
    zoom: {
      enabled: true
    },
    toolbar: {
      show: true
    },
    fontFamily: 'var(--ig-font-family)'
  };
  public theme8: ApexTheme = {
    mode: 'light'
  };
  public legend8: ApexLegend = {
    show: true
  };
  public markers8: ApexMarkers = {
    size: 6
  };
  public dataLabels8: ApexDataLabels = {
    enabled: false
  };
  public series9: ApexAxisChartSeries = this.getSeries9();
  public chart9: ApexChart = {
    type: 'treemap',
    background: 'theme:surface-500',
    zoom: {
      enabled: true
    },
    toolbar: {
      show: true
    },
    fontFamily: 'var(--ig-font-family)'
  };
  public title8: ApexTitleSubtitle = {
    text: 'Tree Map'
  };
  public theme9: ApexTheme = {
    mode: 'light'
  };
  public legend9: ApexLegend = {
    show: true
  };
  public markers9: ApexMarkers = {
    size: 6
  };
  public dataLabels9: ApexDataLabels = {
    enabled: false
  };
  public series10: ApexAxisChartSeries = this.getSeries10();
  public chart10: ApexChart = {
    type: 'radar',
    background: 'theme:surface-500',
    zoom: {
      enabled: true
    },
    toolbar: {
      show: true
    },
    fontFamily: 'var(--ig-font-family)'
  };
  public theme10: ApexTheme = {
    mode: 'light'
  };
  public legend10: ApexLegend = {
    show: false
  };
  public markers10: ApexMarkers = {
    size: 6
  };
  public dataLabels10: ApexDataLabels = {
    enabled: false
  };
  public series11: ApexAxisChartSeries = this.getSeries11();
  public chart11: ApexChart = {
    type: 'boxPlot',
    background: 'theme:surface-500',
    zoom: {
      enabled: true
    },
    toolbar: {
      show: true
    },
    fontFamily: 'var(--ig-font-family)'
  };
  public title9: ApexTitleSubtitle = {
    text: 'Box plot'
  };
  public theme11: ApexTheme = {
    mode: 'light'
  };
  public legend11: ApexLegend = {
    show: false
  };
  public markers11: ApexMarkers = {
    size: 6
  };
  public dataLabels11: ApexDataLabels = {
    enabled: false
  };
  public series12: ApexAxisChartSeries = this.getSeries12();
  public colors: string[] = [
    '#008FFB'
  ];
  public chart12: ApexChart = {
    type: 'heatmap',
    background: 'theme:surface-500',
    zoom: {
      enabled: true
    },
    toolbar: {
      show: true
    },
    fontFamily: 'var(--ig-font-family)'
  };
  public title10: ApexTitleSubtitle = {
    text: 'Heatmap'
  };
  public theme12: ApexTheme = {
    mode: 'light'
  };
  public legend12: ApexLegend = {
    show: false
  };
  public markers12: ApexMarkers = {
    size: 6
  };
  public dataLabels12: ApexDataLabels = {
    enabled: false
  };

  constructor(
    public financialService: FinancialService,
  ) {}


  ngOnInit() {
    this.financialService.getBoxOfficeRevenue().pipe(takeUntil(this.destroy$)).subscribe(
      data => this.box_Office_Revenue = data
    );
    this.financialService.getGlobalElectricityDemand().pipe(takeUntil(this.destroy$)).subscribe(
      data => this.global_Electricity_Demand = data
    );
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private getSeries(): ApexAxisChartSeries {
    return [
      {
        name: 'TotalWorldBoxOfficeRevenue',
        data: this.box_Office_Revenue,
        parsing: {
          x: 'Franchise',
          y: [
            'TotalWorldBoxOfficeRevenue'
          ]
        }
      },
      {
        name: 'HighestGrossingMovieInSeries',
        data: this.box_Office_Revenue,
        parsing: {
          x: 'Franchise',
          y: [
            'HighestGrossingMovieInSeries'
          ]
        }
      }
    ];
  }

  private getSeries1(): ApexAxisChartSeries {
    return [
      {
        name: 'Value',
        data: this.global_Electricity_Demand,
        parsing: {
          x: 'Label',
          y: [
            'Value'
          ]
        }
      }
    ];
  }

  private getSeries2(): ApexAxisChartSeries {
    return [
      {
        name: 'Value',
        data: this.global_Electricity_Demand,
        parsing: {
          x: 'Label',
          y: [
            'Value'
          ]
        }
      }
    ];
  }

  private getSeries3(): ApexAxisChartSeries {
    return [
      {
        name: 'TotalWorldBoxOfficeRevenue',
        data: this.box_Office_Revenue,
        parsing: {
          x: 'Franchise',
          y: [
            'TotalWorldBoxOfficeRevenue'
          ]
        }
      },
      {
        name: 'HighestGrossingMovieInSeries',
        data: this.box_Office_Revenue,
        parsing: {
          x: 'Franchise',
          y: [
            'HighestGrossingMovieInSeries'
          ]
        }
      }
    ];
  }

  private getSeries4(): ApexAxisChartSeries {
    return [
      {
        name: 'TotalWorldBoxOfficeRevenue',
        data: this.box_Office_Revenue,
        parsing: {
          x: 'Franchise',
          y: [
            'TotalWorldBoxOfficeRevenue'
          ]
        }
      },
      {
        name: 'HighestGrossingMovieInSeries',
        data: this.box_Office_Revenue,
        parsing: {
          x: 'Franchise',
          y: [
            'HighestGrossingMovieInSeries'
          ]
        }
      }
    ];
  }

  private getSeries5(): ApexAxisChartSeries {
    return [
      {
        name: 'TotalWorldBoxOfficeRevenue',
        data: this.box_Office_Revenue,
        parsing: {
          x: 'Franchise',
          y: [
            'TotalWorldBoxOfficeRevenue'
          ]
        }
      },
      {
        name: 'HighestGrossingMovieInSeries',
        data: this.box_Office_Revenue,
        parsing: {
          x: 'Franchise',
          y: [
            'HighestGrossingMovieInSeries'
          ]
        }
      }
    ];
  }

  private getSeries6(): ApexAxisChartSeries {
    return [
      {
        name: 'TotalWorldBoxOfficeRevenue',
        data: this.box_Office_Revenue,
        parsing: {
          x: 'Franchise',
          y: [
            'TotalWorldBoxOfficeRevenue'
          ]
        }
      },
      {
        name: 'HighestGrossingMovieInSeries',
        data: this.box_Office_Revenue,
        parsing: {
          x: 'Franchise',
          y: [
            'HighestGrossingMovieInSeries'
          ]
        }
      }
    ];
  }

  private getSeries7(): ApexAxisChartSeries {
    return [
      {
        name: 'TotalWorldBoxOfficeRevenue',
        data: this.box_Office_Revenue,
        parsing: {
          x: 'Franchise',
          y: [
            'TotalWorldBoxOfficeRevenue'
          ]
        }
      },
      {
        name: 'HighestGrossingMovieInSeries',
        data: this.box_Office_Revenue,
        parsing: {
          x: 'Franchise',
          y: [
            'HighestGrossingMovieInSeries'
          ]
        }
      }
    ];
  }

  private getSeries8(): ApexAxisChartSeries {
    return [
      {
        name: 'Value',
        data: this.global_Electricity_Demand,
        parsing: {
          x: 'Label',
          y: [
            'Value'
          ]
        }
      }
    ];
  }

  private getSeries9(): ApexAxisChartSeries {
    return [
      {
        name: 'TotalWorldBoxOfficeRevenue',
        data: this.box_Office_Revenue,
        parsing: {
          x: 'Franchise',
          y: [
            'TotalWorldBoxOfficeRevenue'
          ]
        }
      },
      {
        name: 'HighestGrossingMovieInSeries',
        data: this.box_Office_Revenue,
        parsing: {
          x: 'Franchise',
          y: [
            'HighestGrossingMovieInSeries'
          ]
        }
      }
    ];
  }

  private getSeries10(): ApexAxisChartSeries {
    return [
      {
        name: 'Value',
        data: this.global_Electricity_Demand,
        parsing: {
          x: 'Label',
          y: [
            'Value'
          ]
        }
      }
    ];
  }

  private getSeries11(): ApexAxisChartSeries {
    return [
      {
        name: 'Min',
        data: this.global_Electricity_Demand,
        parsing: {
          x: 'Label',
          y: [
            'Min',
            'Q1',
            'Median',
            'Q3',
            'Max'
          ]
        }
      }
    ];
  }

  private getSeries12(): ApexAxisChartSeries {
    return [
      {
        name: 'Value',
        data: this.global_Electricity_Demand,
        parsing: {
          x: 'Label',
          y: [
            'Value'
          ]
        }
      }
    ];
  }
}
