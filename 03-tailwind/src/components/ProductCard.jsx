import Button from "./Button";

export default function ProductCard({ product }) {
  return (
    <div className="bg-green-100 dark:bg-gray-800 rounded-lg shadow-card dark:shadow-cardDark overflow-hidden transition-transform duration-200 hover:translate-y-[-2px]">
      <div className="w-full aspect-square bg-gray-200 dark:bg-gray-700">
        <img
          src={product.img}
          alt={product.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-4 flex flex-col gap-2 bg">
        <h3 className="text-gray-900 dark:text-white font-semibold text-sm line-clamp-2">{product.title}</h3>
        <div className="flex justify-between items-center">
          <span className="text-primary dark:text-green-400 font-bold">${product.price.toFixed(2)}</span>
          <span className="text-yellow-400">{'★'.repeat(product.rating)}</span>
        </div>
        <span className="text-xs bg-secondary text-white px-2 py-1 rounded self-start">{product.tag}</span>
        <Button variant="solid">Adicionar</Button>
      </div>
    </div>
  );
}
