import React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import { ToastContainer } from 'react-toastify'
import { theme } from 'theme/theme.config'

import WebRoute from 'router'
import 'react-toastify/dist/ReactToastify.css'
import { ConfigProvider } from 'antd'

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#19A7CE',
        },
      }}
    >
      <ThemeProvider theme={theme}>
        <div className="App">
          <WebRoute />
        </div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </ThemeProvider>
    </ConfigProvider>
  )
}

export default App
