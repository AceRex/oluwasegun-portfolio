import { useTheme } from "../../../UseContext/context";

export const width = 200;
export const height = 200;
export const cx = 100;
export const cy = 100;
export const rx = 85;
export const ry = 85;
export const startOffset = 0;
export const reversed = false;
export const text = "Software Developer - Creative Designer - Fullstack Developer - "
export const fontSize = 17
export const textPathFill = "#ffffff";
export const darktextPathFill = "#FA58B6";
export const dy = 0;
export const fill = "";
export const textProps = fontSize
  ? { style: { fontSize: fontSize, color: "white" } }
  : null;
export const textPathProps = textPathFill && { fill: textPathFill };
export const darktextPathProps = !textPathFill ? { fill: darktextPathFill } : null;
export const tspanProps = dy ? { dy: dy } : null;
export const ellipseProps = fill ? { style: `fill: ${fill}` } : null;