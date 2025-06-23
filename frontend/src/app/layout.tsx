"use client";
import "../styles/globals.css";

// components
import SideBar from "@/components/layout/sideBar/SideBar";
import ThemeProvider from "@/components/shared/ThemeProvider";
import ModalRenderer from "@/components/ui/modals/ModalRenderer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Suspense, useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <html lang="en" suppressHydrationWarning>
      <QueryClientProvider client={queryClient}>
        <body className="bg-gray-100 dark:bg-gray-900">
          <ThemeProvider>
            <div className="flex">
              <Suspense fallback={<></>}>
                <SideBar />
                {children}
              </Suspense>
              <ReactQueryDevtools initialIsOpen={false} />
            </div>
          </ThemeProvider>
          <ModalRenderer />
        </body>
      </QueryClientProvider>
    </html>
  );
}
