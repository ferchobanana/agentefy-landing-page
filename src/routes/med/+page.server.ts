export async function load({ url }) {
    const fbclid = url.searchParams.get("fbclid")
    console.log(fbclid)
}