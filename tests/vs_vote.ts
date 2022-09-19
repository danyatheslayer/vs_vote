import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { VsVote } from "../target/types/vs_vote";

describe("vs_vote", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.VsVote as Program<VsVote>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
