export default function PricingCard({
  title,
  price,
  period = '',
  features = [],
  buttonText = 'Get Started',
  onButtonClick = () => {},
  highlighted = false
}) {
  return (
    <div className={`relative overflow-hidden rounded-2xl transition-all duration-300 ${
      highlighted
        ? 'bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-400 shadow-2xl scale-105'
        : 'bg-slate-900 border border-slate-700 shadow-lg hover:shadow-xl'
    } p-8 w-full max-w-sm`}>

      {/* Accent line */}
      <div className={`absolute top-0 left-0 right-0 h-1 ${
        highlighted ? 'bg-gradient-to-r from-amber-400 to-orange-400' : 'bg-gradient-to-r from-violet-500 to-cyan-500'
      }`} />

      {/* Badge */}
      {highlighted && (
        <div className="inline-block bg-amber-400 text-slate-900 text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full mb-4">
          Most Popular
        </div>
      )}

      {/* Title */}
      <h2 className={`text-3xl font-black tracking-tight mb-2 ${
        highlighted ? 'text-slate-900' : 'text-white'
      }`}>
        {title}
      </h2>

      {/* Price */}
      <div className="mb-8">
        <span className={`text-6xl font-black ${
          highlighted ? 'text-amber-600' : 'text-cyan-400'
        }`}>
          {price}
        </span>
        <span className={`text-sm font-semibold ml-2 ${
          highlighted ? 'text-slate-600' : 'text-slate-400'
        }`}>
          {period}
        </span>
      </div>

      {/* Features List */}
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className={`flex items-start text-sm font-medium ${
            highlighted ? 'text-slate-700' : 'text-slate-300'
          }`}>
            <svg
              className={`w-5 h-5 mr-3 flex-shrink-0 mt-0.5 ${
                highlighted ? 'text-amber-500' : 'text-violet-400'
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <button
        onClick={onButtonClick}
        className={`w-full font-black uppercase tracking-wider py-3 px-4 rounded-lg transition-all duration-200 ${
          highlighted
            ? 'bg-amber-500 hover:bg-amber-600 text-slate-900 shadow-lg hover:shadow-xl'
            : 'bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-700 hover:to-cyan-700 text-white'
        }`}
      >
        {buttonText}
      </button>
    </div>
  );
}
