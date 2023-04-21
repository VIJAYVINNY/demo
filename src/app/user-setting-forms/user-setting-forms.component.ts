import { Component } from '@angular/core';
import { UserSetting } from '../data/user-setting';

@Component({
  selector: 'app-user-setting-forms',
  templateUrl: './user-setting-forms.component.html',
  styleUrls: ['./user-setting-forms.component.scss']
})
export class UserSettingFormsComponent {

  UserSetting:UserSetting={
    name: 'Vijay',
    specialOffers: true,
    interfaceStyle: 'Medium',
    subscription: 'Annual',
    notes: 'We are giving data for practical'
  }
}
