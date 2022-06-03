import { createContext } from "react";
export interface LayoutContextInterface {
    toggleMenu: any;
    menuShown: boolean;
}
export default createContext<LayoutContextInterface | null>(null);