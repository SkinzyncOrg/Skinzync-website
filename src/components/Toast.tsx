interface ToastProps {
  message: string;
  type: 'error' | 'success' | 'info' | 'warning';
}

export default function Toast({ message, type }: ToastProps) {
  const getAlertClass = () => {
    switch (type) {
      case 'error':
        return 'alert-error';
      case 'success':
        return 'alert-success';
      case 'info':
        return 'alert-info';
      case 'warning':
        return 'alert-warning';
      default:
        return '';
    }
  };

  return (
    <div className="toast toast-top toast-end">
      <div className={`alert ${getAlertClass()}`}>
        <span>{message}</span>
      </div>
    </div>
  );
}
