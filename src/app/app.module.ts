import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/providers/routing/auth.guard';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { EditSerieComponent } from './pages/series/edit-serie/edit-serie.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'series',
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'list',
        loadChildren: () =>
          import('./pages/series/list-series/list-series.module').then(
            (m) => m.ListSeriesModule
          ),
      },
      {
        path: 'edit/:id',
        component: EditSerieComponent,
      },
    ],
  },
  {
    path: '',
    redirectTo: '/series/list',
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
