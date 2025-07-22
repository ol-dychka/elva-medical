const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="w-12 h-12 border-6 border-slate-200 border-t-emerald-700 rounded-full animate-spin"></div>
    </div>
  );
};
export default LoadingSpinner;
