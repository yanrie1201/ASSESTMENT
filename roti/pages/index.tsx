/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-key */
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar/index'
import {
  Box,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
  styled,
  TextField,
} from '@mui/material'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import MUIDataTable from 'mui-datatables'
import { OverviewCard } from '../components/card'
import { OverviewContent, TitleNav } from '../components/typography'
import { SubmitButton } from '../components/button'

const CssSelect = styled(Select)({
  '& label.Mui-focused': {
    color: '#1f96cc',
  },
  '& .MuiOutlinedInput-root': {
    '&:hover fieldset': {
      borderColor: '#1f96cc',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#1f96cc',
    },
  },
})

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#1f96cc',
  },
  '& .MuiOutlinedInput-root': {
    '&:hover fieldset': {
      bordercolor: '#1f96cc',
    },
    '&.Mui-focused fieldset': {
      bordercolor: '#1f96cc',
    },
  },
})

const columns = [
  {
    name: 'sumberPesanan',
    label: 'Sumber Pesanan',
  },
  {
    name: 'nama',
    label: 'Nama',
  },
  {
    name: 'noHp',
    label: 'No Hp',
  },
  {
    name: 'jumlahRoti',
    label: 'Jumlah Roti',
  },
  {
    name: 'keterangan',
    label: 'Keterangan',
  },
]

const data = [
  ['Joko', 'Whatsapp', 'joko@joko.com', '081234456677', '5', 'Coklat Semua'],
  ['Joko', 'Whatsapp', 'joko', '081234456677', '5', 'Coklat Semua'],
  ['Andi', 'Call', 'andi@andi.com', '091287389174', '2', 'Keju Semua'],
  ['Andi', 'Email', 'heru@heru.com', '091287389174', '3', '-'],
]

const Home: NextPage = () => {
  const [flag, setFlag] = useState<boolean>(false)
  const [sumberPesanan, setSumberPesanan] = useState<any>('')
  const [nama, setNama] = useState('')
  const [noHp, setNoHp] = useState('')
  const [jumlahRoti, setJumlahRoti] = useState('')
  const [keterangan, setKeterangan] = useState('')

  useEffect(() => {
    localStorage.setItem('sumberPesanan', sumberPesanan)
    localStorage.setItem('nama', nama)
    localStorage.setItem('noHp', noHp)
    localStorage.setItem('jumlahRoti', jumlahRoti)
    localStorage.setItem('keterangan', keterangan)
  }, [sumberPesanan, nama, noHp, jumlahRoti, keterangan, flag])

  return (
    <>
      <Head>
        <title>Home - JD360</title>
        <meta name="description" content="JD360" />
      </Head>

      <Navbar
        setBackgroundColor="#fff"
        setPosition="relative"
        setLogoFilter="#1F96CC"
        setTextColor="#fff"
        setShadow="5"
      />
      <main className={styles.home}>
        <section className={styles.categorySection}>
          <Container maxWidth="xl">
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              className={styles.categoryContainer}
            >
              <Grid md={12} className={styles.categoryTitle}>
                <span className={styles.colorBlack}></span>Home
              </Grid>
              <Grid md="auto" className={styles.categoryContent}>
                <Link href="#Dashboard">
                  <a>Dashboard</a>
                </Link>
              </Grid>
              <Grid md="auto" className={styles.categoryContent}>
                <Link href="#Form">
                  <a>Form</a>
                </Link>
              </Grid>
            </Grid>
          </Container>
        </section>
        <section className={styles.dashboard}>
          <Container maxWidth="xl">
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              className={styles.dashboardContent}
              id="Dashboard"
            >
              <Grid md={12} className={styles.dashboardTitle}>
                <span>Dashboard</span>
              </Grid>
              <Grid md={4} className={styles.dashboardCard}>
                <OverviewCard>
                  <TitleNav>Whatsapp</TitleNav>
                  <OverviewContent color="#000">
                    <OverviewContent color="#000" fontsize="33px">
                      30
                    </OverviewContent>
                    {'/'}
                    100
                  </OverviewContent>
                </OverviewCard>
              </Grid>
              <Grid md={4} className={styles.dashboardCard}>
                <OverviewCard>
                  <TitleNav>Call</TitleNav>
                  <OverviewContent color="#000">
                    <OverviewContent color="#000" fontsize="33px">
                      30
                    </OverviewContent>
                    {'/'}
                    100
                  </OverviewContent>
                </OverviewCard>
              </Grid>
              <Grid md={4} className={styles.dashboardCard}>
                <OverviewCard>
                  <TitleNav>Email</TitleNav>
                  <OverviewContent color="#000">
                    <OverviewContent color="#000" fontsize="33px">
                      30
                    </OverviewContent>
                    {'/'}
                    100
                  </OverviewContent>
                </OverviewCard>
              </Grid>
              <MUIDataTable
                data={data}
                columns={columns}
                options={{
                  selectableRows: 'none',
                  rowsPerPage: 10,
                  rowsPerPageOptions: [10, 15, 20],
                  elevation: 0,
                  pagination: true,
                }}
                title={undefined}
              />
            </Grid>
          </Container>
        </section>
        <section className={styles.form}>
          <Container maxWidth="xl">
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              className={styles.formContent}
              id="Form"
            >
              <Grid md={12} className={styles.formTitle}>
                <span className={styles.formTitle}>Form</span>
              </Grid>
              <Paper
                sx={{
                  margin: 'auto',
                  padding: '20px',
                  width: '50%',
                }}
              >
                {' '}
                <form>
                  <Stack direction="column" spacing={3}>
                    <FormControl fullWidth>
                      <InputLabel>Sumber Pesanan</InputLabel>
                      <CssSelect
                        label="Sumber Pesanan"
                        value={sumberPesanan}
                        onChange={(e) => setSumberPesanan(e.target.value)}
                      >
                        <MenuItem value="Whatsapp">Whatsapp</MenuItem>
                        <MenuItem value="Call">Call</MenuItem>
                        <MenuItem value="Email">Email</MenuItem>
                      </CssSelect>
                    </FormControl>
                    <CssTextField
                      type="text"
                      label="Nama"
                      inputProps={{ style: { fontSize: '14px' } }}
                      sx={{ width: '100%' }}
                      value={nama}
                      onChange={(e) => setNama(e.target.value)}
                    />
                    <CssTextField
                      type="text"
                      label="No Hp"
                      inputProps={{ style: { fontSize: '14px' } }}
                      sx={{ width: '100%' }}
                      value={noHp}
                      onChange={(e) => setNoHp(e.target.value)}
                    />
                    <CssTextField
                      type="text"
                      label="Jumlah Roti"
                      inputProps={{ style: { fontSize: '14px' } }}
                      sx={{ width: '100%' }}
                      value={jumlahRoti}
                      onChange={(e) => setJumlahRoti(e.target.value)}
                    />
                    <CssTextField
                      multiline
                      type="text"
                      label="Keterangan"
                      inputProps={{ style: { fontSize: '14px' } }}
                      sx={{ width: '100%' }}
                      value={keterangan}
                      onChange={(e) => setKeterangan(e.target.value)}
                    />
                  </Stack>
                  <Box
                    width="100%"
                    display="flex"
                    justifyContent="flex-end"
                    paddingTop="20px"
                  >
                    <SubmitButton fsize="20px" width="25%" type="submit">
                      Submit
                    </SubmitButton>
                  </Box>
                </form>
              </Paper>
            </Grid>
          </Container>
        </section>
      </main>
    </>
  )
}

export default Home
