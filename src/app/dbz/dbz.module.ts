import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainpageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';

@NgModule({
  declarations: [MainpageComponent, ListComponent, AddCharacterComponent],
  exports: [MainpageComponent],
  imports: [CommonModule, FormsModule],
})
export class DbzModule {}
