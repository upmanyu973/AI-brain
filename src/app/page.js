import Image from 'next/image'
import styles from './page.module.css'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import NewLaunches from '../components/newLaunches'
import OtherCards from '../components/otherCards'
import Trending from '../components/Trending'
import Influencer from '../components/influencer'

export default function Home() {
  return (
    <div style={{ padding: "0" }} className={styles.main}>
      <Slider />
      <Categories />
      <NewLaunches/>
      <OtherCards />
      <Trending />
      <Influencer />
    </div>
  )
}
