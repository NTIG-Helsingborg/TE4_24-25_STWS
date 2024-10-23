import { GetStaticProps, NextPage } from "next";

interface Data {
  name: string;
  age: number;
  // Add other types based on your JSON structure
}

interface Props {
  data: Data;
}

const SamplePage: NextPage<Props> = ({ data }) => {
  return (
    <div>
      <h1>Data from JSON</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

// Fetch the data at build time
export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("http://localhost:3000/sample.json"); // Fetch from public folder
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

export default SamplePage;
