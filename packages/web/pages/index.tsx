import type { NextPage } from 'next'
import { AssetView } from './[assetKey]'

const Home: NextPage = () => {
  return (
    <AssetView assetKey='BTC' />
  )
}

export default Home
