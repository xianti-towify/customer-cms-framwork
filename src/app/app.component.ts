import { Component } from '@angular/core';
import { CustomerCmsFramework } from '../../projects/customer-cms-framework/src';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo';

  style: CustomerCmsFramework.MenuStyleType = 'MenuLeftUserInfoTop';

  appInfo: CustomerCmsFramework.AppInfoType = {
    displayName: 'test app',
    logo: 'https://s3-imfile.feishucdn.com/static-resource/v1/81c2dd76-064f-4fcb-9ab0-7010358d36ag~?image_size=noop&cut_type=&quality=&format=image&sticker_format=.webp'
  };

  menus: CustomerCmsFramework.MenuType[] = [{ displayName: '1', id: '1', icon: '' }];

  onMenuClicked(event: any): void {
    console.log(event);
  }
}
