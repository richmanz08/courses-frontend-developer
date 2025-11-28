interface TerminalUIProps {
  children: React.ReactNode;
  fileName: string;
  name: string;
}

export const TerminalUI: React.FC<TerminalUIProps> = ({
  children,
  fileName,
  name,
}) => {
  return (
    <div className="mb-6 rounded-lg overflow-hidden border border-gray-200 shadow-sm">
      {/* Code Header */}
      <div className="bg-gray-800 text-white px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <span className="ml-3 text-sm font-medium">{fileName}</span>
        </div>
        <div className="text-xs text-gray-300">{name}</div>
      </div>

      {/* Code Content */}
      <div className="bg-gray-900 p-4 overflow-x-auto">{children}</div>
    </div>
  );
};
