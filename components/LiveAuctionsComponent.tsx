import { useEffect, useState } from "react";
import axios from "axios";
import { Box } from '@chakra-ui/react'
import { Col } from 'react-bootstrap'
import { convertToArray, convertToList } from "utils/convertDataStructures";
import { useAppDispatch, useAppSelector } from "utils/redux";
import { setLiveAuctions } from "reducers/appReducer";
import Product from "components/Product";

function LiveAuctionsComponent() {
  const Dispatch = useAppDispatch();
  const live = useAppSelector((state) => state.app.liveAuctions);
  const liveAuctions = convertToArray(live);

  useEffect(() => {
    axios
      .get("https://stapi.artsplit.com/v1/auction/view_live_auctions")
      .then((resp) => {
        // console.log(resp.data.data);
        // setLiveAuctions(resp?.data?.data);
        Dispatch(setLiveAuctions(convertToList(resp.data.data)));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [Dispatch]);
  return (
    <>
      {liveAuctions?.slice(0, 8)?.map((item) => (
        <Box as={Col} key={item?._id} xs={12} md={6} lg={4} mb="3rem">
          <Product link="/auction" item={item} />
        </Box>
      ))}
    </>
  );
}

export default LiveAuctionsComponent;
