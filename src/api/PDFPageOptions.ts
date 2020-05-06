import { Color } from 'src/api/colors';
import PDFFont from 'src/api/PDFFont';
import { Rotation } from 'src/api/rotations';
import { LineCapStyle, LineJoinStyle } from 'src/api/operators';

export interface PDFPageDrawTextOptions {
  color?: Color;
  font?: PDFFont;
  size?: number;
  rotate?: Rotation;
  xSkew?: Rotation;
  ySkew?: Rotation;
  x?: number;
  y?: number;
  lineHeight?: number;
  maxWidth?: number;
  wordBreaks?: string[];
}

export interface PDFPageDrawImageOptions {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  rotate?: Rotation;
  xSkew?: Rotation;
  ySkew?: Rotation;
}

export interface PDFPageDrawPageOptions {
  x?: number;
  y?: number;
  xScale?: number;
  yScale?: number;
  width?: number;
  height?: number;
  rotate?: Rotation;
  xSkew?: Rotation;
  ySkew?: Rotation;
}

export interface PDFPageDrawRectangleOptions {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  rotate?: Rotation;
  xSkew?: Rotation;
  ySkew?: Rotation;
  borderWidth?: number;
  color?: Color;
  borderColor?: Color;
}

export interface PDFPageDrawLinePathOptions {
    /** Defaults to 1 */
    thickness?: number;
    /** Defaults to "Round" */
    lineCap?: LineCapStyle;
    /** Defaults to "Round" */
    lineJoin?: LineJoinStyle;
    /** If set then the path will be `stroke()`ed */
    strokeColor?: Color;
    /** If set then the path will be `fill()`ed */
    fillColor?: Color;
    /**
     * [x, y] for each point; a line will be
     * drawn between each point starting with
     * the first.
     * 
     * To close the path at the end pass set close: true
     */
    points: [number, number][];
    /** If true the path will be closed */
    close?: boolean;
}

export interface PDFPageDrawLineOptions {
  start: { x: number; y: number };
  end: { x: number; y: number };
  thickness?: number;
  color?: Color;
}

export interface PDFPageDrawSquareOptions {
  x?: number;
  y?: number;
  size?: number;
  rotate?: Rotation;
  xSkew?: Rotation;
  ySkew?: Rotation;
  borderWidth?: number;
  color?: Color;
  borderColor?: Color;
}

export interface PDFPageDrawEllipseOptions {
  x?: number;
  y?: number;
  xScale?: number;
  yScale?: number;
  color?: Color;
  borderColor?: Color;
  borderWidth?: number;
}

export interface PDFPageDrawCircleOptions {
  x?: number;
  y?: number;
  size?: number;
  color?: Color;
  borderColor?: Color;
  borderWidth?: number;
}

export interface PDFPageDrawSVGOptions {
  x?: number;
  y?: number;
  scale?: number;
  borderWidth?: number;
  color?: Color;
  borderColor?: Color;
}
