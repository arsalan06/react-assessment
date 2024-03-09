import React, { forwardRef, ReactNode, HTMLAttributes } from "react";

// material-ui
import { Card, CardContent } from "@mui/material";

// TypeScript types
interface MainCardProps {
  border?: boolean;
  boxShadow?: boolean;
  content?: boolean;
  contentClass?: string;
  contentSX?: React.CSSProperties;
  darkTitle?: boolean;
  secondary?: ReactNode;
  shadow?: string;
  title?: ReactNode;
}

type DivProps = Omit<HTMLAttributes<HTMLDivElement>, keyof MainCardProps>;

// ==============================|| CUSTOM MAIN CARD ||============================== //

const MainCard = forwardRef<HTMLDivElement, MainCardProps & DivProps>(
  (
    {
      border = true,
      boxShadow,
      children,
      content = true,
      contentClass = "",
      contentSX = {},
      darkTitle,
      secondary,
      shadow,
      title,
      ...others
    },
    ref
  ) => {
    return (
      <Card
        ref={ref}
        {...others}
        sx={{
          margin: "8px 40px",
          boxShadow: "inherit",
          border: "none",
          ":hover": {
            boxShadow: "inherit",
          },
        }}
      >
        {/* card content */}
        {content && (
          <CardContent sx={{ p: 8 }} className={contentClass}>
            {children}
          </CardContent>
        )}
        {!content && children}
      </Card>
    );
  }
);

export default MainCard;
