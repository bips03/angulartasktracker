import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title = 'Task Tracker';
  showAddTask!: boolean;
  subscription!: Subscription;

  addTask() {
    //btnClick emitted from header button on clicking the button.ts file runs this. Used to run different functions
    this.uiService.toggleAddTask();
  }
  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((res) => (this.showAddTask = res));
  }

  ngOnInit(): void {}
}
