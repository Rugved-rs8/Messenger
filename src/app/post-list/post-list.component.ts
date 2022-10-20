import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostsService } from '../posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {

  //@Input() posts : Post[] = [];
  posts : Post[] = [];
  private postsSub: Subscription = new Subscription;

  postsTotal:any;

  constructor(public postsService : PostsService) { }

  ngOnInit(): void {
    //this.posts = this.postsService.getPosts();
    // this.postsSub = this.postsService.getPostsUpdateListener()
    // .subscribe((posts: Post[]) => {
    //   this.posts = posts;
    // });
    // console.log(this.posts)






    this.postsService.getPosts().subscribe((data:any) => {
      this.postsTotal = data
    })
    console.log(this.postsTotal)

  }

  ngOnDestroy(): void {
    this.postsSub.unsubscribe();
  }
}
