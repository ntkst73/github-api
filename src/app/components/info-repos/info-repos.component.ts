import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReposService } from 'src/app/services/repos.service';

@Component({
  selector: 'app-info-repos',
  templateUrl: './info-repos.component.html',
  styleUrls: ['./info-repos.component.scss'],
})
export class InfoReposComponent implements OnInit {
  id: any;
  obj;
  constructor(
    private ReposService: ReposService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      if (typeof params['id'] !== 'undefined') {
        this.id = params['id'];
        return this.id;
      } else {
        this.id = '';
      }
    });
    this.ReposService.getName(this.id).subscribe(repo => {
      this.obj = repo;
    });
  }
}
