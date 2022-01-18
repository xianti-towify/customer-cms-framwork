/**
 * @Description:
 * @author xianti.xiong
 * @date 2022/1/18
 */

export namespace CustomerCmsFramework {
  export type MenuStyleType = 'MenuLeftUserInfoLeft' | 'MenuLeftUserInfoTop' | 'MenuTopUserInfoTop';

  export type AppInfoType = {
    displayName: string;
    logo: string;
  };

  export type MenuAction = {
    [key in string]: string;
  };

  export type MenuType = {
    id: string;
    displayName: string;
    icon: string;
    action?: MenuAction;
    children?: MenuType[];
  };

  export type UserInfo = {
    id: string;
    name: string;
    avatar: string;
    menus: MenuType[];
  };
}
