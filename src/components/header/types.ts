import { ItemType } from "antd/lib/menu/hooks/useItems";

export interface INavItem {
	key: string;
	label: string;
	path: string;
}

export type IMenuCallBackItem = ItemType;
