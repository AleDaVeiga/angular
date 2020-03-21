import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { Post } from '../models/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[];
  postagem: any = {};

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.postsService.listar().subscribe(res => this.posts = res);
  }

  public editar(post: Post) {
    this.postagem = post;
  }

  public remover(postagem: Post) {
    this.postsService.remover(postagem).subscribe(
      res => {
        this.posts.splice(this.posts.indexOf(postagem), 1);
      }
    );
  }
}
