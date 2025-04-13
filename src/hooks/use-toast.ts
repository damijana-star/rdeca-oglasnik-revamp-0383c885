
import { toast as sonnerToast } from "sonner"

type ToastProps = string | { 
  title: string; 
  description?: string; 
  variant?: "default" | "destructive" 
}

// Create a simple toast function that uses sonner
export const toast = (props: ToastProps) => {
  return sonnerToast(props)
}

// Export a useToast hook that returns the toast function
export const useToast = () => {
  return {
    toast
  }
}
