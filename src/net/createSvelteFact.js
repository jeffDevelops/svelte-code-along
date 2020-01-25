export default async (input) => {
  return await fetch('http://localhost:4000', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
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