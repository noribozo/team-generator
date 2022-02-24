import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newMemberName = "";
  members: string[] = [];
  errorMessage = "";
  numberOfTeams: number | "" = "";
  teams: string[][] = [];

  onInput(member: string) {
    this.newMemberName = member;
  }

  onTeamSizeInput(value: string) {
    this.numberOfTeams = Number(value);
  }

  addMember() {
    if (!this.newMemberName) {
      this.errorMessage = "This field cannot be empty."
      return;
    } else {
      this.members.push(this.newMemberName);
      this.newMemberName = "";
      this.errorMessage = "";
    }
  }

  
  generateTeams() {
    const allMembers = [...this.members]
    this.teams = [];

    if (!this.numberOfTeams || this.numberOfTeams <= 0) {
      this.errorMessage = "Invalid number of teams.";
      return;
    }
    if (this.members.length < this.numberOfTeams) {
      this.errorMessage = "Not enough members";
      return;
    }
    this.errorMessage = "";

    while (allMembers.length) {
      for (let i = 0; i < this.numberOfTeams; i++) {
        const randomIndex = Math.floor(Math.random() * allMembers.length);
        const member = allMembers.splice(randomIndex, 1)[0];
        console.log(randomIndex);
        if(!member) break;
        if(this.teams[i]) {
          this.teams[i].push(member)
        } else {
          this.teams[i] = [member]
        }
      }
    }
    console.log(this.teams);
    this.members = [];
    this.numberOfTeams = "";
  }
}

