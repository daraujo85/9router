import { describe, expect, it } from "vitest";

import { getModelsByProviderId } from "../../open-sse/config/providerModels.js";
import { getCapabilitiesForModel } from "../../open-sse/providers/capabilities.js";
import { getPricingForModel } from "../../open-sse/providers/pricing.js";
import "../translator/registerAll.js";

const HAIKU_55_IDS = ["claude-haiku-5-5", "claude-haiku-5-5-high", "claude-haiku-5-5-medium", "claude-haiku-5-5-low"];

describe("Claude Haiku 5.5", () => {
  it("is listed for the claude provider", () => {
    expect(getModelsByProviderId("claude").some((model) => model.id === "claude-haiku-5-5")).toBe(true);
  });

  it.each(HAIKU_55_IDS)("%s resolves to adaptive thinking with 1M context", (model) => {
    expect(getCapabilitiesForModel("claude", model)).toMatchObject({
      reasoning: true,
      thinkingFormat: "claude-adaptive",
      contextWindow: 1000000,
      maxOutput: 128000,
    });
  });

  it.each(HAIKU_55_IDS)("prices %s at Haiku 5.5 rates ($0.10/$0.50)", (model) => {
    expect(getPricingForModel("claude", model)).toEqual({ input: 0.1, output: 0.5, cached: 0.01, reasoning: 0.5, cache_creation: 0.125 });
  });
});
