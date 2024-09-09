import { Inter as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";
import "./globals.css";
import { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Provider from "./Provider";
import { Analytics } from "@vercel/analytics/react";

const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
});

export const metadata: Metadata = {
	title: "Docs-NexGen",
	description: "A collaborative editor",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<ClerkProvider
			appearance={{
				baseTheme: dark,
				variables: {
					colorPrimary: "#3371FF",
					fontSize: "16px",
				},
			}}
		>
			<html lang="en" suppressHydrationWarning>
				<head>
					<meta
						name="google-site-verification"
						content="DleMlJy8kOLAiEy7mX1BjGuL5f1dfyZ-250snciMwu4"
					/>
					<meta
						name="google-site-verification"
						content="l7ZzsE9xRoaHF5u5PKmTDXJ7Uk73ybdXVQW5amQjHjk"
					/>
				</head>
				<body
					className={cn(
						"min-h-screen font-sans antialiased",
						fontSans.variable
					)}
				>
					<Provider>{children}</Provider>
					<Analytics />
				</body>
			</html>
		</ClerkProvider>
	);
}
