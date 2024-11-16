import { Component } from '@angular/core';

import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})
export class MainpageComponent {
  constructor(private dbzService: DbzService) {}

  get characters(): Character[] {
    return this.dbzService.getCharacters();
  }

  public handleDeleteCharacter(id: string): void {
    this.dbzService.deleteCharacter(id);
  }

  public handleAddCharacter(character: Character): void {
    this.dbzService.addCharacter(character);
  }
}
