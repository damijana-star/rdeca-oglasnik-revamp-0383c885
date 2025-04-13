
import { toast as sonnerToast, type ToastT } from "sonner"

type ToastProps = string | { 
  title: string; 
  description?: string; 
  variant?: "default" | "destructive" 
}

// Create a simple toast function that uses sonner
export const toast = (props: ToastProps) => {
  // For string props, just pass it directly
  if (typeof props === 'string') {
    return sonnerToast(props)
  }
  
  // For object props, construct the arguments properly
  return sonnerToast(props.title, {
    description: props.description,
    // Only pass variant if it exists
    ...(props.variant && { variant: props.variant })
  })
}

// Export a useToast hook that returns the toast function
export const useToast = () => {
  return {
    toast
  }
}
