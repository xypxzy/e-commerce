import {createContext} from "react";

interface SidebarContextProps {
    isOpen: boolean;
    setIsOpen: (state: boolean) => void;
    handleClose: () => void;
}

const initialSidebarContextValue: SidebarContextProps = {
    isOpen: false,
    setIsOpen: (state: boolean) => {},
    handleClose: () => {}
};

export const SidebarContext = createContext<SidebarContextProps>(initialSidebarContextValue);