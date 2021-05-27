import { Grid, List, ListItem, ListItemText, Paper } from '@material-ui/core';
import React from 'react';
import './index.scss';
export default function Card1({ states, handleClick, selected }) {
  // console.log("inside card1",states);
  return (
    <>
      {/* <div style={{}}> */}
      <List
        style={{ maxWidth: '100%', maxHeight: '100%', overflowY: 'auto' }}
        dense
      >
        {states.map((state) => (
          <ListItem
            alignItems='center'
            button
            key={state}
            onClick={() => handleClick(state)}
            style={{
              borderRadius: '30px',
              backgroundColor:
                selected === state ? 'rgb(14 36 146)' : 'transparent',
            }}
          >
            <ListItemText
              primary={
                <span
                  style={{
                    fontSize: '17px',
                    fontWeight: 700,
                    color: selected === state ? 'white' : '#A09CB4',
                  }}
                >
                  {state}
                </span>
              }
            />
          </ListItem>
        ))}
      </List>
      {/* </div> */}
    </>
  );
}
