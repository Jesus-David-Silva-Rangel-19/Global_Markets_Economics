
import { useEffect, useState } from 'react';

interface TickerItem {
  symbol: string;
  price: number;
  change: number;
}

const mockData: TickerItem[] = [
  { symbol: "USD/COP", price: 3950.25, change: 0.45 },
  { symbol: "EUR/USD", price: 1.0865, change: -0.12 },
  { symbol: "BTC/USD", price: 43250.80, change: 2.34 },
  { symbol: "NASDAQ", price: 15982.30, change: 0.78 },
  { symbol: "COLCAP", price: 1235.40, change: -0.23 },
];

export const TickerTape = () => {
  const [data, setData] = useState<TickerItem[]>(mockData);

  return (
    <div className="w-full bg-white border-y border-gray-200 overflow-hidden py-2">
      <div className="animate-ticker whitespace-nowrap inline-block">
        {data.map((item, index) => (
          <span key={index} className="inline-block mx-6 font-labrada">
            <span className="font-medium">{item.symbol}</span>
            <span className="mx-2">{item.price.toFixed(2)}</span>
            <span className={`${item.change >= 0 ? 'text-positive' : 'text-negative'}`}>
              {item.change >= 0 ? '+' : ''}{item.change}%
            </span>
          </span>
        ))}
      </div>
    </div>
  );
};
