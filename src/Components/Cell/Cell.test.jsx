import React from 'react';
import { shallow, render, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Cell, mapStateToProps } from './Cell';

describe('Cell', () => {
  const cellId = 1;
  const cellsById = { 1: 'Cell A2' };

  it('mapStateToProps', () => {
    const state = {
      messages: {
        ids: [99],
        messagesById: {
          99: {
            id: 99,
            subject:
              "You can't have a race condition in the websocket without updating the headers",
            starred: false,
            read: false,
            labels: ['dev', 'personal'],
            selected: false,
          },
        },
      },
    };
    const ownProps = { messageId: 99 };
    const expected = {
      message: {
        id: 99,
        subject: "You can't have a race condition in the websocket without updating the headers",
        starred: false,
        read: false,
        labels: ['dev', 'personal'],
        selected: false,
      },
      id: 99,
      subject: "You can't have a race condition in the websocket without updating the headers",
      starred: false,
      read: false,
      labels: ['dev', 'personal'],
      selected: false,
    };
    expect(mapStateToProps(state, ownProps)).toEqual(expected);
  });
});
