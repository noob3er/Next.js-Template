import type { Metadata } from "next";
import "./globals.css";
import "./_assets/styles/globals.css";
import StyledComponentsRegistry from "./_lib/registry";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
    </html>
  );
}
