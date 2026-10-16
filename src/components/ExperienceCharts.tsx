"use client";

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const experienceData = [
  { name: "Frontend Development", value: 75 },
  { name: "Backend Development", value: 85 },
  { name: "Database & API Integration", value: 80 },
  { name: "Problem Solving", value: 75 },
  { name: "Communication", value: 75 },
  { name: "Teamwork", value: 90 },
];

const technologyData = [
  { name: "VedNova", technologies: 6 },
  { name: "Infysion", technologies: 1 },
];

const COLORS = [
  "#A78BFA",
  "#38BDF8",
  "#34D399",
  "#FBBF24",
  "#F472B6",
  "#818CF8",
];

export default function ExperienceCharts() {
  return (
    <section className="mt-20 grid grid-cols-1 gap-6 lg:grid-cols-2">
      {/* Doughnut chart */}
      <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 sm:p-8">
        <p className="text-xs uppercase tracking-[0.25em] text-violet-300">
          Overview
        </p>

        <h3 className="mt-3 text-xl font-semibold text-white">
          Experience Breakdown
        </h3>

        <p className="mt-2 text-sm text-zinc-400">
          Distribution of my experience entries.
        </p>

        <div className="mt-6 h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={experienceData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={68}
                outerRadius={94}
                paddingAngle={5}
                stroke="none"
              >
                {experienceData.map((entry, index) => (
                  <Cell key={entry.name} fill={COLORS[index]} />
                ))}
              </Pie>

              <Tooltip
                contentStyle={{
                  background: "#18181b",
                  border: "1px solid #3f3f46",
                  borderRadius: "12px",
                  color: "#fff",
                }}
                formatter={(value, name) => [value, name]}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
          {experienceData.map((item, index) => (
            <div key={item.name} className="flex items-center gap-2">
              <span
                className="size-2.5 rounded-full"
                style={{ backgroundColor: COLORS[index] }}
              />
              <span className="text-xs text-zinc-400">{item.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Horizontal bar chart */}
      <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 sm:p-8">
        <p className="text-xs uppercase tracking-[0.25em] text-violet-300">
          Technologies
        </p>

        <h3 className="mt-3 text-xl font-semibold text-white">
          Technology Distribution
        </h3>

        <p className="mt-2 text-sm text-zinc-400">
          Number of technologies listed for each experience.
        </p>

        <div className="mt-6 h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={technologyData}
              layout="vertical"
              margin={{ top: 8, right: 16, left: 8, bottom: 8 }}
            >
              <CartesianGrid
                stroke="#27272a"
                strokeDasharray="3 3"
                horizontal={false}
              />

              <XAxis
                type="number"
                allowDecimals={false}
                stroke="#71717a"
                tick={{ fill: "#a1a1aa", fontSize: 12 }}
                axisLine={false}
                tickLine={false}
              />

              <YAxis
                type="category"
                dataKey="name"
                width={75}
                stroke="#71717a"
                tick={{ fill: "#d4d4d8", fontSize: 12 }}
                axisLine={false}
                tickLine={false}
              />

              <Tooltip
                cursor={{ fill: "rgba(167,139,250,0.08)" }}
                contentStyle={{
                  background: "#18181b",
                  border: "1px solid #3f3f46",
                  borderRadius: "12px",
                  color: "#fff",
                }}
                formatter={(value) => [
                  `${value} technologies`,
                  "Listed",
                ]}
              />

              <Bar
                dataKey="technologies"
                fill="#A78BFA"
                radius={[0, 6, 6, 0]}
                barSize={28}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}