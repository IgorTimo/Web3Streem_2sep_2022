import { ethers } from "ethers";
import provider from "./provider";

const address = "0x24Fd99097E91B023d8602d71D23EE3991C788955";
const abi = [
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "history",
    outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "number",
    outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint8", name: "_number", type: "uint8" }],
    name: "setNumber",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
const numberContract = new ethers.Contract(address, abi, provider);

export default numberContract;