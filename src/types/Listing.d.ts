import Address from './Address'
import Contact from './Contact'

export default interface Listing {
  id: string
  name: string
  desc: string
  price: string
  image: string
  createAt: number
  address: Address
  leaser: Contact
}