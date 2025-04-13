
import { toast as sonnerToast } from "sonner"
import { type ToastProps } from "@/components/ui/toast"

// Create a simple toast function that uses sonner
export const toast = (props: any) => {
  return sonnerToast(props)
}

// Export a useToast hook that returns the toast function
export const useToast = () => {
  return {
    toast
  }
}
