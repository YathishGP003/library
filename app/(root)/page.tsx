import BookList from "@/components/BookList";
import BookOverview from "@/components/BookOverview";

const Home = async () => {
  return (
    <>
      <BookOverview />
      <BookList />
    </>
  );
};

export default Home;
