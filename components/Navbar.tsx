import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const Navbar = () => {
    return (
        <div className='flex justify-between'>
            <div className='flex gap-x-4'>
                <div className='text-2xl'>Movie App</div>
                <div className='text-2xl'>Home</div>

            </div>
            <div className='flex gap-3'>
                <div className=''>dark mode</div>
                <div className=''>search component</div>
            </div>
        </div>
    )
}

export default Navbar