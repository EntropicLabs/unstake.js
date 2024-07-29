import { fetchContracts } from "../src/registry/contracts";
import "dotenv/config";
import { config } from "dotenv";
config({ path: __dirname + "/.env" });

const contractData = await fetchContracts(
  process.env["REGISTRY-API-URL"] || ""
);

const outputDir = "src/registry";

await writeContractToJson(
  JSON.stringify(contractData["controller"], null, 4),
  outputDir,
  "controller"
);
await writeContractToJson(
  JSON.stringify(contractData["reserve"], null, 4),
  outputDir,
  "reserve"
);

async function writeContractToJson(
  contractData: any,
  outputDir: string,
  contractName: string
) {
  const output = `${outputDir}/${contractName}.ts`;
  const data = `
      import type { Registry } from ".";
      const registry = ${contractData};
      const typedRegistry: Registry<typeof registry> = registry;
      export default typedRegistry;
      `.trim();
  await Bun.write(output, data);
}
