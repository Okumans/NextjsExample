import { Kanit, Lustria, Inter } from "next/font/google";

export const kanit = Kanit({
  subsets: ["thai", "latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const lusitana = Lustria({ subsets: ["latin"], weight: ["400"] });

export const inter = Inter({ subsets: ["latin"] });
