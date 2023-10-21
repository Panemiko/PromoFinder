import type { ReactNode } from "react";
import { ptBR } from "@clerk/localizations";
import { ClerkProvider } from "@clerk/nextjs";

import { colors } from "@promofinder/tailwind-config";

export function ClerkReactProvider({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider
      afterSignInUrl="/business"
      afterSignUpUrl="/business"
      signInUrl="/auth/sign-in"
      signUpUrl="/auth/sign-up"
      localization={ptBR}
      appearance={{
        variables: {
          borderRadius: "4px",
          colorBackground: colors.neutral[1],
          colorDanger: colors.danger[9],
          colorInputBackground: colors.neutral[1],
          colorPrimary: colors.primary[9],
          colorSuccess: colors.success[9],
          colorInputText: colors.neutral[12],
          colorText: colors.neutral[12],
          colorTextOnPrimaryBackground: "white",
          colorTextSecondary: colors.neutral[12],
          colorWarning: colors.warning[9],
        },
        elements: {
          card: "shadow-none",
        },
      }}
    >
      {children}
    </ClerkProvider>
  );
}
