
import { toast as sonnerToast } from "sonner"

// Create a simple toast function that uses sonner
export const toast = (props: string | { title: string; description?: string; variant?: "default" | "destructive" }) => {
  return sonnerToast(props)
}

// Export a useToast hook that returns the toast function
export const useToast = () => {
  return {
    toast
  }
}
