import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Asset } from '../../Asset';
import { AssetService } from '../../services/asset.service';
import { UiService } from '../../services/ui.service';
import { faTrash, faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.css']
})
export class AssetsComponent implements OnInit {
  showAddAsset: boolean = false;
  subscription: Subscription;

  //Icons
  faTrash = faTrash;
  faToggleOn = faToggleOn;
  faToggleOff = faToggleOff;

  assets: Asset[];

  constructor(private assetService: AssetService, private uiService: UiService) { 
    this.subscription = this.uiService.onToggle().subscribe((value) => (this.showAddAsset = value));
  }

  ngOnInit(): void {
    this.assetService.getAssets().subscribe((assets) => (this.assets = assets));
  }

  enableDisableAsset(asset: Asset) {
    asset.active = !asset.active;
    this.assetService.updateAsset(asset).subscribe();
  }

  deleteAsset(asset: Asset){
    this.assetService.deleteAsset(asset).subscribe(() => (this.assets = this.assets.filter(a => a.id !== asset.id)));
  }

  addAsset(asset: Asset) {
    this.assetService.addAsset(asset).subscribe((asset) => (this.assets.push(asset)));
  }

}
