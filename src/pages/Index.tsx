
import { TickerTape } from "@/components/TickerTape";
import { MarketSection } from "@/components/MarketSection";
import { NewsSection } from "@/components/NewsSection";

const usMarkets = [
  { title: "S&P 500", value: 4927.12, change: 0.85 },
  { title: "Nasdaq", value: 15982.30, change: 0.78 },
  { title: "Dow Jones", value: 38654.42, change: 0.35 },
];

const colombianMarkets = [
  { title: "COLCAP", value: 1235.40, change: -0.23, currency: "" },
  { title: "TRM", value: 3950.25, change: 0.45, currency: "" },
  { title: "IBR", value: 12.15, change: 0, currency: "" },
];

const cryptoMarkets = [
  { title: "Bitcoin", value: 43250.80, change: 2.34 },
  { title: "Ethereum", value: 2305.45, change: 1.85 },
  { title: "BNB", value: 312.80, change: -0.45 },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto py-6">
          <h1 className="text-4xl font-alegreya font-black text-center">
            Mercado Global
          </h1>
          <p className="text-center text-gray-600 font-labrada mt-2">
            Visualización de mercados financieros en tiempo real
          </p>
        </div>
      </header>
      
      <TickerTape />
      
      <main className="container mx-auto px-4 py-8 animate-fade-in">
        <MarketSection title="Mercado Estadounidense" markets={usMarkets} />
        <MarketSection title="Mercado Colombiano" markets={colombianMarkets} />
        <MarketSection title="Criptomonedas" markets={cryptoMarkets} />
        <NewsSection />
      </main>
      
      <footer className="bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-gray-600 font-labrada">
            Datos en tiempo real del mercado global
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
