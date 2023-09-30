/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { View, Text } from 'react-native';
import { Avatar, Bubble, SystemMessage, Message, MessageText } from 'react-native-gifted-chat';

export const renderAvatar = (props) => (
  <Avatar
    {...props}
    containerStyle={{ left: {marginVertical: 20}, right: {} }}
    imageStyle={{ left: {}, right: {} }}
  />
);

export const renderBubble = (props) => (
  <Bubble
    {...props}
    containerStyle={{
      left: {marginVertical: 20},
      right: {},
    }}
    wrapperStyle={{
      left: {},
      right: {},
    }}
    bottomContainerStyle={{
      left: {},
      right: {},
    }}
    tickStyle={{}}
    usernameStyle={{ color: 'black', fontWeight: '100' }}
    containerToNextStyle={{
      left: {},
      right: {},
    }}
    containerToPreviousStyle={{
      left: {},
      right: {},
    }}
  />
);

export const renderSystemMessage = (props) => (
  <SystemMessage
    {...props}
    containerStyle={{ backgroundColor: '#d7f1f7' }}
    wrapperStyle={{ borderWidth: 10, borderColor: 'white' }}
    textStyle={{ color: 'crimson', fontWeight: '900' }}
  />
);

export const renderMessage = (props) => (
  <Message
    {...props}
    containerStyle={{
      left: { backgroundColor: '#d7f1f7' },
      right: { backgroundColor: '#d7f1f7' },
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
    customTextStyle={{ fontSize: 18, fontFamily: 'Roboto', lineHeight: 18 }}
  />
);