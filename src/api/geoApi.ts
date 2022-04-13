import axios from 'axios'
import { ProperAddress } from '../types'

export async function getProperFromAddressTomTom(...addressString: string[]): Promise<ProperAddress> {
  const res = await axios.get(`https://api.tomtom.com/search/2/geocode/${addressString.join('%20')}.json?storeResult=false&view=Unified&key=${process.env.NEXT_PUBLIC_TOMTOM_API_KEY}`)
  const firstResult = res.data.results[0]
  return {
    address: {
      street: firstResult.address.streetName,
      city: firstResult.address?.municipality ?? firstResult.address?.city ?? firstResult.address?.localName,
      zip: firstResult.address.postalCode,
      country: firstResult.address.country,
    },
    geocode: {
      lat: firstResult.position.lat,
      lng: firstResult.position.lon,
    },
    formatedAddress: firstResult.address.freeformAddress + ', ' + firstResult.address.country,
  }
}
