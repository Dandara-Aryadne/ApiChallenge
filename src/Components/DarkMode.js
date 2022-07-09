import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Switch from '@material-ui/core/Switch';
import styled, { createGlobalStyle } from "styled-components"
import paw from "../IMG/paw.png"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

  },
  menuButton: {
    marginRight: theme.spacing(3),
  },
  title: {
    flexGrow: 1,
  },
}));

const GlobaStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }
`

const Div = styled.div`
width:20%;
height:10vh;

`



export default function ButtonAppBar({check, change}) {
  const classes = useStyles();

  return (
    <div>
     <GlobaStyle/>
        <Toolbar >
            <Div>
        <Switch
        onChange={change}
        checked={check}
        style={{
        backgroundImage: `url(${paw})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        color:'transparent',
        backgroundColor:'inherit',
        width:25,
        marginLeft:10,
        marginRight:10

        }}
      />
      </Div>
        </Toolbar>
    </div>
  );
}