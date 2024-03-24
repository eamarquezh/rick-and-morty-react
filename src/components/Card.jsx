
// eslint-disable-next-line react/prop-types
export default function Card({ imageUrl, title, content }) {
  return (
    <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl rounded overflow-hidden shadow-lg">
      <img loading="lazy" className="w-16 sm:w-20 md:w-24 lg:w-32 xl:w-40 h-16 sm:h-20 md:h-24 lg:h-32 xl:h-40 rounded-full transition-all duration-1000 ease-in-out" src={imageUrl} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{content}</p>
      </div>
    </div>
  )
}
