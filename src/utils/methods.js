export async function Fetch(url, options = {}) {
    const res = await fetch(url, options);
    const data = await res.json();
    return await data;
}