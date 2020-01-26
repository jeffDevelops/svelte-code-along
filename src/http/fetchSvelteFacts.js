import { headers, url, method } from '../http'

export default async (where) => new Promise(async resolve => {
  const query = await fetch(url, {
    method,
    headers,
    body: JSON.stringify({
      variables: where ? { where } : null,
      query: `
        query svelteFacts ($where: SvelteFactQueryInput) {
          svelteFacts(where: $where) {
            id,
            title,
            description,
            type
          }
        }
      `,
    })
  })
  return resolve((await query.json()).data.svelteFacts)
});