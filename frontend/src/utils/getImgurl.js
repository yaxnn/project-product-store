export default function getImgUrl (name) {
    return new URL(`../assets/games/${name}`,import.meta.url)
}
