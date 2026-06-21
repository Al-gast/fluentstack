import type { Metadata } from "next";
import { Geist_Mono, Montserrat } from "next/font/google";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { getThemeInitScript } from "@/lib/theme";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FluentStack",
  description: "Interactive learning platform for technology skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${montserrat.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <head>
        <script
          id="fluentstack-theme-init"
          dangerouslySetInnerHTML={{ __html: getThemeInitScript() }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
