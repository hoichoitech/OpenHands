import { useMutation as e } from "../../node_modules/@tanstack/react-query/build/modern/useMutation.js";
import { SecretsService as t } from "../../api/secrets-service.js";
//#region src/hooks/mutation/use-create-secret.ts
var n = () => e({ mutationFn: ({ name: e, value: n, description: r }) => t.createSecret(e, n, r) });
//#endregion
export { n as useCreateSecret };

//# sourceMappingURL=use-create-secret.js.map