'use client'

import { ProviderWithProps } from "./tree.type";
/**
 * 
 * @param providers 
 * @description
 * This function takes an array of providers and their props and returns a React component that wraps the providers in a tree.
 * @returns 
 */
const buildProviderTree = (providers: ProviderWithProps[]) => {
    const InitialComponent: React.FC<{ children: React.ReactNode }> = ({ children }) => <>{children}</>;
  
    return providers.reduce(
      (AccumulatedComponent, [Provider, props = {}]) => {
        const WrappedComponent: React.FC<{ children: React.ReactNode }> = ({ children }) => (
          <AccumulatedComponent>
            <Provider {...props}>{children}</Provider>
          </AccumulatedComponent>
        );
        return WrappedComponent;
      },
      InitialComponent
    );
  };

export { buildProviderTree };