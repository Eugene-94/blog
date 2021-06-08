import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/shared/interfaces';
import { PostService } from 'src/app/shared/post.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {

  posts: Post[] = [];
  searchStr = '';

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getAll().subscribe((posts) => {
      this.posts = posts;
    });
  }

  remove(id: string): any {
    return null;
  }

}
