import { useEthers } from "@usedapp/core";
import { constants } from "ethers"
import { YourWallet } from "./yourWallet";
import helperConfig from "../helper-config.json";
import networkMapping from "../chain-info/deployments/map.json";
import brownieConfig from "../brownie-config.json";
import dapp from "../dapp.png";
import eth from "../eth.png";
import dai from "../dai.png";
import "./Main.css";

export type Token = {
  image: string,
  address: string,
  name: string,
}

export const Main = () => {
  const { chainId } = useEthers();
  const networkName = chainId ? helperConfig[chainId] : "dev";
  let stringChainId = String(chainId);
  const dappTokenAddress = chainId ? networkMapping[stringChainId]["DappToken"][0] : constants.AddressZero;
  const wethTokenAddress = chainId ? brownieConfig["networks"][networkName]["weth_token"] : constants.AddressZero;
  const fauTokenAddress = chainId ? brownieConfig["networks"][networkName]["fau_token"] : constants.AddressZero;

  const supportedTokens: Array<Token> = [
    {
      image: dapp,
      address: dappTokenAddress,
      name: "DAPP"
    },
    {
      image: eth,
      address: wethTokenAddress,
      name: "WETH"
    },
    {
      image: dai,
      address: fauTokenAddress,
      name: "DAI"
    }
]

  return (
    <>
      <h2 className="title">Dapp Token App</h2>
      <YourWallet supportedTokens={supportedTokens} />
    </>
  )
}
