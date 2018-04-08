import {BehaviorSubject} from "rxjs";

export class CharacterPubSubService {
  protected savedCharacterForm: BehaviorSubject<any>;

  constructor() {
    this.savedCharacterForm = new BehaviorSubject<any>(null);
  }

  update(object?: any): void {
    this.savedCharacterForm.next(object);
  }

  getValue(): any {
    return this.savedCharacterForm.getValue();
  }
}