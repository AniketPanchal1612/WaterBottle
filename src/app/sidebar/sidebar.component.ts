import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  selectedContent: string = 'content1';

  selectContent(content: string) {
    this.selectedContent = content;
  }
}
