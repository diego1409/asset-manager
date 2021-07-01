import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AssetService } from '../../services/asset.service';

@Component({
  selector: 'app-edit-asset',
  templateUrl: './edit-asset.component.html',
  styleUrls: ['./edit-asset.component.css']
})
export class EditAssetComponent implements OnInit {
  //Asset Data
  asset = {    
    "id": "",
    "name": "",
    "description": "",
    "assignee-email": "",
    "type": "",
    "date-assignment": "",
    "date-registered": "",
    "active": false
  }

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private assetService: AssetService) {
    //Get asset ID
    this.activatedRoute.paramMap.subscribe((params: Params) => {
      this.assetService.getAsset(params.get('id')).subscribe((asset) => (this.asset = asset));
    });
  }

  ngOnInit(): void {

  }

  onSubmit() {
    if(!this.asset.id || !this.asset.name || !this.asset.type || !this.asset['date-assignment'] || !this.asset['date-registered']) {
      alert('Please complete the mandatory data');
      return;
    }

    this.assetService.updateAsset(this.asset).subscribe();

    //Load Asset in Edit screen
    this.router.navigate(["/"]);

  }
}
