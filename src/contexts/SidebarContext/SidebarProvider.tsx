import {SidebarContext} from "./SidebarContext.ts";
import {ReactNode, useState} from "react";

const SidebarProvider = ({children}: {children: ReactNode}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleClose = () => {
        setIsOpen(false)
    }

    return (
        <SidebarContext.Provider value={{isOpen, setIsOpen, handleClose}}>
            {children}
        </SidebarContext.Provider>
    )
}

export default SidebarProvider