import { styled } from "styled-components"
import GridItem from "./Grids/GridItem"
import { useQuery } from 'react-query';
import { roomsData } from "../../../api/mainApi";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Grid } from '@mui/material';
import Typography from "@mui/material/Typography";
import React from "react";
import LikeButton from "./Grids/LikeButton";
import { AspectRatio } from "@mui/joy";


function Grids() {

  const {isError, data} = useQuery('rooms', roomsData)
  if(isError){
    console.log('오류났습니당.')
  }

  return (
    <GridLayout>
    <GridLayout>
      <Grid container spacing={3} columns={40} justifyContent='center'>
        {data?.map((item) => (
          <GridItem item={item} key={item.roomId}/>
        ))}
      </Grid>
    </GridLayout>
    </GridLayout>
  )
}
export default Grids

const GridLayout = styled.div`
    padding-inline-start : 40px;
    padding-inline-end : 40px;
`

// const GridContainer = styled.div`
//     display : grid;
//     grid-auto-flow : row dense;
//     row-gap : 10px;
//     grid-template-columns : 1fr 1fr 1fr 1fr;
//     grid-template-rows : 1fr 1fr 1fr 1fr;
//     grid-row-gap : 20px;
//     grid-column-gap : 10px;
// `