import { useCart } from "../context/CartContext";

const Notification = () => {
  const { notification } = useCart();

  if (!notification.show) return null;

  return (
    <div className="fixed bottom-4 montserrat-med right-4 z-50 flex items-center justify-center px-4 py-2 bg-green-500 text-white rounded-lg shadow">
      {notification.message}
    </div>
  );
};

export default Notification;
