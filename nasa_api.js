const nasa = {
	/**
     * Astronomy Picture of the Day
	 * @param {string} date YYYY-MM-DD defaults to "today"
	 * @param {string} start_date YYYY-MM-DD
	 * @param {string} end_date YYYY-MM-DD defaults to "today"
	 * @param {number} count
	 * @param {boolean} thumbs
	 */
	APOD: (api_key = "DEMO_KEY", date = "today", start_date = null, end_date = "today", count = 0, thumbs = false) => {
		const url = new URL("https://api.nasa.gov/planetary/apod")
		url.searchParams.set("api_key", api_key)
		if (date !== "today") {
			url.searchParams.set("date", date)
		}
		if (end_date !== "today") {
			url.searchParams.set("end_date", end_date)
		}
		if (start_date !== null) {
			url.searchParams.set("start_date", start_date)
		}
		if (count !== 0) {
			url.searchParams.set("count", count)
		}
		url.searchParams.set("thumbs", thumbs ? "True" : "False")
		return url.href
	}
}
globalThis.nasa = nasa