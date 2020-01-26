export default async (where) => new Promise(async resolve => {
  const query = await fetch('http://localhost:4000', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
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