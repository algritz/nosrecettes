import { toast } from 'sonner'

export const showSuccess = (message: string): string | number =>
  toast.success(message)

export const showError = (message: string): string | number =>
  toast.error(message)

const _showLoading = (message: string): string | number =>
  toast.loading(message)

const _dismissToast = (toastId: string): void => {
  toast.dismiss(toastId)
}
