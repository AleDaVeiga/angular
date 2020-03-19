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

  public adicionar() {
    this.postsService.adicionar(this.postagem).subscribe(
      res => {
        this.posts.push(res);
        this.editar({ userId: null, id: null, title: '', body: '' });
      }
    );
  }

  public editar(post: Post) {
    this.postagem = post;
  }

  public atualizar() {
    this.postsService.atualizar(this.postagem.value).subscribe(
      res => {
        let tarefaEditada = this.posts.find((p: Post) => p.id == this.postagem.id);
        if (tarefaEditada) {
          Object.assign(tarefaEditada, res);
        } else {
          this.posts.push(res);
        }
      }
    );
  }

  public remover(postagem: Post) {
    this.postsService.remover(postagem).subscribe(
      res => {
        this.posts.splice(this.posts.indexOf(postagem), 1);
      }
    );
  }
}
