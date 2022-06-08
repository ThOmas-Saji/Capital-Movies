import React from 'react'
import { Box, Button, Stack } from "@mui/material";
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (<Box>
    <Stack direction='row'>
      <Link className='link-tag' to={"/"}>
      <Button variant='link'>Home</Button>
      </Link>
    </Stack>
  </Box>)
}
