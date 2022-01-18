import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CustomerCmsSidebar } from 'customer-cms-sidebar/lib/type/menu-type';
import { CustomerCmsFramework } from './type/customer.cms.framework';

@Component({
  selector: 'customer-cms-framework',
  templateUrl: 'customer-cms-framework.component.html',
  styleUrls: ['customer-cms-framework.component.scss']
})
export class CustomerCmsFrameworkComponent implements OnInit {
  /** 可定义为菜单和用户信息的位置. {菜单位置}{用户信息位置} default  menu left and user info top ** */
  @Input()
  style: CustomerCmsFramework.MenuStyleType = 'MenuLeftUserInfoTop';

  /** 显示 app 相关信息 ** */
  @Input()
  appInfo!: CustomerCmsFramework.AppInfoType;

  /** 菜单列表 ** */
  @Input()
  menus: CustomerCmsFramework.MenuType[] = [];

  /** 菜单点击事件 ** */
  @Output()
  menuClicked: EventEmitter<CustomerCmsFramework.MenuAction> = new EventEmitter<CustomerCmsFramework.MenuAction>();

  sidebarMenu: CustomerCmsSidebar.MenuType = { items: [] };

  sidebarExpand = true;

  ngOnInit(): void {
    this.menus.forEach(item => {
      this.sidebarMenu.items.push({
        id: item.id,
        displayName: item.displayName,
        action: item.action ? item.action : undefined,
        icon: item.icon,
        children: []
      });
    });
  }
}
