import { useMutation as e } from "../../node_modules/@tanstack/react-query/build/modern/useMutation.js";
import { SecretsService as t } from "../../api/secrets-service.js";
//#region src/hooks/mutation/use-update-secret.ts
var n = () => e({ mutationFn: ({ secretToEdit: e, name: n, description: r, value: i }) => t.updateSecret(e, n, r, i) });
//#endregion
export { n as useUpdateSecret };

//# sourceMappingURL=use-update-secret.js.map