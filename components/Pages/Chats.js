import React, { useState, useEffect } from "react";
import { GiftedChat } from "react-native-gifted-chat";
import initialMessages from "./messages";
import {
  renderInputToolbar,
  renderActions,
  renderComposer,
  renderSend,
} from "./InputToolBar";
import {
  renderAvatar,
  renderBubble,
  renderSystemMessage,
  renderMessage,
  renderMessageText,
} from "./MessageContainer";

const Chats = () => {
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages(initialMessages.reverse());
  }, []);

  const onSend = (newMessages = []) => {
    setMessages((prevMessages) => GiftedChat.append(prevMessages, newMessages));
  };

  return (
    <GiftedChat
      messages={messages}
      text={text}
      onInputTextChanged={setText}
      onSend={onSend}
      user={{
        _id: 1,
        name: "User",
        avatar:
        'https://media.istockphoto.com/id/1414699113/photo/small-robot-assistant-work-with-graphic-display.webp?b=1&s=170667a&w=0&k=20&c=m8y0GFWEyDOsbqUGwOtMeiL5W2NVpDaCA522wsAm6B4=',
      }}
      alignTop
      alwaysShowSend
      scrollToBottom
      // showUserAvatar
      renderAvatarOnTop
      renderUsernameOnMessage
      bottomOffset={26}
      onPressAvatar={console.log}
      renderInputToolbar={renderInputToolbar}
      renderActions={renderActions}
      renderComposer={renderComposer}
      renderSend={renderSend}
      renderAvatar={renderAvatar}
      renderBubble={renderBubble}
      renderSystemMessage={renderSystemMessage}
      renderMessage={renderMessage}
      renderMessageText={renderMessageText}
      // renderMessageImage
      isCustomViewBottom
      messagesContainerStyle={{ backgroundColor: "#d7f1f7"}}
      parsePatterns={(linkStyle) => [
        {
          pattern: /#(\w+)/,
          style: linkStyle,
          onPress: (tag) => console.log(`Pressed on hashtag: ${tag}`),
        },
      ]}
    />
  );
};

export default Chats;
