import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzListModule } from 'ng-zorro-antd/list';
import { PlusOutline } from '@ant-design/icons-angular/icons';
const icons = [PlusOutline];

import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { de_DE } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import de from '@angular/common/locales/de';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_ICONS, NzIconModule, NzIconService } from 'ng-zorro-antd/icon';
registerLocaleData(de);

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NzFormModule,
    NzButtonModule,
    NzInputModule,
    NzListModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzIconModule.forRoot(icons)
  ],
  providers: [
    { provide: NZ_I18N, useValue: de_DE }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
