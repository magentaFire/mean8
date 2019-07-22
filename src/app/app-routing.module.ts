import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { BookComponent } from './book/book.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookEditComponent } from './book-edit/book-edit.component';

const routes: Routes = [
  {
    path: 'books',
    component: BookComponent,
    data: { title: 'Book List' }
  } as Route,
  {
    path: 'book-details/:id',
    component: BookDetailComponent,
    data: { title: 'Book Details' }
  } as Route,
  {
    path: 'book-create',
    component: BookCreateComponent,
    data: { title: 'Create Book' }
  } as Route,
  {
    path: 'book-edit/:id',
    component: BookEditComponent,
    data: { title: 'Edit Book' }
  } as Route,
  {
    path: '',
    redirectTo: '/books',
    pathMatch: 'full'
  } as Route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
