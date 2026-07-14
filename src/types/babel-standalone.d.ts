declare module "@babel/standalone" {
  export type TransformResult = {
    code?: string | null;
  };

  export function transform(code: string, options?: Record<string, unknown>): TransformResult;
}
