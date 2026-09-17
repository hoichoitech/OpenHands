import { useMutation as e } from "../../node_modules/@tanstack/react-query/build/modern/useMutation.js";
import { SecretsService as t } from "../../api/secrets-service.js";
//#region src/hooks/mutation/use-delete-secret.ts
var n = () => e({ mutationFn: (e) => t.deleteSecret(e) });
//#endregion
export { n as useDeleteSecret };

//# sourceMappingURL=use-delete-secret.js.map