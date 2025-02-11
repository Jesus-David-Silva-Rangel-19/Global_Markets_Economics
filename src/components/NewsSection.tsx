
import { Card } from "@/components/ui/card";

interface NewsItem {
  title: string;
  source: string;
  time: string;
  category: string;
}

const mockNews: NewsItem[] = [
  {
    title: "La FED mantiene tasas de interés sin cambios",
    source: "Reuters",
    time: "Hace 1 hora",
    category: "Mercados Globales"
  },
  {
    title: "Bitcoin supera los $43,000 en medio de optimismo del mercado",
    source: "Bloomberg",
    time: "Hace 2 horas",
    category: "Criptomonedas"
  },
  {
    title: "Mercado colombiano cierra al alza impulsado por sector financiero",
    source: "Valoraanalitik",
    time: "Hace 3 horas",
    category: "Mercado Local"
  }
];

export const NewsSection = () => {
  return (
    <section className="py-6">
      <h2 className="text-2xl font-alegreya font-bold mb-4">Últimas Noticias</h2>
      <div className="space-y-4">
        {mockNews.map((news, index) => (
          <Card key={index} className="p-4 hover:shadow-lg transition-shadow duration-200">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-labrada font-medium text-lg">{news.title}</h3>
                <p className="text-sm text-gray-600 mt-1">
                  {news.source} · {news.time}
                </p>
              </div>
              <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                {news.category}
              </span>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
