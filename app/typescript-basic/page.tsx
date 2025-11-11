import { GenericTypeExampleComponent } from "@/src/component/typescript-basic/GenericType";
import { InheritanceExampleComponent } from "@/src/component/typescript-basic/Inheritance";
import { TypeScriptBasicComponent } from "@/src/component/typescript-basic/TypeScriptBasic";

export default function Page() {
  return (
    <div>
      <TypeScriptBasicComponent title="TypeScript Basics" />
      <GenericTypeExampleComponent />
      <InheritanceExampleComponent />
    </div>
  );
}
