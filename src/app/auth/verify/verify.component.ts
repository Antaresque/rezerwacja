import { UserService } from './../../_core/user/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit {

  token: string;

  constructor(private router: Router, private route: ActivatedRoute, private user: UserService) {
    this.route.queryParams.subscribe(
      params => {
        this.token = params['token'] || null;
        if(this.token != null){
          this.user.verify(this.token).subscribe(
            res => this.router.navigate(['/auth/login'], {queryParams: {redirect: false}})
          )
        }
      });

  }

  ngOnInit() { }
}
