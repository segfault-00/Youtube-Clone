import React from "react";
import { Stack, Box } from "@mui/material";

import { ChannelCard, Loader, VideoCard } from "./";

const Videos = ({ videos, direction }) => {
  if(!videos?.length) return <Loader />;
  
  return (
    <Box sx={{ borderColor: 'secondary.main' }}>

    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="center" alignItems="start" gap={3}>
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} /> }
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>

      ))}
    </Stack>
    </Box>
  );
}

export default Videos;