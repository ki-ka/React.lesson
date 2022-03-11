import React from "react";
import { ColoredMessage } from "./componemts/ColoredMessage";

const App = () => {
  const onClickButton = () => alert();
  return (
    <>
      <ColoredMessage color="green" fontSize="18px">
        元気確認
      </ColoredMessage>
      <ColoredMessage color="blue">お元気ですか</ColoredMessage>
      <ColoredMessage color="pink">元気です</ColoredMessage>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
