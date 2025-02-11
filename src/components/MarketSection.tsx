
import { Card } from "@/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";

interface MarketCardProps {
  title: string;
  value: number;
  change: number;
  currency?: string;
}

const MarketCard = ({ title, value, change, currency = "$" }: MarketCardProps) => (
  <Card className="p-4 hover:shadow-lg transition-shadow duration-200">
    <h3 className="text-sm font-labrada text-gray-600">{title}</h3>
    <div className="mt-2 flex items-center justify-between">
      <span className="text-2xl font-alegreya font-bold">
        {currency}{value.toLocaleString('es-CO')}
      </span>
      <div className={`flex items-center ${change >= 0 ? 'text-positive' : 'text-negative'}`}>
        {change >= 0 ? <TrendingUp className="w-4 h-4 mr-1" /> : <TrendingDown className="w-4 h-4 mr-1" />}
        <span className="font-labrada">{Math.abs(change)}%</span>
      </div>
    </div>
  </Card>
);

export const MarketSection = ({ title, markets }: { title: string; markets: MarketCardProps[] }) => {
  return (
    <section className="py-6">
      <h2 className="text-2xl font-alegreya font-bold mb-4">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {markets.map((market, index) => (
          <MarketCard key={index} {...market} />
        ))}
      </div>
    </section>
  );
};
