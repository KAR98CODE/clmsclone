import { Card, CardContent } from "@/components/ui/card";
import { Gamepad2 } from "lucide-react";
import { useLocation } from "wouter";

export default function Catalog() {
    const [, setLocation] = useLocation();

    return (
      <div className="w-full">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-slate-900">Catalog</h1>
          <p className="text-sm text-slate-600">Choose what you want to open.</p>
        </div>

        <Card
          role="button"
          tabIndex={0}
          onClick={() => setLocation("/games")}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") setLocation("/games");
          }}
          className="max-w-xl cursor-pointer transition hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
        >
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl bg-slate-900 text-white flex items-center justify-center">
                <Gamepad2 className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-slate-900">Wild West Math Duel</div>
                <div className="text-sm text-slate-600">Open the game</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
}