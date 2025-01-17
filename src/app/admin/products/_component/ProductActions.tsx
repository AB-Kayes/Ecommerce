"use client"

import { DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { useTransition } from "react"
import { toggleProductAvailability , deleteProduct} from "../../_action/products"
import { useRouter } from "next/navigation"

export function ActiveToggleDropdownItem({id, isAvailableToPurchase}: 
    {id: string 
    isAvailableToPurchase: boolean
}){
    
    const [isPending, startTransition] = useTransition()
    const router = useRouter()
    return <>
    <DropdownMenuItem 
    disabled={isPending}
     onClick={() => {
        startTransition(async () => {
            await toggleProductAvailability(id, !isAvailableToPurchase)
            router.refresh()
        })
        }}>{isAvailableToPurchase ? "Deactivate" : "Activate"}</DropdownMenuItem>
    </>
}

export function DeleteDropdownItem({id, disabled}: 
    {id: string 
    disabled: boolean
}){

    const [isPending, startTransition] = useTransition()
    const router = useRouter()
    return <>
    <DropdownMenuItem 
    variant="destructive"
    disabled={disabled || isPending} 
    onClick={() => {
        startTransition(async () => {
            await deleteProduct(id)
            router.refresh()
        })
        }}>Delete</DropdownMenuItem>
    </>
}