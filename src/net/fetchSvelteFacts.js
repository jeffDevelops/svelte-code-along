export default async (where) => new Promise(async resolve => {

  let whereStr

  // Process the enum "type" value
  if (where) {
    const { type, ...rest } = where
    const typeStr = where.type ? `{ type: ${type} }` : ''
    const stringified = JSON.stringify({ ...rest }).replace(/\"([^(\")"]+)\":/g, "$1:")
    whereStr = stringified.substring(0, stringified.length - 2) + typeStr
  }
  
  const query = await fetch('http://localhost:4000', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `{
        svelteFacts ${where ? `(where: ${whereStr})` : ''} {
          id,
          title,
          description,
          type
        }
      }
    `
    })
  })
  return resolve((await query.json()).data.svelteFacts)
});