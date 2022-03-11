import Styling from '../styles/index.module.css'
import Head from 'next/head'
import { FeatureCard, Marquee, Meta, NavigationBar, SearchBar } from '../components'

export default function Index() {
  return (
    <>
      <Head>
        <title>Rently.io - Find what you need</title>
        <link href="https://use.fontawesome.com/releases/v5.0.1/css/all.css" rel="stylesheet" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main>
        <Meta />
        <NavigationBar />
        <Marquee rows={1} items={10} seconds={150} />
        <SearchBar />
        <Marquee rows={1} items={10} seconds={150} reversed={true} />
        {/* <h1>24/7 support to keep it running smoothly</h1> */}
        {/* <div className={Styling.features}>
          <FeatureCard title={'Some title'} desc={'A somewhat short descrpition of the service'} />
          <FeatureCard title={'Some title'} desc={'A somewhat short descrpition of the service'} />
          <FeatureCard title={'Some title'} desc={'A somewhat short descrpition of the service'} />
          <FeatureCard title={'Some title'} desc={'A somewhat short descrpition of the service'} />
        </div> */}
      </main>
    </>
  )
}