import { GenericTypeExampleComponent } from "@/src/component/typescript-basic/GenericType";
import { TypeScriptBasicComponent } from "@/src/component/typescript-basic/TypeScriptBasic";

export default function Page() {
  return (
    <div>
      <TypeScriptBasicComponent title="Hello, TypeScript!" />
      <GenericTypeExampleComponent />
    </div>
  );
}
