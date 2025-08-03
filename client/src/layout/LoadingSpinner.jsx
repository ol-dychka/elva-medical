const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="border-aliceblue border-t-springgreen h-12 w-12 animate-spin rounded-full border-6"></div>
    </div>
  );
};
export default LoadingSpinner;
