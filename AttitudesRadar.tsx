import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { axis: "Connaissances", attitudes: 55, pratiques: 48 },
  { axis: "Formation", attitudes: 42, pratiques: 35 },
  { axis: "Empathie", attitudes: 60, pratiques: 50 },
  { axis: "Protocoles", attitudes: 30, pratiques: 42 },
  { axis: "Communication", attitudes: 52, pratiques: 48 },
  { axis: "Sécurité", attitudes: 68, pratiques: 62 },
];

export function AttitudesRadar() {
  return (
    <div className="w-full h-[360px] md:h-[420px]">
      <ResponsiveContainer>
        <RadarChart data={data} outerRadius="72%">
          <PolarGrid stroke="oklch(0.85 0.01 230)" />
          <PolarAngleAxis
            dataKey="axis"
            tick={{ fill: "oklch(0.27 0.05 240)", fontSize: 12, fontFamily: "Space Grotesk" }}
          />
          <PolarRadiusAxis
            angle={90}
            domain={[0, 100]}
            tick={{ fill: "oklch(0.52 0.02 215)", fontSize: 10, fontFamily: "Fira Code" }}
            axisLine={false}
          />
          <Radar
            name="Attitudes"
            dataKey="attitudes"
            stroke="oklch(0.27 0.05 240)"
            fill="oklch(0.27 0.05 240)"
            fillOpacity={0.35}
            strokeWidth={2}
          />
          <Radar
            name="Pratiques"
            dataKey="pratiques"
            stroke="oklch(0.81 0.14 185)"
            fill="oklch(0.81 0.14 185)"
            fillOpacity={0.35}
            strokeWidth={2}
          />
          <Legend
            iconType="circle"
            wrapperStyle={{ fontSize: 12, fontFamily: "Inter", paddingTop: 8 }}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
