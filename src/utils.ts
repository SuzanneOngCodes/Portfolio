export default function pathOnLanguage(path: string, locale: string) {
	const cleanPath = path.replace(/\/(en|zh)(\/|$)/g, "/");

	if (locale === "en") {
		return cleanPath;
	} else {
		return cleanPath.replace("/Portfolio/", `/Portfolio/${locale}/`);
	}
}
