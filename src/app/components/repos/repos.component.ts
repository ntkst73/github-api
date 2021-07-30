import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  debounceTime,
  distinctUntilChanged,
} from 'rxjs/operators';
import { ReposService } from 'src/app/services/repos.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.scss'],
})
export class ReposComponent implements OnInit {
  repoitems: any[];

  repoName: string = 'repos';

  id: number | undefined | string;

  constructor(
    private router: Router,
    private ReposService: ReposService,
    private activateRoute: ActivatedRoute
  ) {}

  routeIsActive(routePath: string) {
    return this.router.url == routePath;
  }

  ngOnInit() {
    this.findRepo();
  }

  findRepo() {
    if (this.repoName !== '') {
      this.ReposService.UpdateRepo(this.repoName);
      this.ReposService.searchrepos()
        .pipe(debounceTime(300), distinctUntilChanged())
        .subscribe((repo) => {
          this.repoitems = repo['items'];
        });
    }
  }

  sortByName() {
    console.log(this.repoitems);
    this.repoitems.sort((a, b) =>
      a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1
    );
  }

  sortByRepos() {
    console.log(this.repoitems);
    this.repoitems.sort((a, b) =>
      a.owner.login.toUpperCase() > b.owner.login.toUpperCase() ? 1 : -1
    );
  }
}
