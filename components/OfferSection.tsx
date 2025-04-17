interface OfferSectionProps {
  
  background: string;
}

function OfferSection({  background }: OfferSectionProps) {
  return (
    <div
      className="w-full h-full flex items-center justify-center bg-cover bg-center rounded-lg shadow-lg relative"
      style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover' }}
    >
      <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
      
    </div>
  );
}

export default OfferSection;