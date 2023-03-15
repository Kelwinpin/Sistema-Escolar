import { describe, it, expect } from "vitest";
import Aluno from "./Aluno";

describe("Testing Student class persistence", () => {
  const aluno1 = new Aluno("Kelwin", new Date(2002, 10, 14));
  it("getNome", () => {
    expect(aluno1.getNome).toBe("Kelwin");
  });
});
