import React from "react";

import { Button } from "./components/atoms/Button"
import { Menu, MenuItem } from "./components/atoms/Menu";
import { MARKETLISTTEXT } from "./constants/texts";
import { MARKETLISTSIZE } from "./constants/sizes";

const MarketList = () => (
  <div>
    <Menu>
      <MenuItem>USDT</MenuItem>
      <MenuItem>BTC</MenuItem>
    </Menu>
    <Button _width={MARKETLISTSIZE.tradeButton.x} _height={MARKETLISTSIZE.tradeButton.y} content={MARKETLISTTEXT.KOR.tradeButton} />
  </div>
)

export default MarketList