import HomeExt from "./home-ext";

export default function Home() {
  const props = {
    test: "Test",
  };
  return (
    <>
      <HomeExt {...props} />
    </>
  );
}
