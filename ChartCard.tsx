import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, Tooltip, LabelList } from "recharts";

export type ChartDatum = { label: string; value: number; highlight?: boolean };

const TEAL = "oklch(0.51 0.07 187)";
const SAND = "oklch(0.87 0.05 80)";

function CustomTooltip({ active, payload }: any) {
  if (!active || !payload?.length) return null;
  const d = payload[0].payload as ChartDatum;
  return (
    <div className="rounded-lg border border-border bg-card px-3 py-2 text-xs shadow-md">
      <div className="font-medium text-foreground">{d.label}</div>
      <div className="text-primary font-semibold">{d.value}%</div>
    </div>
  );
}

export function HBarChart({ data, height = 260 }: { data: ChartDatum[]; height?: number }) {
  const chartHeight = Math.max(height, data.length * 44);
  return (
    <div style={{ width: "100%", height: chartHeight }}>
      <ResponsiveContainer>
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 8, right: 40, bottom: 8, left: 8 }}
          barCategoryGap={10}
        >
          <XAxis type="number" domain={[0, 100]} hide />
          <YAxis
            dataKey="label"
            type="category"
            tickLine={false}
            axisLine={false}
            width={140}
            tick={{ fill: "oklch(0.4 0.02 215)", fontSize: 12 }}
          />
          <Tooltip cursor={{ fill: "oklch(0.95 0.02 185)" }} content={<CustomTooltip />} />
          <Bar dataKey="value" radius={[6, 6, 6, 6]} background={{ fill: "oklch(0.96 0.01 190)", radius: 6 }}>
            {data.map((d, i) => (
              <Cell key={i} fill={d.highlight ? TEAL : SAND} />
            ))}
            <LabelList
              dataKey="value"
              position="right"
              formatter={(v: number) => `${v}%`}
              style={{ fill: "oklch(0.51 0.07 187)", fontSize: 12, fontWeight: 600 }}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function ChartCard({
  title,
  data,
  interpretation,
  highlightTop = true,
}: {
  title: string;
  data: ChartDatum[];
  interpretation: string;
  highlightTop?: boolean;
}) {
  const max = Math.max(...data.map((d) => d.value));
  const enriched = data.map((d) => ({
    ...d,
    highlight: d.highlight ?? (highlightTop && d.value === max),
  }));
  return (
    <div className="card-elevated p-6 md:p-8 flex flex-col">
      <h3 className="font-serif text-xl text-foreground mb-4">{title}</h3>
      <HBarChart data={enriched} />
      <p className="mt-4 pt-4 border-t border-border/60 text-sm text-muted-foreground leading-relaxed italic">
        {interpretation}
      </p>
    </div>
  );
}
