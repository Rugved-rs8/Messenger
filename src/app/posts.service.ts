import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class PostsService{

  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  // getPosts(){
  //   return [...this.posts]; //copies the posts array into a new array and returns it
  // }

  getPostsUpdateListener(){
    return this.postsUpdated.asObservable();
  }
  addPosts(title: string, content: string){
    const post : Post = {title: title, content:content};
    this.posts.push(post);
    this.postsUpdated.next([...this.posts]);
  }


  getPosts(){
    return this.postsUpdated.asObservable();
  }

}

//MongoPassword : uXxTuToX56bl0pWg
