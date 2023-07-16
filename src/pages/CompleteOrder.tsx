import React from 'react'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import { Container } from '@mui/material'

import CheckCircleOutlineSharpIcon from '@mui/icons-material/CheckCircleOutlineSharp'
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined'

const CompleteOrder = () => {
  const params = new URLSearchParams(window.location.search)
  const message = params.get('message')

  return (
    <Container fixed sx={{ marginTop: '200px' }} maxWidth="xl">
      {message === 'Success' ? (
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
              The transaction is sucessful!
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
            Back to homepage!
          </Button>
        </Stack>
      ) : (
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
              The transaction is fail!
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
            Back to homepage!
          </Button>
        </Stack>
      )}
    </Container>
  )
}

export default CompleteOrder
