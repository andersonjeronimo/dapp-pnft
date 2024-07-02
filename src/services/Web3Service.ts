import { ethers } from "ethers";
import ABI from "./ABI.json";

const CONTRACT_ADDRESS: string = `${process.env.CONTRACT_ADDRESS}`;
const NFT_PRICE: bigint = ethers.parseEther(`${process.env.NFT_PRICE}`);

export default function Web3Service () {

}