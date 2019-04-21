export const TOGGLE_MENU = "OPEN_MENU";

export const openMenu = () => ({ type: TOGGLE_MENU, open: true });
export const closeMenu = () => ({ type: TOGGLE_MENU, open: false });
