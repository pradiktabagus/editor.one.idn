'use client'

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { buildProviderTree } from "./tree";
import ThemeComponent from "./themes";

const queryClient = new QueryClient()

/**
 * @description
 * This is the root provider tree for the application.
 */
const ProviderTree = buildProviderTree([
    [QueryClientProvider, { client: queryClient }, ]]) as React.FC<{ children: React.ReactNode }>;

/**
 * 
 * @param { children: React.ReactNode } 
 * @description
 * This function takes a React component and wraps it in the ProviderTree.
 * @returns 
 */    
const Providers = ({ children }: { children: React.ReactNode }) => (
        <>
            <ProviderTree>
                {children}
                <ReactQueryDevtools />
            </ProviderTree>
        </>
    )

export default Providers
