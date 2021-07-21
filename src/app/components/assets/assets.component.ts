import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Asset } from '../../Asset';
import { AssetService } from '../../services/asset.service';
import { UiService } from '../../services/ui.service';
import { faTrash, faToggleOn, faToggleOff, faEdit } from '@fortawesome/free-solid-svg-icons';
interface Alert {
  type: string;
  message: string;
}
@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.css']
})
export class AssetsComponent implements OnInit {
  alerts: Alert[] = [];
  deleteWarningAlert: Alert = { 
    type: 'danger', 
    message: 'If you double click, the asset will be deleted.' 
  };

  showAddAsset: boolean = false;
  subscription: Subscription;

  //Icons
  faTrash = faTrash;
  faToggleOn = faToggleOn;
  faToggleOff = faToggleOff;
  faEdit = faEdit;

  assets: Asset[];

  constructor(private assetService: AssetService, private uiService: UiService, private router: Router) { 
    this.subscription = this.uiService.onToggle().subscribe((value) => (this.showAddAsset = value));
  }

  ngOnInit(): void {
    this.assetService.getAssets().subscribe((assets) => (this.assets = assets));
  }

  enableDisableAsset(asset: Asset) {
    asset.active = !asset.active;
    this.assetService.updateAsset(asset).subscribe();
  }

  editAsset(id:string) {
    //Load Asset in Edit screen
    this.router.navigate(["edit", id]);
  }

  deleteAsset(asset: Asset){
    this.assetService.deleteAsset(asset).subscribe(() => (this.assets = this.assets.filter(a => a.id !== asset.id)));
  }

  addAsset(asset: Asset) {
    this.assetService.addAsset(asset).subscribe((asset) => (this.assets.push(asset)));
  }

  //Alerts
  deleteWarning(asset: Asset) {
    let newAlert = this.deleteWarningAlert;
    newAlert.message = `If you double click, the asset '${asset.name}' will be deleted.`;
    this.alerts.push(newAlert);
    setTimeout(()=>{                           //<<<---using ()=> syntax
      this.closeAlert(newAlert);
    }, 5000);
  }
  
  closeAlert(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

}
