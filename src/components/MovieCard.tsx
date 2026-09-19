

function MovieCard() {
  return (
 <div className="w-64 bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
  <img
    src=""
    alt="انتقام جویان"
    className="w-full h-80 object-cover bg-gray-200"
  />

  <div className="p-4 text-right">
    <h3 className="text-lg font-bold text-gray-800 mb-2">
      انتقام جویان
    </h3>

    <p className="text-sm text-gray-500 mb-1">
      سال انتشار: 2012
    </p>

    <p className="text-sm text-yellow-600 font-semibold mb-2">
      امتیاز: 8.0
    </p>

    <p className="text-sm text-gray-600 line-clamp-2 mb-4">
      توضیحات فیلم در این قسمت قرار می‌گیرد و خلاصه‌ای از داستان فیلم نمایش داده می‌شود.
    </p>

    <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors">
      مشاهده جزئیات
    </button>
  </div>
</div>
  )
}

export default MovieCard