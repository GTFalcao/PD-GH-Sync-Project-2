// To use any npm package on Pipedream, just import it
import axios from "axios"

export default defineComponent({
  async run({ steps, $ }) {
    const { data } = await axios({
      method: "GET",
      url: "https://pokeapi.co/api/v2/pokemon/charizard",
    })
    return data.species
  },
})
