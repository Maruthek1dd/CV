import React from "react";

interface GaugeProps {
  percent?: number;
  radius: number;
  [key: string]: any;
}

export const Gauge: React.FC<GaugeProps> = ({
  percent = 0,
  radius,
  ...rest
}) => {
  const strokeWidth = radius * 0.2;
  const innerRadius = radius - strokeWidth;
  const circumference = innerRadius * 2 * Math.PI;
  const arc = circumference * 0.75;
  const dashArray = `${arc} ${circumference}`;
  const transform = `rotate(135, ${radius}, ${radius})`;
  const offset = arc - (percent / 100) * arc;

  return (
    <svg height={radius * 2} width={radius * 2} {...rest}>
      <defs>
        <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#666666" stopOpacity="1" />
          <stop offset="50%" stopColor="#dddddd" stopOpacity="1" />
          <stop offset="100%" stopColor="#f0e68c" stopOpacity="1" />
        </linearGradient>
      </defs>

      {/* Fondo del medidor */}
      <circle
        className="gauge_base"
        cx={radius}
        cy={radius}
        fill="transparent"
        r={innerRadius}
        stroke="url(#grad)"
        strokeDasharray={dashArray}
        strokeLinecap="round"
        strokeWidth={strokeWidth}
        transform={transform}
      />

      {/* Medidor de porcentaje */}
      <circle
        className="gauge_percent"
        cx={radius}
        cy={radius}
        fill="transparent"
        r={innerRadius}
        stroke="#009688" // Color del medidor de porcentaje
        strokeDasharray={dashArray}
        strokeDashoffset={offset}
        strokeLinecap="round"
        strokeWidth={strokeWidth}
        style={{ transition: "stroke-dashoffset 0.3s" }}
        transform={transform}
      />
    </svg>
  );
};
