import { headers, url, method } from '../http'

export default async (input) => {
  return await fetch(url, {
    method,
    headers,
    body: JSON.stringify({
      query: `
        mutation createSvelteFact($input: CreateSvelteFactInput!) {
          createSvelteFact(input: $input) {
            id
            title
            description
            approved
            type
          }
        }
      `,
      variables: {
        input
      },
    })
  })
}