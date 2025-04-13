
import { toast as sonnerToast } from "sonner"
import { useToast as useToastOriginal } from "@/components/ui/use-toast"

// Re-export the hook
export const useToast = useToastOriginal

// Create a simple toast function that uses sonner
export const toast = (props: any) => {
  return sonnerToast(props)
}
