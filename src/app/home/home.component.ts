import { Component, OnInit } from '@angular/core';
import { GitUserService } from '../user-service/git-user.service';
import { User } from '../user';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: User;
  userInput: string;

  getUserInput(){
    var trimmedInput = this.userInput;
    return trimmedInput;
  }

  searchUser(form: NgForm,search){
    if(this.userInput == ""){
      alert("empty submissions are not allowed");
    }
    else {
      this.userService.allRepos = []; //reset repos
      var userResult = this.userService.profileSearch(search);
      this.userService.repoSearch();
      if(!userResult){
        //if promise is rejected
        alert("an error unexpected error occured");
      }
      else {
        //if promise is resolved
        this.user = this.userService.user;
        setTimeout(()=>{
          this.router.navigate(['/result',this.user.userLoginName]);
        },1000)
        
      }
      this.userInput="";
      form.reset();
      }  
  }

  constructor(private userService: GitUserService, private router: Router) {    
  }

  ngOnInit() {
    
  }

}
