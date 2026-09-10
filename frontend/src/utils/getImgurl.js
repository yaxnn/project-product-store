export default function getImgUrl (name) {
    if (!name) return "";
    if (name.startsWith("http://") || name.startsWith("https://")) {
        return name;
    }
    return new URL(`../assets/games/${name}`, import.meta.url).href;
}

