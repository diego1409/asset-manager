import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Asset } from '../../Asset';

@Component({
  selector: 'app-add-asset',
  templateUrl: './add-asset.component.html',
  styleUrls: ['./add-asset.component.css']
})
export class AddAssetComponent implements OnInit {
  @Output() onAddAsset: EventEmitter<Asset> = new EventEmitter();
  
  //Asset Data
  id: string;
  name: string;
  description: string;
  email: string;
  type: string;
  dateAssignment: string;
  dateRegistered: string;
  active: boolean = true;


  constructor() { }

  ngOnInit(): void {
  }
  
  onSubmit() {
    
    if(!this.id || !this.name || !this.type || !this.dateAssignment || !this.dateRegistered) {
      alert('Please complete the mandatory data');
      return;
    }

    const newAsset = {    
      "id": this.id,
      "name": this.name,
      "description": this.description,
      "assignee-email": this.email,
      "type": this.type,
      "date-assignment": this.dateAssignment,
      "date-registered": this.dateRegistered,
      "active": this.active
    }

    this.onAddAsset.emit(newAsset);

  }
}
