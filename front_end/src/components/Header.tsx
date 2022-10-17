import { useEthers } from "@usedapp/core";
import { Button } from "@mui/material";
import "./Header.css";

export const Header = () => {
  const { account , activateBrowserWallet, deactivate } = useEthers();

  const isConnected = account !== undefined;

  return (
    <div className="container">
      <div>
        { isConnected ? (
            <Button variant="contained"
              onClick={deactivate}
            >
              Disconnect
            </Button>
          ) : (
            <Button variant="contained"
              onClick={activateBrowserWallet}
            >
              Connect
            </Button>
          )
        }
      </div>
    </div>
  )
}
