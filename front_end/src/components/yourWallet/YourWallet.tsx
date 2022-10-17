import { useState } from "react";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import { Token } from "../Main";
import "./YourWallet.css";
import { WalletBalance } from "./WalletBalance";
import { StakeForm } from "./StakeForm";

interface YourWalletProps {
  supportedTokens: Array<Token>
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: string;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={Number(value) !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {Number(value) === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export const YourWallet = ({ supportedTokens }: YourWalletProps) => {
  const [selectedTokenIndex, setSelectedTokenIndex] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setSelectedTokenIndex(parseInt(newValue));
  };

  return (
    <Box>
      <h1 className="header">Your Wallet</h1>
      <Box className="box">
        <Tabs value={selectedTokenIndex.toString()} onChange={handleChange} aria-label="stake forms tabs">
          { supportedTokens.map((token, index) => (
            <Tab 
              label={token.name}
              value={index.toString()}
              key={index}
              {...a11yProps(index)}
            />
          ))}
        </Tabs>
        { supportedTokens.map((token, index) => {
          return (
            <TabPanel value={index.toString()} key={index} index={selectedTokenIndex}>
              <div className="tab-content">
                <WalletBalance token={supportedTokens[selectedTokenIndex]} />
                <StakeForm token={supportedTokens[selectedTokenIndex]} />
              </div>
            </TabPanel>
          )
        })}
      </Box>
    </Box>
  )
}
