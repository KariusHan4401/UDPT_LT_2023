import React from 'react'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import { Container } from '@mui/material'

import CheckCircleOutlineSharpIcon from '@mui/icons-material/CheckCircleOutlineSharp'
// import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined'

const CompleteOrder = () => {
  // const params = new URLSearchParams(window.location.search)
  // const extraData = params.get('extraData')
  // const message = params.get('message')
  // const decodedString = atob(extraData);
  // const [linkPay, setLinkPay] = React.useState('')
  // const message = 'Thành công'

  return (
    <Container fixed sx={{ marginTop: '200px' }} maxWidth="xl">
      {/* {message !== 'Thất bại' ? (
        <Stack direction="column" justifyContent="center" alignItems="center">
          <Stack direction="row" spacing={5} justifyContent="center" alignItems="center">
            <CancelOutlinedIcon style={{ fontSize: '600%', color: '#EB5757' }} />
            <div
              style={{
                color: '#EB5757',
                fontWeight: 'Bold',
                fontSize: '40px',
                lineHeight: '48px',
              }}
            >
              Giao dịch thất bại!
            </div>
          </Stack>
          <Button
            style={{
              background: '#19A7CE',
              color: 'white',
              borderRadius: '0.375rem',
              marginTop: '1rem',
              fontWeight: 'Bold',
              fontSize: '28px',
            }}
            href="/"
          >
            Trở về trang chủ
          </Button>
        </Stack>
      ) : ( */}
      <Stack direction="column" justifyContent="center" alignItems="center">
        <Stack direction="row" spacing={5} justifyContent="center" alignItems="center">
          <CheckCircleOutlineSharpIcon style={{ fontSize: '600%', color: '#00B156' }} />
          <div
            style={{
              color: '#00B156',
              fontWeight: 'Bold',
              fontSize: '40px',
              lineHeight: '48px',
            }}
          >
            Giao dịch thành công!
          </div>
        </Stack>
        <Button
          style={{
            background: '#19A7CE',
            color: 'white',
            borderRadius: '0.375rem',
            marginTop: '1rem',
            fontWeight: 'Bold',
            fontSize: '28px',
          }}
          href="/"
        >
          Trở về trang chủ
        </Button>
      </Stack>
      {/* )} */}
    </Container>
  )
}

export default CompleteOrder
