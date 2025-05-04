type InbodysComponentProps = {
  backgroundImage?: string;
  title?: string;
  subtitle?: string;
  linkHref?: string;
  linkLabel?: string;
  onClick?: () => void;
};

export default function InBodysComponent({
  backgroundImage = "",
  title = "InBody Tests",
  subtitle = "",
  linkHref = "/dashboard/Inbody",
  linkLabel = "View All",
  onClick,
}: InbodysComponentProps) {
  return (
    <div
      className="relative text-white rounded-2xl p-6 shadow-2xl w-80 h-48 overflow-hidden bg-cover bg-center cursor-pointer"
      onClick={onClick}
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundColor: backgroundImage ? undefined : "#000000",
      }}
    >
      <div className="absolute inset-0 bg-black/40 z-0" />

      <div className="relative z-10 flex flex-col justify-between h-full">
        <div>
          <div className="text-4xl font-bold italic">{title}</div>
          {subtitle && <div className="text-sm text-gray-300">{subtitle}</div>}
        </div>

        <div className="text-right">
          <span className="text-sm text-gray-300 hover:text-white underline">
            {linkLabel}
          </span>
        </div>
      </div>
    </div>
  );
}
