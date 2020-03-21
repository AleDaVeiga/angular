import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './posts/post/post.component';

const routes: Routes = [
  { path: 'posts/new', component: PostComponent },
  { path: 'posts/:id', component: PostComponent },
  { path: 'posts', component: PostsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
