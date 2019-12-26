import React from "react";

import { Button } from "../../components/atoms/Button"
import { MARKETLISTTEXT } from "../../constants/texts";
import { MARKETLISTSIZE } from "../../constants/sizes";
import { CustomTab } from "../../components/molecules/CustomTab";

const MarketList = () => (
  <div>
    <CustomTab />
    <Button _width={MARKETLISTSIZE.tradeButton.x} _height={MARKETLISTSIZE.tradeButton.y} content={MARKETLISTTEXT.KOR.tradeButton} />
  </div>
)

export default MarketList