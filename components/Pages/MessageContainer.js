/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { View, Text } from 'react-native';
import { Avatar, Bubble, SystemMessage, Message, MessageText } from 'react-native-gifted-chat';

export const renderAvatar = (props) => (
  <Avatar
    {...props}
    containerStyle={{ left: {}, right: {} }}
    imageStyle={{ left: { borderWidth: 3, borderColor: 'blue' }, right: {} }}
  />
);

export const renderBubble = (props) => (
  <Bubble
    {...props}
    containerStyle={{
      left: {},
      right: {},
    }}
    wrapperStyle={{
      left: { borderColor: 'black', borderWidth: 2 },
      right: {},
    }}
    bottomContainerStyle={{
      left: { borderColor: 'white', borderWidth: 4 },
      right: {},
    }}
    tickStyle={{}}
    usernameStyle={{ color: 'black', fontWeight: '100' }}
    containerToNextStyle={{
      left: { borderColor: 'black', borderWidth: 4 },
      right: {},
    }}
    containerToPreviousStyle={{
      left: { borderColor: 'mediumorchid', borderWidth: 4 },
      right: {},
    }}
  />
);

export const renderSystemMessage = (props) => (
  <SystemMessage
    {...props}
    containerStyle={{ backgroundColor: 'white' }}
    wrapperStyle={{ borderWidth: 10, borderColor: 'white' }}
    textStyle={{ color: 'crimson', fontWeight: '900' }}
  />
);

export const renderMessage = (props) => (
  <Message
    {...props}
    containerStyle={{
      left: { backgroundColor: 'white' },
      right: { backgroundColor: 'white' },
    }}
  />
);

export const renderMessageText = (props) => (
  <MessageText
    {...props}
    containerStyle={{
      left: { backgroundColor: 'white' },
      right: { backgroundColor: 'white' },
    }}
    textStyle={{
      left: { color: 'black' },
      right: { color: 'black' },
    }}
    linkStyle={{
      left: { color: 'black' },
      right: { color: 'black' },
    }}
    customTextStyle={{ fontSize: 24, lineHeight: 24 }}
  />
);

export const renderCustomView = ({ user }) => (
  <View style={{ minHeight: 20, alignItems: 'center' }}>
    <Text>
      Current user:
      {user.name}
    </Text>
    <Text>From CustomView</Text>
  </View>
);