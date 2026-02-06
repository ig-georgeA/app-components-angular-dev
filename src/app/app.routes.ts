import { Routes } from '@angular/router';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { GridComponent } from './grid/grid.component';
import { GridWithTemplatesComponent } from './grid-with-templates/grid-with-templates.component';
import { TreeGridComponent } from './tree-grid/tree-grid.component';
import { HierarchicalGridComponent } from './hierarchical-grid/hierarchical-grid.component';
import { MasterDetailGridComponent } from './master-detail-grid/master-detail-grid.component';
import { PivotGridComponent } from './pivot-grid/pivot-grid.component';
import { InputsComponent } from './inputs/inputs.component';
import { PickersComboComponent } from './pickers-combo/pickers-combo.component';
import { CardCalendarComponent } from './card-calendar/card-calendar.component';
import { ListsDataComponent } from './lists-data/lists-data.component';
import { RevealComponent } from './reveal/reveal.component';
import { CategoryChartsComponent } from './category-charts/category-charts.component';
import { FinancialChartComponent } from './financial-chart/financial-chart.component';
import { ApexChartsComponent } from './apex-charts/apex-charts.component';
import { TypescalePalettesComponent } from './typescale-palettes/typescale-palettes.component';
import { ExpansionPanelsTreeComponent } from './expansion-panels-tree/expansion-panels-tree.component';
import { StepperComponent } from './stepper/stepper.component';
import { TabLayoutComponent } from './tab-layout/tab-layout.component';
import { CarouselComponent } from './carousel/carousel.component';
import { DialogsAndDropdownsComponent } from './dialogs-and-dropdowns/dialogs-and-dropdowns.component';
import { ImageComponent } from './image/image.component';
import { PositionComponent } from './position/position.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { CSSGridLayoutComponent } from './css-grid-layout/css-grid-layout.component';
import { ChildViewComponent } from './child-view/child-view.component';

export const routes: Routes = [
  { path: '', redirectTo: 'grid', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'grid', component: GridComponent, data: { text: 'Grid' } },
  { path: 'grid-with-templates', component: GridWithTemplatesComponent, data: { text: 'Grid-With-Templates' } },
  { path: 'tree-grid', component: TreeGridComponent, data: { text: 'Tree-Grid' } },
  { path: 'hierarchical-grid', component: HierarchicalGridComponent, data: { text: 'Hierarchical-Grid' } },
  { path: 'master-detail-grid', component: MasterDetailGridComponent, data: { text: 'Master-Detail-Grid' } },
  { path: 'pivot-grid', component: PivotGridComponent, data: { text: 'Pivot-Grid' } },
  { path: 'inputs', component: InputsComponent, data: { text: 'Inputs' } },
  { path: 'pickers-combo', component: PickersComboComponent, data: { text: 'Pickers-Combo' } },
  { path: 'card-calendar', component: CardCalendarComponent, data: { text: 'Card-Calendar' } },
  { path: 'lists-data', component: ListsDataComponent, data: { text: 'Lists-Data' } },
  { path: 'reveal', component: RevealComponent, data: { text: 'Reveal' } },
  { path: 'category-charts', component: CategoryChartsComponent, data: { text: 'Category-Charts' } },
  { path: 'financial-chart', component: FinancialChartComponent, data: { text: 'Financial-Chart' } },
  { path: 'apex-charts', component: ApexChartsComponent, data: { text: 'Apex-Charts' } },
  { path: 'typescale-palettes', component: TypescalePalettesComponent, data: { text: 'Typescale-Palettes' } },
  { path: 'expansion-panels-tree', component: ExpansionPanelsTreeComponent, data: { text: 'Expansion-Panels-Tree' } },
  { path: 'stepper', component: StepperComponent, data: { text: 'Stepper' } },
  { path: 'tab-layout', component: TabLayoutComponent, data: { text: 'Tab-Layout' } },
  { path: 'carousel', component: CarouselComponent, data: { text: 'Carousel' } },
  { path: 'dialogs-and-dropdowns', component: DialogsAndDropdownsComponent, data: { text: 'Dialogs-And-Dropdowns' } },
  { path: 'image', component: ImageComponent, data: { text: 'Image' } },
  { path: 'position', component: PositionComponent, data: { text: 'Position' } },
  { path: 'layouts', component: LayoutsComponent, data: { text: 'Layouts' } },
  { path: 'css-grid-layout', component: CSSGridLayoutComponent, data: { text: 'Cssgrid-Layout' } },
  { path: 'child-view', component: ChildViewComponent, data: { text: 'Child-View' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];
