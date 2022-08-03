/* eslint-disable react/jsx-key */
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavBar from '../components/navbar/index'
import Navbar from '../components/navbar/index'
import {
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  styled,
} from '@mui/material'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Provider from '../provider/index'
import { toast } from 'react-toastify'
import MUIDataTable from 'mui-datatables'

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

const Home: NextPage = () => {
  const [topTracks, setTopTracks] = useState([])
  const [topArtist, setTopArtist] = useState([])
  useEffect(() => {
    const Tracks = async () => {
      try {
        const returnedData = await Provider.getTopTracks()
        setTopTracks(returnedData.tracks.track)
        const trackCount: number = returnedData?.tracks?.track?.length
      } catch (error: any) {
        if (error.response?.data.message === undefined) {
          toast.error('API is down, please try again letter')
        } else {
          toast.error(error.response?.data.message)
        }
      }
    }
    const Artists = async () => {
      try {
        const returnedData = await Provider.getTopArtist()
        setTopArtist(returnedData.artists.artist)
      } catch (error: any) {
        if (error.response?.data.message === undefined) {
          toast.error('API is down, please try again letter')
        } else {
          toast.error(error.response?.data.message)
        }
      }
    }

    Tracks(), Artists()
  }, [])

  const columns = [
    {
      name: 'name',
      label: 'Song Title',
    },
    {
      name: 'playcount',
      label: 'Total Play Count',
    },
    {
      name: 'listeners',
      label: 'Total Listeners',
    },
    {
      name: 'url',
      label: 'URL',
      options: {
        customBodyRender: (value: any, tableMeta: any) => {
          return (
            <>
              <a href={value} target="_blank" rel="noreferrer">
                {value}
              </a>
            </>
          )
        },
      },
    },
  ]

  const columns1 = [
    {
      name: 'name',
      label: 'Artist',
    },
    {
      name: 'playcount',
      label: 'Total Play Count',
    },
    {
      name: 'listeners',
      label: 'Total Listeners',
    },
    {
      name: 'url',
      label: 'URL',
      options: {
        customBodyRender: (value: any, tableMeta: any) => {
          return (
            <>
              <a href={value} target="_blank" rel="noreferrer">
                {value}
              </a>
            </>
          )
        },
      },
    },
  ]

  return (
    <>
      <Head>
        <title>Home - SIRCLO</title>
        <meta name="description" content="SIRCLO" />
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
                <span className={styles.colorBlack}>Our</span> Feature
              </Grid>
              <Grid md="auto" className={styles.categoryContent}>
                <Link href="#topTracks">
                  <a>Top Tracks</a>
                </Link>
              </Grid>
              <Grid md="auto" className={styles.categoryContent}>
                <Link href="#topArtists">
                  <a>Top Artists</a>
                </Link>
              </Grid>
            </Grid>
          </Container>
        </section>
        <section className={styles.featureSection}>
          <Container maxWidth="xl">
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              className={styles.topTracks}
              id="topTracks"
            >
              <Grid md={12} className={styles.topTracksTitle}>
                <span>Top & Search Tracks</span>
              </Grid>
              <MUIDataTable
                data={topTracks}
                columns={columns}
                options={{
                  selectableRows: 'none',
                  rowsPerPage: 10,
                  rowsPerPageOptions: [10, 15, 20],
                  elevation: 0,
                  pagination: true,
                  enableNestedDataAccess: '.',
                  textLabels: {
                    body: {
                      noMatch: 'No Data',
                    },
                  },
                }}
                title={undefined}
              />
            </Grid>
          </Container>
        </section>
        <section className={styles.featureSection}>
          <Container maxWidth="xl">
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              className={styles.topTracks}
              id="topArtists"
            >
              <Grid md={12} className={styles.topTracksTitle}>
                <span>Top & Search Artist</span>
              </Grid>
              <MUIDataTable
                data={topArtist}
                columns={columns1}
                options={{
                  selectableRows: 'none',
                  rowsPerPage: 10,
                  rowsPerPageOptions: [10, 15, 20],
                  elevation: 0,
                  pagination: true,
                  enableNestedDataAccess: '.',
                  textLabels: {
                    body: {
                      noMatch: 'No Data',
                    },
                  },
                }}
                title={undefined}
              />
            </Grid>
          </Container>
        </section>
      </main>
    </>
  )
}

export default Home
