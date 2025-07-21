"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { queryClient } from "@/lib/react-query";

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  const ENABLE_CLERK = false;
  const ENABLE_REACT_QUERY = false;

  let content = children;

  // Clerk Provider
  if (ENABLE_CLERK) {
    content = <ClerkProvider>{content}</ClerkProvider>;
  }

  // React Query Provider
  if (ENABLE_REACT_QUERY) {
    content = (
      <QueryClientProvider client={queryClient}>
        {content}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    );
  }

  return content;
};

export default Providers;
