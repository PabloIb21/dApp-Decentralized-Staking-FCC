import "./BalanceMsg.css";

interface BalanceMsgProps {
  label: string
  amount: number
  tokenImgSrc: string
}

export const BalanceMsg = ({ label, amount, tokenImgSrc }: BalanceMsgProps) => {
  return (
    <div className="container-balance">
      <div>{label}</div>
      <div className="amount">{amount}</div>
      <img className="token-img" src={tokenImgSrc} alt="token logo" />
    </div>
  )
}
