import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private postsService : PostsService) { }

  ngOnInit(): void {
  }

  enteredTitle: string = "";
  enteredContent: string = "";
  // @Output() postCreated = new EventEmitter<Post>();

  onAddPost(form: NgForm){
    if(form.invalid)return;
    //const post: Post = { title : form.value.title, content: form.value.content };
    //this.postCreated.emit(post);
    this.postsService.addPosts(form.value.title, form.value.content);
    form.resetForm();
  }



}
