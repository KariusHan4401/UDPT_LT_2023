import React, { useEffect, useState } from 'react'

import Container from '@mui/material/Container'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import { styled } from '@mui/material/styles'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Unstable_Grid2'

import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'

import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { dataInfos } from 'const/dataInfos'
import { CardMedia } from '@mui/material'
// import { pay } from 'api/Order'
// import Paypal from 'image/checkout/paypal.png'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}))

const TAX_RATE = 0.1
const USD_RATE = 23650

function ccyFormat(num: number) {
  return `${new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(num)}`
}

interface Row {
  id: number
  desc: string
  qty: number
  unit: number
  price: number
  imgURL: any
}

function subtotal(items: readonly Row[]) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0)
}

const Home = () => {
  const [selectPay, setSelectPay] = useState<number>(0)
  const [data, setData] = useState<Row[]>(dataInfos)
  const [invoiceSubtotal, setInvoiceSubtotal] = useState<number>(0)
  const [invoiceTaxes, setInvoiceTaxes] = useState<number>(0)
  const [invoiceTotal, setInvoiceTotal] = useState<number>(0)
  // const [payLink, setPayLink] = useState<string>('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectPay(Number((event.target as HTMLInputElement).value))
  }

  useEffect(() => {
    const invoiceSubtotalTemp = subtotal(data) / USD_RATE
    const invoiceTaxesTemp = TAX_RATE * invoiceSubtotalTemp
    const invoiceTotalTemp = invoiceSubtotalTemp + invoiceTaxesTemp

    setInvoiceSubtotal(invoiceSubtotalTemp)
    setInvoiceTaxes(invoiceTaxesTemp)
    setInvoiceTotal(invoiceTotalTemp)
  }, [data])

  const payment = async () => {
    try {
      // const res = await pay(data)
      // setPayLink(res.PayLink)
    } catch (error) {
      // console.log(error)
    }
  }

  return (
    <Container fixed sx={{ marginTop: '50px' }} maxWidth="xl">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={8}>
          <Grid xs={8}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label="spanning table">
                <TableHead>
                  <StyledTableRow>
                    <StyledTableCell align="center" sx={{ fontWeight: 'Bold' }}>
                      Image
                    </StyledTableCell>
                    <StyledTableCell align="center" sx={{ fontWeight: 'Bold' }}>
                      Description
                    </StyledTableCell>
                    <StyledTableCell align="center" sx={{ fontWeight: 'Bold' }}>
                      Quantity
                    </StyledTableCell>
                    <StyledTableCell align="center" sx={{ fontWeight: 'Bold' }}>
                      Unit
                    </StyledTableCell>
                    <StyledTableCell align="center" sx={{ fontWeight: 'Bold' }}>
                      Sum
                    </StyledTableCell>
                  </StyledTableRow>
                </TableHead>
                <TableBody>
                  {data.map((item) => (
                    <StyledTableRow key={item.id}>
                      <StyledTableCell>
                        <CardMedia component="img" height="100" image={item.imgURL} alt={item.desc} />
                      </StyledTableCell>
                      <StyledTableCell>{item.desc}</StyledTableCell>
                      <StyledTableCell align="center">
                        <TextField
                          type="number"
                          inputProps={{ inputMode: 'numeric', pattern: '[0-9]*', min: 0, max: 10 }}
                          defaultValue={0}
                          onChange={(e) => {
                            const newData = [...data]
                            for (let i = 0; i < newData.length; i += 1) {
                              if (newData[i].id === item.id) {
                                newData[i].qty = Number(e.target.value)
                                newData[i].price = newData[i].qty * newData[i].unit
                              }
                            }
                            setData(newData)
                          }}
                        />
                      </StyledTableCell>
                      <StyledTableCell align="center">{ccyFormat(item.unit / USD_RATE)}</StyledTableCell>
                      <StyledTableCell
                        align="center"
                        sx={{
                          width: '100px',
                        }}
                      >
                        {ccyFormat(item.price / USD_RATE)}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                  <StyledTableRow>
                    <StyledTableCell rowSpan={3} />
                    <StyledTableCell rowSpan={3} />
                    <StyledTableCell colSpan={2}>Subtotal</StyledTableCell>
                    <StyledTableCell align="center">{ccyFormat(invoiceSubtotal)}</StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow>
                    <StyledTableCell>Tax</StyledTableCell>
                    <StyledTableCell align="center">{`${(TAX_RATE * 100).toFixed(0)} %`}</StyledTableCell>
                    <StyledTableCell align="center">{ccyFormat(invoiceTaxes)}</StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow>
                    <StyledTableCell colSpan={2} sx={{ fontWeight: 'Bold' }}>
                      Total
                    </StyledTableCell>
                    <StyledTableCell align="center">{ccyFormat(invoiceTotal)}</StyledTableCell>
                  </StyledTableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid xs={4}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 200 }} aria-label="spanning table">
                <TableHead>
                  <StyledTableRow>
                    <StyledTableCell align="center" sx={{ fontWeight: 'Bold' }}>
                      Payment Method
                    </StyledTableCell>
                  </StyledTableRow>
                </TableHead>
              </Table>
              <TableBody>
                <Container fixed>
                  <FormControl>
                    <RadioGroup
                      aria-labelledby="payment-radio-buttons-group-label"
                      defaultValue={0}
                      name="radio-buttons-group"
                      value={selectPay}
                      onChange={handleChange}
                    >
                      <FormControlLabel value={0} control={<Radio />} label="PayPal" />
                      <FormControlLabel value={1} control={<Radio />} label="Momo" />
                      <FormControlLabel value={2} control={<Radio />} label="COD" />
                    </RadioGroup>
                  </FormControl>
                </Container>
              </TableBody>
            </TableContainer>
            <Button
              variant="contained"
              disableElevation
              sx={{ minWidth: '100%', marginTop: '10px', fontWeight: 'Bold' }}
              onClick={() => {
                payment()
              }}
            >
              Pay
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}
export default Home
