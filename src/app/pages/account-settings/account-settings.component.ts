import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit{

  constructor(private settingsService: SettingsService){

  }
  ngOnInit(): void {
    
  }

  public linkTheme = document.querySelector('#theme');

  changeTheme(theme: string){
   
    const url = `./assets/css/colors/${theme}.css`;
    this.linkTheme?.setAttribute('href', url);
  }
}
