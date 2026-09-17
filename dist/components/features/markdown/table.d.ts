import React from "react";
import { ExtraProps } from "react-markdown";
export declare function table({ children, }: React.ClassAttributes<HTMLTableElement> & React.TableHTMLAttributes<HTMLTableElement> & ExtraProps): React.JSX.Element;
export declare function th({ children, }: React.ClassAttributes<HTMLTableCellElement> & React.ThHTMLAttributes<HTMLTableCellElement> & ExtraProps): React.JSX.Element;
export declare function td({ children, }: React.ClassAttributes<HTMLTableCellElement> & React.TdHTMLAttributes<HTMLTableCellElement> & ExtraProps): React.JSX.Element;
