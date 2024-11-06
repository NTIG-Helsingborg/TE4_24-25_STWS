"use client"
import sampleData from "@/the_file_tm.json"
export default function test({ index, length }: { index: number; length: number }) {
	return (
		<>
			<p style={{ whiteSpace: "pre" }}>
				{`pages: ${Math.floor(sampleData.people.length / length)}\nlast page number elem: ${
					sampleData.people.length % length
				}`}
			</p>
			{sampleData.people
				.slice(index * length, index * length + length)
				.map((ival) => {
					return ["people", ival[1]].join(":")
				})
				.flat(1)
				.map((val, index) => {
					return <p key={index}>{val}</p>
				})}
		</>
	)
}
